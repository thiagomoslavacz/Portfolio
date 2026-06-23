export default function OrbitalSymbol({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="100" cy="100" rx="55" ry="20" stroke="#ef7b1d" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="8s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="100" cy="100" rx="75" ry="28" stroke="#eeffdb" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="12s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="100" cy="100" rx="40" ry="14" stroke="#eeffdb" strokeWidth="0.6" strokeDasharray="2 5" opacity="0.2">
        <animateTransform attributeName="transform" type="rotate" from="45 100 100" to="405 100 100" dur="5s" repeatCount="indefinite" />
      </ellipse>
      <circle cx="155" cy="100" r="3" fill="#ef7b1d" opacity="0.9">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="8s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="100" r="2" fill="#eeffdb" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="12s" repeatCount="indefinite" />
      </circle>
      <circle cx="140" cy="100" r="2" fill="#ef7b1d" opacity="0.6">
        <animateTransform attributeName="transform" type="rotate" from="180 100 100" to="540 100 100" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="100" r="6" stroke="#ef7b1d" strokeWidth="1" opacity="0.8" />
      <circle cx="100" cy="100" r="2" fill="#ef7b1d" opacity="0.9" />
      <line x1="20" y1="30" x2="45" y2="30" stroke="#ef7b1d" strokeWidth="0.8" opacity="0.4" />
      <line x1="20" y1="35" x2="38" y2="35" stroke="#ef7b1d" strokeWidth="0.8" opacity="0.3" />
      <line x1="155" y1="160" x2="180" y2="160" stroke="#ef7b1d" strokeWidth="0.8" opacity="0.4" />
      <line x1="162" y1="165" x2="180" y2="165" stroke="#ef7b1d" strokeWidth="0.8" opacity="0.3" />
      <line x1="28" y1="155" x2="38" y2="165" stroke="#eeffdb" strokeWidth="0.8" opacity="0.3" />
      <line x1="38" y1="155" x2="28" y2="165" stroke="#eeffdb" strokeWidth="0.8" opacity="0.3" />
      <line x1="162" y1="30" x2="172" y2="40" stroke="#eeffdb" strokeWidth="0.8" opacity="0.3" />
      <line x1="172" y1="30" x2="162" y2="40" stroke="#eeffdb" strokeWidth="0.8" opacity="0.3" />
    </svg>
  )
}