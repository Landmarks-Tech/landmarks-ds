import { ReactElement } from 'react'

import { Box } from "../Box"
import { Atoms } from '../../../styles/sprinkles.css'

interface IProps extends Atoms {
  children: ReactElement | ReactElement[] | string
  selected?: boolean
  onClick?: Function
}

export function Tab({ children, selected, onClick, ...rest }: IProps) {
  return (
    <Box
      padding="medium"
      cursor="pointer"
      onClick={handleClick} {...rest}>
      {children}
    </Box>
  )

  function handleClick() {
    onClick && onClick()
  }
}