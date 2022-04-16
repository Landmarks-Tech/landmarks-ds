import { IUIComponent } from '../../utils/types'
import { Box } from '../Box'
import { useInView } from 'react-intersection-observer'
import cn from 'classnames'
import * as styles from './styles.css'

interface IProps extends IUIComponent {
  children: any
}

export function StickyTrigger({ children, ...rest }: IProps) {
  const { ref, inView } = useInView({
    threshold: 1
  })

  console.log(inView)

  return (
    <Box className={cn(styles.stickyContainer, !inView && styles.isSticky)} {...rest} innerRef={ref}>
      {children}
    </Box>
  )
}
