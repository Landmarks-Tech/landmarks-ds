import Link from 'next/link'
import cn from 'classnames'
import React from 'react'

import { IUIComponent } from '../../utils/types'
import * as styles from './styles.css'
import { Box } from '../Box'

interface IProps extends IUIComponent {
  title: any
  href?: string
  activeIndicator?: 'partialUnderline' | 'fullUnderline'
}

const variantHandler = {
  split: SplitText,
  regular: RegularTitle,
}

export const DesktopMenuItem = React.forwardRef(({
  title,
  href,
  className,
  hue = 'onLight',
  activeIndicator = 'partialUnderline',
  // variant are handled using both custom components and variantRecipe
  variant = 'regular',
  active = false,
  ...rest
}: IProps & styles.TLightDarkRecipe & styles.TVariantRecipe, ref: React.ForwardedRef<HTMLAnchorElement>) => {
  // here we are calling the component function without JSX and it expects props to be passed as an object
  const processedTitle = variantHandler[variant]({ children: title })
  const content = (
    <Box
      component="a"
      innerRef={ref}
      title={title}
      className={cn(
        className,
        styles.lightDarkRecipe({
          hue,
          active
        }),
        styles.variantRecipe({
          variant
        }),
        // optional indicators applied on for active element
        // would be cleaner with recipe, but perhaps it generates too many classes with combinations of active & activeIndicator
        active && {
          [styles.activeIndicatorPartialUnderline]: activeIndicator === 'partialUnderline',
          [styles.activeIndicatorUnderline]: activeIndicator === 'fullUnderline',
        }
      )}
      {...rest}>
      {processedTitle}
    </Box>
  )

  if (href) {
    return (
      <Link href={href} passHref>
        {content}
      </Link>
    )
  }

  return content
})

function SplitText({ children }: { children: string }) {
  const [firstWord, ...otherWords] = children.split(' ')
  return (
    <>
      <Box component="p" fontSize="-1x">{firstWord}</Box>
      <Box component="p" fontSize="2x">{otherWords.join(' ')}</Box>
    </>
  )
}

function RegularTitle({ children }: { children: string }) {
  return children
}