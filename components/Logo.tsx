import React from 'react'
import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ size = 'md' }: LogoProps) {
  const iconSize  = size === 'sm' ? 32  : size === 'lg' ? 56  : 40
  const fontSize  = size === 'sm' ? 18  : size === 'lg' ? 32  : 24
  const gap       = size === 'sm' ? 8   : size === 'lg' ? 14  : 10

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap, userSelect: 'none' }}>

      {/* ── IB icon — real logo ── */}
      <Image
        src="/ib-logo.png"
        alt="IB"
        width={iconSize}
        height={iconSize}
        style={{ flexShrink: 0, display: 'block' }}
      />

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
