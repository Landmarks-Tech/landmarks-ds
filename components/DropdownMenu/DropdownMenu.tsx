import * as Menu from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'

import { IUIComponent } from '../../utils/types'
import { Box } from '../Box'

interface IProps extends IUIComponent {
  children: any
  content: any
  [key: string]: any
}

export function DropdownMenu({ children, content, className, ...rest }: IProps) {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>{children}</Menu.Trigger>
      <Box component={Menu.Content} className={cn(className)} {...rest}>
        {content}
        <Menu.Arrow
          height={6}
          width={10}
        />
      </Box>
    </Menu.Root>
  )
}