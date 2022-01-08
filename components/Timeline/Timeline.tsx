import * as styles from './styles.css'

import { Box } from '../Box'
import { IUIComponent } from '../../utils/types'
import { IoIosCheckmark } from 'react-icons/io'

interface ITimeline {
  date: string
  title: string
  done: boolean
  CTA?: JSX.Element
}

interface IProps extends IUIComponent {
  data: ITimeline[]
}

export function Timeline({ data }: IProps) {
  data = JSON.parse(JSON.stringify(data))

  return (
    <Box className={styles.container}>
      {data.map((item: any) => {
        return (
          <Box className={styles.wrapper}>
            <Box className={styles.status}>
              {!!item.done ? (
                <IoIosCheckmark size={36} />
              ) : (
                <p className={styles.date}>{item.date}</p>
              )}
            </Box>
            <Box className={styles.detail}>
              {!!item.done ? (
                <p>{item.title}</p>
              ) : (
                <p className={styles.unfinished}>{item.title}</p>
              )}
              {/* {!!item.done && <Box>{item.CTA}</Box>} */}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}
