import React from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const iconSize = size === 'sm' ? 28 : size === 'lg' ? 52 : 38
  const fontSize = size === 'sm' ? '0.95rem' : size === 'lg' ? '1.8rem' : '1.25rem'
  const ibSize = size === 'sm' ? '0.75rem' : size === 'lg' ? '1.4rem' : '1rem'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', userSelect: 'none' }}>
      {/* IB Icon */}
      <div style={{
        width: iconSize,
        height: iconSize,
        borderRadius: '22%',
        background: 'linear-gradient(145deg, #3b82f6 0%, #4f46e5 50%, #7c3aed 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 2px 10px rgba(99,102,241,0.4)',
      }}>
        <span style={{
          color: '#fff',
          fontWeight: 800,
          fontSize: ibSize,
          letterSpacing: '-0.03em',
          fontFamily: "'Segoe UI', system-ui, sans-serif",
          lineHeight: 1,
        }}>IB</span>
      </div>

      {/* Text: AI + Solutions */}
      {showText && (
        <span style={{ display: 'flex', alignItems: 'baseline', gap: 0, lineHeight: 1 }}>
          <span style={{
            color: '#fff',
            fontWeight: 800,
            fontSize,
            fontFamily: "'Segoe UI', system-ui, sans-serif",
            letterSpacing: '-0.02em',
          }}>AI</span>
          <span style={{
            color: '#a855f7',
            fontWeight: 700,
            fontSize,
            fontFamily: "'Segoe UI', system-ui, sans-serif",
            letterSpacing: '-0.02em',
          }}>Solutions</span>
        </span>
      )}
    </div>
  )
}
