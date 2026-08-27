import json
import os
from urllib.error import HTTPError, URLError
from urllib.request import urlopen

from django.http import JsonResponse


def health(_request):
    return JsonResponse({'service': 'codewithsiam-python-api', 'status': 'ok'})


def courses(_request):
    project_id = os.getenv('FIREBASE_PROJECT_ID', '')
    if not project_id:
        return JsonResponse({'error': 'FIREBASE_PROJECT_ID is not configured'}, status=503)

    endpoint = f'https://firestore.googleapis.com/v1/projects/{project_id}/databases/(default)/documents/courses'
    try:
        with urlopen(endpoint, timeout=5) as response:
            payload = json.load(response)
    except (HTTPError, URLError, TimeoutError) as error:
        return JsonResponse({'error': 'Course catalog is unavailable', 'detail': str(error)}, status=502)

    result = []
    for document in payload.get('documents', []):
        fields = document.get('fields', {})
        result.append({
            'id': document['name'].rsplit('/', 1)[-1],
            'title': fields.get('title', {}).get('stringValue', ''),
            'description': fields.get('description', {}).get('stringValue', ''),
            'category': fields.get('category', {}).get('stringValue', 'General'),
            'language': fields.get('language', {}).get('stringValue', ''),
            'status': fields.get('status', {}).get('stringValue', 'draft'),
        })
    return JsonResponse({'courses': result, 'count': len(result)})
