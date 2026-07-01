interface LogoProps {
  size?: number
}

export default function Logo({ size = 64 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-label="RKS Autopart">
      <polygon
        points="32,4 58,18 58,46 32,60 6,46 6,18"
        fill="#DC1E2D"
        stroke="#B81825"
        strokeWidth="1"
      />
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fill="white"
        fontFamily="Arial Black, sans-serif"
        fontSize="20"
        fontWeight="900"
      >
        RK
      </text>
    </svg>
  )
}
