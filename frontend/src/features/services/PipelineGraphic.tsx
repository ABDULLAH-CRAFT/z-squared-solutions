import styles from './PipelineGraphic.module.css'

const COLUMNS = [
  { x: 50, count: 7 },
  { x: 160, count: 4 },
  { x: 270, count: 2 },
  { x: 360, count: 1 },
] as const

const HEIGHT = 300
const MID = HEIGHT / 2

/** Evenly spaced y positions for `count` dots, centred vertically. */
function ys(count: number): number[] {
  if (count === 1) return [MID]
  const gap = count === 7 ? 38 : 62
  const start = MID - (gap * (count - 1)) / 2
  return Array.from({ length: count }, (_, i) => start + gap * i)
}

const grid = COLUMNS.map((column) => ({ x: column.x, ys: ys(column.count) }))

/** Decorative outreach-pipeline motif: many prospects narrowing to a qualified conversation. */
export function PipelineGraphic() {
  const lines: Array<{ key: string; x1: number; y1: number; x2: number; y2: number; delay: number }> = []
  grid.forEach((column, c) => {
    const next = grid[c + 1]
    if (!next) return
    column.ys.forEach((y, i) => {
      const target = Math.min(next.ys.length - 1, Math.floor((i * next.ys.length) / column.ys.length))
      lines.push({
        key: `${c}-${i}`,
        x1: column.x,
        y1: y,
        x2: next.x,
        y2: next.ys[target] ?? MID,
        delay: c * 0.5 + i * 0.12,
      })
    })
  })

  return (
    <svg
      viewBox={`0 0 410 ${HEIGHT}`}
      style={{ width: '100%', height: 'auto' }}
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      <g strokeWidth="1.4" fill="none">
        {lines.map((line) => (
          <line
            key={line.key}
            className={styles.flow}
            style={{ animationDelay: `${line.delay}s` }}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
          />
        ))}
      </g>
      <g fill="#ffffff">
        {grid.slice(0, 3).map((column, c) =>
          column.ys.map((y, i) => (
            <circle
              key={`${c}-${y}`}
              className={styles.dot}
              style={{ animationDelay: `${c * 0.4 + i * 0.15}s` }}
              cx={column.x}
              cy={y}
              r={c === 0 ? 5 : c === 1 ? 6.5 : 8}
              fillOpacity={c === 0 ? 0.55 : c === 1 ? 0.75 : 0.95}
            />
          )),
        )}
      </g>
      <circle className={styles.pulse} cx={360} cy={MID} r="24" fill="rgba(238,59,77,0.35)" />
      <circle cx={360} cy={MID} r="12" fill="#ff5468" />
    </svg>
  )
}
