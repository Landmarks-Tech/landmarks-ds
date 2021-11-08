import { ReactElement, Children, cloneElement } from 'react'
import cn from 'classnames'
import { IUIComponent } from '../../utils/types'

import { Box } from "../Box"
import { Container } from '../Container'
import { LanguageSwitcher } from '../LanguageSwitcher'
import * as styles from './styles.css'

interface CommonProps extends IUIComponent {
  logo: ReactElement
  phone: string
  children: ReactElement | ReactElement[]
  sticky?: boolean
  contained?: boolean
  extra?: ReactElement
}

type ConditionalProps =
  | { logoPlacement?: 'left', menuPlacement?: 'left' | 'center' | 'right' }
  | { logoPlacement?: 'center', menuPlacement?: 'close' | 'far' }

type Props = CommonProps & ConditionalProps

export function DesktopMenu({
  logo,
  extra,
  logoPlacement = 'left',
  menuPlacement,
  sticky = false,
  contained = true,
  children,
  className,
  ...rest
}: Props) {
  const cls = cn(className, {
    [styles.stickyMenu]: sticky
  })

  if (logoPlacement === 'left') {
    return (
      <Box className={cls} component="section" {...rest}>
        <Box
          component={contained ? Container : 'div'}
          className={styles.noPadding}
          display="flex"
          justifyContent="space-between"
          alignItems="center">
          <Box
            display="flex"
            marginRight={{ laptop: menuPlacement === 'left' ? 'large' : 'none' }}>
            {logo}
            {extra}
          </Box>
          <Box
            className={styles.hideOnMobile}
            style={{
              ...(menuPlacement === 'left') && { marginRight: 'auto' },
              ...(menuPlacement === 'right') && { marginLeft: 'auto' },
            }}>
            {children}
          </Box>
          <Box
            className={styles.hideOnMobile}
            display="flex"
            marginLeft={{ laptop: menuPlacement === 'right' ? 'large' : 'none' }}>
            <LanguageSwitcher />
            <button>Suna</button>
          </Box>
        </Box>
      </Box>
    )
  } else {
    const childCount = Children.count(children)
    const logoOrder = Math.ceil(childCount / 2)
    const buttonOrder = childCount + 1

    return (
      <Box className={cls} component="section" {...rest}>
        <Box
          component={contained ? Container : 'div'}
          className={styles.noPadding}
          display="flex"
          justifyContent="center"
          alignItems="center">
          <Box
            display="flex"
            marginX={{ laptop: 'xxlarge' }}
            style={{
              ...(menuPlacement === 'far') && { margin: 'auto' },
              order: logoOrder,
            }}>
            {logo}
            {extra}
          </Box>
          {Children.map(children, (child, i) => cloneElement(child, {
            className: styles.hideOnMobile,
            style: {
              order: i < logoOrder ? i : logoOrder + 1
            }
          }))}
          <LanguageSwitcher
            className={styles.hideOnMobile}
            style={{ order: childCount }} />
          <button
            style={{ order: buttonOrder }}
            className={styles.hideOnMobile}>
            Suna
          </button>
        </Box>
      </Box>
    )
  }
}