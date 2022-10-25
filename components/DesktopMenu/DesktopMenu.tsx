import { ReactElement, Children, cloneElement } from 'react'
import cn from 'classnames'
import { useTranslation } from 'next-i18next'
import { FaPhoneAlt } from 'react-icons/fa'
import { CUSTOM_EVENTS, logEvent } from '../../utils/gtm'
import { IUIComponent } from '../../utils/types'
import { Box } from "../Box"
import { Container } from '../Container'
import { LanguageSwitcher } from '../LanguageSwitcher'
import { Button } from '../Button'
import * as styles from './styles.css'

const defaultClasses = {
  button: styles.mainButton,
}

const defaultLabels = {
  callNow: 'callNow',
}

interface CommonProps extends IUIComponent {
  logo: ReactElement
  phone: string
  children: ReactElement | ReactElement[]
  sticky?: boolean
  contained?: boolean
  extra?: ReactElement
  classes?: Partial<typeof defaultClasses>
  labels?: Partial<typeof defaultLabels>
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
  phone,
  children,
  className,
  classes,
  labels,
  ...rest
}: Props) {
  // TODO: find out why translation is not working
  const { t } = useTranslation()
  const cls = cn(className, {
    [styles.stickyMenu]: sticky
  })
  const mergedClasses = {
    ...defaultClasses,
    ...classes,
  }
  const mergedLabels = {
    ...defaultLabels,
    ...labels,
  }

  if (logoPlacement === 'left') {
    return (
      <Box
        component={contained ? Container : "section"}
        className={cls}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        {...rest}
      >
        <Box
          display="flex"
          marginRight={{ laptop: menuPlacement === "left" ? "large" : "none" }}
        >
          {logo}
          {extra}
        </Box>
        <Box
          className={styles.hideOnMobile}
          style={{
            ...(menuPlacement === "left" && { marginRight: "auto" }),
            ...(menuPlacement === "right" && { marginLeft: "auto" }),
          }}
        >
          {children}
        </Box>
        <Box
          className={styles.hideOnMobile}
          display="flex"
          marginLeft={{ laptop: menuPlacement === "right" ? "large" : "none" }}
        >
          <LanguageSwitcher />
          <Button
            background="brand"
            borderRadius="full"
            size="medium"
            component='a'
            onClick={() => logEvent(CUSTOM_EVENTS.SHOW_PHONE)}
            href={`tel:${phone}`}
            display="flex"
            className={cn(styles.mainButton, mergedClasses?.button)}
          >
            <Box component={FaPhoneAlt} marginRight="small" />
            {mergedLabels.callNow}
          </Button>
        </Box>
      </Box>
    )
  } else {
    const childCount = Children.count(children)
    const logoOrder = Math.ceil(childCount / 2)
    const buttonOrder = childCount + 1

    return (
      <Box
        component={contained ? Container : "section"}
        className={cls}
        display="flex"
        justifyContent={{ mobile: "flex-start", laptop: "center" }}
        alignItems="center"
        {...rest}
      >
        <Box
          display="flex"
          marginX={{ laptop: "xxlarge" }}
          style={{
            ...(menuPlacement === "far" && { margin: "auto" }),
            order: logoOrder,
          }}
        >
          {logo}
          {extra}
        </Box>
        {Children.map(children, (child, i) =>
          cloneElement(child, {
            className: cn(styles.hideOnMobile, child.props.className),
            style: {
              order: i < logoOrder ? i : logoOrder + 1,
            },
          })
        )}
        <LanguageSwitcher
          className={styles.hideOnMobile}
          style={{ order: childCount }}
        />
        <Button
          background="brand"
          borderRadius="full"
          size="medium"
          display="flex"
          component="a"
          href={`tel:${phone}`}
          style={{ order: buttonOrder }}
          className={cn(styles.mainButton, mergedClasses?.button)}
        >
          <Box component={FaPhoneAlt} marginRight="small" />
          {mergedLabels.callNow}
        </Button>
      </Box>
    )
  }
}