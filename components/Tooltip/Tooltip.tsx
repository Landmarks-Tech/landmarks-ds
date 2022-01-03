import * as TooltipPrimitives from '@radix-ui/react-tooltip'
import * as styles from './styles.css'

import { IUIComponent } from '../../utils/types'
import cn from 'classnames'

interface IProps extends IUIComponent {
  children: any
  content: any
  [key: string]: any
}

export function Tooltip({ children, content, ...rest }: IProps) {
  return (
    <TooltipPrimitives.Root>
      <TooltipPrimitives.Trigger asChild>{children}</TooltipPrimitives.Trigger>
      <TooltipPrimitives.Content className={cn(styles.content, { ...rest })}>
        {content}
        <TooltipPrimitives.Arrow
          offset={10}
          height={6}
          width={10}
          className={styles.arrow}
        />
      </TooltipPrimitives.Content>
    </TooltipPrimitives.Root>
  )
}
