import { sprinkles } from '@styles/sprinkles.css'
import { style } from '@vanilla-extract/css'

export const stickyContainer = style([
  sprinkles({
    position: 'sticky',
  }), {
    // this makes the sticky trigger work because intersection observer is set to 100%. When the div goes sticky, top: -1px is take into account and the div is no longer 100% into view
    top: '-1px'
  }
])

export const isSticky = style({})
