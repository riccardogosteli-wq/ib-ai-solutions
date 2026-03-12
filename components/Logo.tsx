import React from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ size = 'md' }: LogoProps) {
  const iconSize  = size === 'sm' ? 32  : size === 'lg' ? 56  : 40
  const fontSize  = size === 'sm' ? 18  : size === 'lg' ? 32  : 24
  const ibFont    = size === 'sm' ? 11  : size === 'lg' ? 19  : 14
  const radius    = Math.round(iconSize * 0.22)
  const gap       = size === 'sm' ? 8   : size === 'lg' ? 14  : 10

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap, userSelect: 'none' }}>

      {/* ── IB icon ── */}
      <div style={{
        width: iconSize, height: iconSize,
        borderRadius: radius,
        background: 'linear-gradient(145deg, #4f8ef7 0%, #5b5bd6 55%, #7c3aed 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        boxShadow: `0 4px 14px rgba(99,102,241,0.55)`,
      }}>
        <span style={{
          color: '#fff',
          fontWeight: 900,
          fontSize: ibFont,
          letterSpacing: '-0.04em',
          fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
          lineHeight: 1,
        }}>IB</span>
      </div>

      {/* ── AI + Solutions text ── */}
      <span style={{ display: 'inline-flex', alignItems: 'baseline', lineHeight: 1, gap: 0 }}>
        {/* "AI" — pure white bold */}
        <span style={{
          color: '#ffffff',
          fontWeight: 800,
          fontSize,
          fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
          letterSpacing: '-0.03em',
        }}>AI</span>

        {/* "Solutions" — gradient indigo→purple */}
        <span style={{
          fontWeight: 700,
          fontSize,
          fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
          letterSpacing: '-0.03em',
          background: 'linear-gradient(90deg, #818cf8 0%, #a855f7 55%, #c026d3 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>Solutions</span>
      </span>
    </div>
  )
}
