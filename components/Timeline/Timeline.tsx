import * as styles from './styles.css'

import { Box } from '../Box'
import { IUIComponent } from '../../utils/types'

interface IProps extends IUIComponent {
  data: object[]
}

export function Timeline({ data }: IProps) {
  data = JSON.parse(JSON.stringify(data))

  return (
    <Box>
      {data.map((item: any) => {
        return (
          <Box>
            <Box>{item.date}</Box>
            <Box>{item.title}</Box>
            <Box>{item.description}</Box>
          </Box>
        )
      })}
    </Box>
  )
}
