<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
if ($path === '/api/health' || $path === '/') {
    echo json_encode(['service' => 'codewithsiam-php-api', 'status' => 'ok']);
    exit;
}

if ($path !== '/api/courses') {
    http_response_code(404);
    echo json_encode(['error' => 'Not found']);
    exit;
}

$projectId = getenv('FIREBASE_PROJECT_ID') ?: '';
if ($projectId === '') {
    http_response_code(503);
    echo json_encode(['error' => 'FIREBASE_PROJECT_ID is not configured']);
    exit;
}

$url = 'https://firestore.googleapis.com/v1/projects/' . rawurlencode($projectId) . '/databases/(default)/documents/courses';
$context = stream_context_create(['http' => ['timeout' => 5, 'ignore_errors' => true]]);
$body = @file_get_contents($url, false, $context);
if ($body === false) {
    http_response_code(502);
    echo json_encode(['error' => 'Course catalog is unavailable']);
    exit;
}

$payload = json_decode($body, true);
if (!is_array($payload)) {
    http_response_code(502);
    echo json_encode(['error' => 'Invalid course catalog response']);
    exit;
}

$courses = [];
foreach ($payload['documents'] ?? [] as $document) {
    $fields = $document['fields'] ?? [];
    $value = static fn(string $key, string $fallback = ''): string => $fields[$key]['stringValue'] ?? $fallback;
    $name = $document['name'] ?? '';
    $courses[] = [
        'id' => basename($name),
        'title' => $value('title'),
        'description' => $value('description'),
        'category' => $value('category', 'General'),
        'language' => $value('language'),
        'status' => $value('status', 'draft'),
    ];
}

echo json_encode(['courses' => $courses, 'count' => count($courses)]);
