import { useEffect, useRef } from 'react';
import { getFacebookEmbedSource } from '../utils/helpers';

let facebookSdkPromise;

function loadFacebookSdk() {
  if (window.FB?.XFBML) return Promise.resolve(window.FB);
  if (facebookSdkPromise) return facebookSdkPromise;

  facebookSdkPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById('facebook-jssdk');
    const previousReady = window.fbAsyncInit;
    window.fbAsyncInit = () => {
      previousReady?.();
      if (window.FB) resolve(window.FB);
      else reject(new Error('Facebook SDK did not initialize'));
    };
    if (existingScript) return;

    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v25.0';
    script.onerror = () => reject(new Error('Facebook embed could not load'));
    document.head.appendChild(script);
  });

  return facebookSdkPromise;
}

export default function FacebookEmbed({ url }) {
  const embedRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    loadFacebookSdk().then((FB) => {
      if (!cancelled && embedRef.current) FB.XFBML.parse(embedRef.current);
    }).catch(() => {
      // The surrounding post still provides the original Facebook link.
    });
    return () => { cancelled = true; };
  }, [url]);

  return (
    <div className="facebook-embed" ref={embedRef}>
      <div
        className="fb-video"
        data-href={getFacebookEmbedSource(url)}
        data-width="560"
        data-show-text="false"
        data-allowfullscreen="true"
      />
      <a className="facebook-embed-link" href={url} target="_blank" rel="noreferrer">
        ↗ Open on Facebook
      </a>
    </div>
  );
}
