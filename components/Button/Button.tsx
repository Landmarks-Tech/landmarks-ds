import * as styles from './styles.css'

import { Box } from '../Box'
import { IUIComponent } from '../../utils/types'
import React from 'react'
import { ReactElement } from 'react'
import cn from 'classnames'

interface IProps extends IUIComponent {
  children?: any
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  variant?: keyof typeof styles.variants
  color?: keyof typeof styles.colors
  size?: keyof typeof styles.sizes
  disabled?: boolean
  endIcon?: ReactElement
  startIcon?: ReactElement
}

export function Button({
  children,
  href,
  className = '',
  variant = 'text',
  size = 'medium',
  color = 'primary',
  startIcon,
  endIcon,
  disabled = false,
  onClick,
  ...rest
}: IProps) {
  // const endIconStyled = endIcon && cloneElement(endIcon, { className: styles.endIcon })
  const cls = cn(
    styles.button,
    styles.variants[variant],
    styles.sizes[size],
    styles.colors[color],
    className
  )

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return
    // if (href) return
    onClick && onClick(e)
  }

  return (
    <Box
      onClick={clickHandler}
      component={href ? 'a' : 'button'}
      disabled={disabled}
      className={cls}
      {...rest}
    >
      {startIcon}
      {children}
      {/* {endIconStyled} */}
    </Box>
  )
}
