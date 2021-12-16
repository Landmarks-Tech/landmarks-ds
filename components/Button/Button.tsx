import * as styles from './styles.css'

import { button, buttonStyles } from './styles.css'

import { Box } from '../Box'
import { ConditionalValue } from '@vanilla-extract/sprinkles'
import { IUIComponent } from '../../utils/types'
import React from 'react'
import { ReactElement } from 'react'
import { camelCase } from 'lodash'
import cn from 'classnames'
import { sprinkles } from '../../../site/styles/sprinkles.css'

interface IProps extends IUIComponent {
  children?: any
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  // variant?: keyof typeof styles.variants
  // color?: keyof typeof styles.colors
  // size?: keyof typeof styles.sizes
  size?: 'small' | 'medium' | 'large'
  variant?: 'contained' | 'outlined' | 'underlined'
  hue?: 'primary' | 'secondary' | 'default' | 'inherit' | undefined
  disabled?: boolean
  endIcon?: ReactElement
  startIcon?: ReactElement
}

export function Button({
  children,
  href,
  className = '',
  variant = 'contained',
  size = 'medium',
  hue = 'primary',
  startIcon,
  endIcon,
  disabled = false,
  onClick,
  ...rest
}: IProps) {
  // const endIconStyled = endIcon && cloneElement(endIcon, { className: styles.endIcon })
  // const cls = cn(
  //   styles.button,
  //   // styles.variants[variant],
  //   styles.sizes[size],
  //   // styles.colors[color],
  //   className
  // )

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
      className={`${button({
        types: `${variant}`,
        size: `${size}`,
        color: `${hue}`
      })} ${className}`}
      {...rest}
    >
      {startIcon}
      {children}
      {/* {endIconStyled} */}
    </Box>
  )
}
