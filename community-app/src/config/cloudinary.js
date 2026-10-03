const CLOUDINARY_NAME = 'fyelzeqn';

export const CLOUDINARY_CONFIG = Object.freeze({
  cloudName: CLOUDINARY_NAME,
  uploadPreset: 'codewithsiam_images',
  uploadEndpoint: `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`,
});

export const CLOUDINARY_MAX_FILE_SIZE = 5 * 1024 * 1024;
export const CLOUDINARY_MAX_IMAGE_WIDTH = 1600;

const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

function cloudinaryError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}

export function validateCloudinaryImage(file, { allowGif = false } = {}) {
  const extension = file?.name?.split('.').pop()?.toLowerCase() || '';
  const allowedTypes = new Set(allowGif ? [...IMAGE_TYPES, 'image/gif'] : IMAGE_TYPES);
  const allowedExtensions = new Set(allowGif ? [...IMAGE_EXTENSIONS, 'gif'] : IMAGE_EXTENSIONS);
  const allowedFormats = allowGif
    ? 'Only JPG, PNG, WebP or GIF images up to 5MB are allowed'
    : 'Only JPG, JPEG, PNG, and WebP images are supported.';
  if (!file || (!allowedTypes.has(file.type) && !allowedExtensions.has(extension))) {
    throw cloudinaryError('INVALID_IMAGE_TYPE', allowedFormats);
  }
  if (file.type && !allowedTypes.has(file.type)) {
    throw cloudinaryError('INVALID_IMAGE_TYPE', allowedFormats);
  }
  if (file.size > CLOUDINARY_MAX_FILE_SIZE) {
    throw cloudinaryError('IMAGE_TOO_LARGE', 'Images must be 5 MB or smaller.');
  }
}

export async function prepareCloudinaryImage(file, { allowGif = false } = {}) {
  validateCloudinaryImage(file, { allowGif });

  let bitmap;
  try {
    bitmap = await createImageBitmap(file);
    const extension = file.name?.split('.').pop()?.toLowerCase();
    const isGif = file.type === 'image/gif' || extension === 'gif';
    const scale = isGif ? 1 : Math.min(1, CLOUDINARY_MAX_IMAGE_WIDTH / bitmap.width);
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));

    if (scale === 1) return { file, width, height };

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Image processing is unavailable.');
    context.drawImage(bitmap, 0, 0, width, height);

    const resizedBlob = await new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => blob ? resolve(blob) : reject(cloudinaryError('IMAGE_PROCESSING_FAILED', 'The selected image could not be processed.')),
        file.type,
        0.9
      );
    });
    const resizedFile = new File([resizedBlob], file.name, {
      type: resizedBlob.type || file.type,
      lastModified: file.lastModified,
    });
    validateCloudinaryImage(resizedFile, { allowGif });
    return { file: resizedFile, width, height };
  } finally {
    bitmap?.close();
  }
}

export function uploadCloudinaryImage(file, { onProgress, signal } = {}) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException('Upload canceled.', 'AbortError'));
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);

    const request = new XMLHttpRequest();
    const handleAbort = () => request.abort();
    signal?.addEventListener('abort', handleAbort, { once: true });
    request.open('POST', CLOUDINARY_CONFIG.uploadEndpoint);
    request.timeout = 120_000;

    request.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        onProgress?.(Math.round((event.loaded / event.total) * 100));
      }
    });
    request.addEventListener('load', () => {
      let response;
      try {
        response = JSON.parse(request.responseText);
      } catch {
        reject(cloudinaryError('CLOUDINARY_INVALID_RESPONSE', 'Cloudinary returned an invalid response.'));
        return;
      }

      if (request.status < 200 || request.status >= 300 || !response.secure_url) {
        reject(cloudinaryError('CLOUDINARY_UPLOAD_FAILED', 'Image upload failed. Please try again.'));
        return;
      }
      resolve({
        secureUrl: response.secure_url,
        width: Number(response.width) || 0,
        height: Number(response.height) || 0,
      });
    });
    request.addEventListener('error', () => reject(cloudinaryError('CLOUDINARY_NETWORK_ERROR', 'Network error while uploading the image.')));
    request.addEventListener('timeout', () => reject(cloudinaryError('CLOUDINARY_TIMEOUT', 'The image upload timed out. Please try again.')));
    request.addEventListener('abort', () => reject(new DOMException('Upload canceled.', 'AbortError')));
    request.addEventListener('loadend', () => signal?.removeEventListener('abort', handleAbort), { once: true });
    request.send(formData);
  });
}

export function getCloudinaryDeliveryUrl(url, width = 600) {
  if (typeof url !== 'string' || !url.startsWith(`https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/`)) {
    return url;
  }
  return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);
}
