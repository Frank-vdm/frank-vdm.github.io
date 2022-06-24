import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import { classNames } from '../../utils'
import styles from './button.module.scss'

type ButtonVariant = 'primary' | 'secondary'
type ButtonType = 'button' | 'submit' | 'reset'
type ButtonSize = 'small' | 'medium' | 'large'

interface Props
  // extends Omit<
  //   React.DetailedHTMLProps<
  //     React.ButtonHTMLAttributes<HTMLButtonElement>,
  //     HTMLButtonElement
  //   >,
  //   'size'
  // > {
  extends Omit<
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    'size' | 'href'
  > {
  variant?: ButtonVariant
  type?: ButtonType
  size?: ButtonSize
  ghost?: boolean
  href?: string
}

export const Button = ({
  ghost,
  className,
  children,
  href,
  ...props
}: Props) => {
  const computedClassName = classNames(
    styles.button,
    styles[props.variant || 'primary'],
    ghost && styles['ghost'],
    className,
  )
  return (
    <a {...props} href={href} className={computedClassName}>
      {children}
    </a>
  )
}

Button.defaultProps = {
  variant: 'primary',
}
