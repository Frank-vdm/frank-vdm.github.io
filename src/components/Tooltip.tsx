import React, { useEffect, useState } from 'react'

interface TooltipProps {
  children: React.ReactNode
  text: string
}

export const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [childRef, setChildRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (childRef) {
      const handleMouseEnter = () => setShowTooltip(true)
      const handleMouseLeave = () => setShowTooltip(false)

      childRef.addEventListener('mouseenter', handleMouseEnter)
      childRef.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        childRef.removeEventListener('mouseenter', handleMouseEnter)
        childRef.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [childRef])

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {React.cloneElement(children as React.ReactElement<any>, {
        ref: setChildRef,
      })}
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {text}
        </div>
      )}
    </>
  )
}
