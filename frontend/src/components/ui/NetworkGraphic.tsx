import styles from './NetworkGraphic.module.css'

const CX = 260
const CY = 230

/** Position on a circle around the centre; angle in degrees, y axis pointing down. */
function point(radius: number, angle: number) {
  const rad = (angle * Math.PI) / 180
  return {
    x: Number((CX + radius * Math.cos(rad)).toFixed(1)),
    y: Number((CY + radius * Math.sin(rad)).toFixed(1)),
  }
}

const rings = [60, 115, 170, 225] as const

const nodes = [
  { ...point(115, 200), size: 6, opacity: 0.9 },
  { ...point(115, 320), size: 6, opacity: 0.9 },
  { ...point(60, 80), size: 5, opacity: 0.8 },
  { ...point(170, 245), size: 5, opacity: 0.7 },
  { ...point(170, 15), size: 6, opacity: 0.85 },
  { ...point(170, 140), size: 5, opacity: 0.7 },
  { ...point(225, 300), size: 4, opacity: 0.55 },
  { ...point(225, 70), size: 4, opacity: 0.55 },
] as const

/** Pairs of node indices; -1 means the centre node. */
const links: ReadonlyArray<readonly [number, number]> = [
  [-1, 0],
  [-1, 1],
  [-1, 2],
  [0, 3],
  [1, 4],
  [2, 5],
  [4, 6],
  [5, 7],
]

function coords(index: number): { x: number; y: number } {
  return nodes[index] ?? { x: CX, y: CY }
}

interface NetworkGraphicProps {
  className?: string
}

/** Decorative business-network motif. Static, no labels and no claims. */
export function NetworkGraphic({ className }: NetworkGraphicProps) {
  const classes = [styles.graphic, className].filter(Boolean).join(' ')
  return (
    <svg
      className={classes}
      viewBox="0 0 520 460"
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      <g className={styles.spin}>
        <g fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.2">
          {rings.map((radius) => (
            <circle key={radius} cx={CX} cy={CY} r={radius} />
          ))}
        </g>
        <g stroke="rgba(255,255,255,0.3)" strokeWidth="1.2">
          {links.map(([from, to]) => {
            const a = coords(from)
            const b = coords(to)
            return <line key={`${from}-${to}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
          })}
        </g>
        <g>
          {nodes.map((node) => (
            <circle
              key={`${node.x}-${node.y}`}
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="#ffffff"
              fillOpacity={node.opacity}
            />
          ))}
        </g>
      </g>
      <circle className={styles.pulse} cx={CX} cy={CY} r="26" fill="rgba(214,40,57,0.22)" />
      <circle cx={CX} cy={CY} r="12" fill="#d62839" />
    </svg>
  )
}
