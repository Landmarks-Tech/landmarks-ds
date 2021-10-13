import cn from 'classnames'
import { Box } from '../Box'
import * as styles from './styles.css'
import { IUIComponent } from '../../utils/types'

interface IProps extends IUIComponent {
  children: any
  className?: string
}

export function Grid({ children, className, ...rest }: IProps) {
  return (
    <Box className={cn(styles.grid, className)} {...rest}>
      {children}
    </Box>
  )
}