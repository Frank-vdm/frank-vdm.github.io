import styled from '@emotion/styled'
import { forwardRef } from 'react'
import profile from '~/assets/avatar.jpg'

type WithSize = {
  size: number
}

type Props = {
  variant?: 'circle' | ShapeType
  size: number
}
export const Avatar = forwardRef<HTMLDivElement, Props>(
  ({ variant = 'circle', size }, ref) => {
    if (variant === 'circle') {
      return (
        <Circle ref={ref} size={size}>
          <Image src={profile} alt="avatar" />
        </Circle>
      )
    }
    return (
      <Shape ref={ref} size={size} shape={variant}>
        <Image src={profile} alt="avatar" />
      </Shape>
    )
  },
)

const clipPaths = {
  pentagon: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
  hexagon: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  heptagon:
    'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
  octagon:
    'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
  nonagon:
    'polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)',
}
type ShapeType = keyof typeof clipPaths

const Shape = styled.div<WithSize & { shape: ShapeType }>`
  height: ${({ size }) => size * 1}px;
  width: auto;
  overflow: hidden;
  clip-path: ${clipPaths.pentagon};
`
const Circle = styled.div<WithSize>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  overflow: hidden;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.4) translateY(24px);
`
