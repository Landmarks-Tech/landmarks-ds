import { style } from '@vanilla-extract/css'
import { atoms } from 'site/styles/sprinkles.css'
import { overwrites } from 'site/styles/theme.css'

export const container = style([
  atoms({
    position: 'fixed',
    zIndex: 2,
    display: { laptop: 'none' },
  }),
  {
    touchAction: 'none',
    height: `calc(100vh + ${overwrites.MENU_HEIGHT}px)`,
    left: 0,
    right: 0,
  }
])

export const stretch = style({
  alignItems: 'stretch',
})

export const headerContainer = style({
  flex: 1,
  touchAction: 'none',
})

export const header = style({
  flex: 1,
})