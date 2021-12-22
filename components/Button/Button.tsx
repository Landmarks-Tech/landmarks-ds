import * as styles from './styles.css'

import { Box } from '../Box'
import { IUIComponent } from '../../utils/types'
import React from 'react'
import { ReactElement } from 'react'
import { TButtonRecipe } from './styles.css'
import cn from 'classnames'

interface IProps extends IUIComponent {
  children?: any
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  endIcon?: ReactElement
  startIcon?: ReactElement
  [key: string]: any
}

export function Button({
  children,
  className,
  variant = 'contained',
  size = 'medium',
  hue = 'primary',
  startIcon,
  endIcon,
  disabled = false,
  onClick,
  ...rest
}: IProps & TButtonRecipe) {
  // const endIconStyled =
  //   endIcon && cloneElement(endIcon, { className: styles.endIcon })
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
      component={rest.href ? 'a' : 'button'}
      disabled={disabled}
      className={cn(
        className,
        styles.button({
          variant,
          size,
          hue,
          disabled,
        })
      )}
      {...rest}
    >
      {startIcon}
      {children}
      {endIcon}
      {/* {endIconStyled} */}
    </Box>
  )
}
