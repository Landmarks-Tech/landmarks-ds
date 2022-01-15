import * as styles from './styles.css'

import { Box } from '../Box'
import { Container } from '../Container'
import { IUIComponent } from '../../utils/types'
import Image from 'next/image'
import React from 'react'

interface ExternalLink {
  href: string
  title: string
}

interface IProps extends IUIComponent {
  logo: string
  description: string
  copyright: string
  address: string
  phone: string
  email: string
  projects: ExternalLink[]
  links: ExternalLink[]
  height: string
}

export function Footer({
  className,
  logo,
  description,
  copyright,
  address,
  phone,
  email,
  projects,
  links,
  height,
  ...rest
}: IProps) {
  return (
    <Box>
      <Container>
        <Box>
          {!!logo && (
            <Box position="relative" style={{ height }}>
              <Image src={logo} layout="fill" objectFit="cover" />
            </Box>
          )}
          <Box className={styles.fluidGrid}>
            <Box>
              <hr></hr>
              <p>{description}</p>
            </Box>
            <Box>
              <p>Contact</p>
              <p>{address}</p>
              <hr></hr>
              <p>adasda@gmail.com</p>
              <p>Callnwo</p>
            </Box>
            <Box>
              <p>Projects</p>
            </Box>
            <Box>ANPC</Box>
          </Box>
          <Box as="p">
            {copyright}
            {address}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
