import * as styles from './styles.css'

import { Box } from '../Box'
import { Button } from '../Button'
import { IUIComponent } from '../../utils/types'
import { IoIosCheckmark } from 'react-icons/io'
import cn from 'classnames'

interface ITimelineProps extends IUIComponent {
  children?: any
  date: string
  title: string
  done: boolean
  [key: string]: any
}

export function TimelineEvent({
  children,
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
        {!!done ? (
          <IoIosCheckmark size={36} />
        ) : (
          <p className={cn(styles.unfinished, styles.date)}>{date}</p>
        )}
      </Box>

      {/* Title and CTA */}
      <Box
        className={styles.detail({
          variant
        })}
      >
        <p className={done ? '' : styles.unfinished}>{title}</p>

        {!!children && <Box>{children}</Box>}
      </Box>
    </Box>
  )
}
