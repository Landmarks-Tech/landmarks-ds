import * as styles from './styles.css'

import { Box } from '../Box'
import { IUIComponent } from '../../utils/types'
import { IoIosCheckmark } from 'react-icons/io'

interface ITimelineProps extends IUIComponent {
  date: string
  title: string
  done: boolean
  [key: string]: any
}

export function TimelineEvent({
  date,
  title,
  done = false,
  variant = 'normal',
  ...rest
}: ITimelineProps) {
  return (
    <Box
      className={styles.timeline({
        variant,
        ...rest
      })}
    >
      {/* Done or Date */}
      <Box
        className={styles.status({
          variant
        })}
      >
        {!!done ? <IoIosCheckmark size={36} /> : <p>{date}</p>}
      </Box>

      {/* Title and CTA */}
      <Box
        className={styles.detail({
          variant
        })}
      >
        <p className={done ? '' : styles.unfinished}>{title}</p>

        {!!done && <Box>CTA HERE</Box>}
      </Box>
    </Box>
  )
}
