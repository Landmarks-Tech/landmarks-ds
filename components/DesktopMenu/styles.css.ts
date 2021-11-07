import { style } from '@vanilla-extract/css'
import { breakpoints } from 'site/styles/theme.css'

export const hideOnMobile = style({
  display: 'none',

  '@media': {
    [breakpoints.xx_laptop]: {
      display: 'block',
    }
  }
})

export const noPadding = style({
  padding: 0,
})