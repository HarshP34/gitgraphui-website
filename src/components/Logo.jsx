export default function Logo({ className = 'w-8 h-8', ...props }) {
  return (
    <img
      src="/logo.svg"
      alt="Git Graph UI"
      className={className}
      {...props}
    />
  )
}
