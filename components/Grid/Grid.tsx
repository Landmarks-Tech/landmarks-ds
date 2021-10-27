import { Children, cloneElement } from 'react'
import cn from 'classnames'
import { Box } from '../Box'
import * as styles from './styles.css'
import { IUIComponent } from '../../utils/types'

interface IProps extends IUIComponent {
  children: any
  gutter?: keyof typeof styles.gridGutter
  className?: string
}

export function Grid({ children, className, gutter = 'none', ...rest }: IProps) {
  const decoratedChildren = Children.map(children, (child) => (
    cloneElement(child, {
      gutter
    })
  ))

  return (
    <Box overflow="hidden" position="relative">
      <Box className={cn(styles.grid, styles.gridGutter[gutter], className)} {...rest}>
        {decoratedChildren}
      </Box>
    </Box>
  )
}