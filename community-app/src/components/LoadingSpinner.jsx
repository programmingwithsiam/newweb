export default function LoadingSpinner({ label = 'Loading...', full = false }) {
  return (
    <div className={full ? 'spinner-full' : 'spinner-inline'}>
      <div className="spinner" aria-hidden="true" />
      <span className="spinner-label">{label}</span>
    </div>
  );
}
