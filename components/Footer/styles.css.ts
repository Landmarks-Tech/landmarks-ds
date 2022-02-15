import { sprinkles } from '@styles/sprinkles.css'
import { style } from '@vanilla-extract/css'
import { vars } from 'site/styles/theme.css'

export const logo = style([
  sprinkles({
    position: 'relative',
    marginY: 'medium'
  }),
  {
    width: '300px',
    height: '40px'
  }
])

export const wrapper = style({
  backgroundColor: vars.color.neutral_0,
  padding: vars.spacing.large,
  color: vars.color.neutral_4,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize['-1x'],
})

export const line = style({
  width: vars.spacing.large,
  border: `0.75px solid ${vars.color.neutral_3}`
})

export const text = style({
  textDecoration: 'none',
  color: vars.color.link
})
