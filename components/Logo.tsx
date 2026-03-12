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

      {/* ── AISolutions — single gradient across entire text ── */}
      <span style={{
        fontWeight: 800,
        fontSize,
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
        letterSpacing: '-0.03em',
        lineHeight: 1,
        background: 'linear-gradient(90deg, #c4d0ff 0%, #9b8fff 35%, #8b5cf6 65%, #a21caf 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>AISolutions</span>
    </div>
  )
}
