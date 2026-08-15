export default function AppScreenshot({
  src,
  alt,
  className = '',
  priority = false,
}) {
  return (
    <div
      className={`rounded-lg border border-border bg-black overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto block"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  )
}
