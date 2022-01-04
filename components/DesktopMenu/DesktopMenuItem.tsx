import Link from 'next/link'
import cn from 'classnames'

import { IUIComponent } from '../../utils/types'
import * as styles from './styles.css'
import { Box } from '../Box'

interface IProps extends IUIComponent {
  title: any
  href: string
  activeIndicator?: 'partialUnderline' | 'fullUnderline'
}

const variantHandler = {
  split: SplitText,
  regular: RegularTitle,
}

export function DesktopMenuItem({
  title,
  href,
  className,
  hue = 'onLight',
  activeIndicator = 'partialUnderline',
  // variant are handled using both custom components and variantRecipe
  variant = 'regular',
  active = false,
  ...rest
}: IProps & styles.TLightDarkRecipe & styles.TVariantRecipe) {
  // here we are calling the component function without JSX and it expects props to be passed as an object
  const processedTitle = variantHandler[variant]({ children: title })

  return (
    <Link href={href} passHref>
      <Box
        component="a"
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
    </Link>
  )
}

function SplitText({ children }: { children: string }) {
  const [firstWord, ...otherWords] = children.split(' ')
  return (
    <>
      <Box component="p" fontSize="-1x">{firstWord}</Box>
      <Box component="p" fontSize="2x">{otherWords.join(' ')}</Box>
    </>
  )
}

function RegularTitle({ children } : { children: string }) {
  return children
}