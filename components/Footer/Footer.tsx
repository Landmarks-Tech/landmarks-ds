import * as styles from './styles.css'

import { Box } from '../Box'
import { Container } from '../Container'
import { Grid } from '../Grid'
import { IUIComponent } from '../../utils/types'
import React from 'react'

interface IProps extends IUIComponent {}

export function Footer({ className, ...rest }: IProps) {
  return (
    <Box>
      <Container>
        <Box>
          <Box as="h1" fontSize={'5x'}>
            Kronbau
          </Box>
          <Box className={styles.fluidGrid}>
            <Box>detail</Box>
            <Box>contact</Box>
            <Box>projects</Box>
            <Box>links</Box>
          </Box>
          {/* <Box></Box> */}
          <Box as="p">
            Copyright {new Date().getFullYear()} - KRONBAU Euro Development SRL,
            address
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
