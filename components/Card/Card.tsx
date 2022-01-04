import * as styles from './styles.css'

import { Box } from '../Box'
import { IUIComponent } from '../../utils/types'
import { TButtonRecipe } from './styles.css'

interface IProps extends IUIComponent {
  children: any
  elevation?: string
  [key: string]: any
}

export function Card({ children, elevation, ...rest }: IProps & TButtonRecipe) {
  return (
    <Box className={styles.card({ elevation })} {...rest}>
      {children}
    </Box>
  )
}
