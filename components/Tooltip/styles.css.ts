import { style } from '@vanilla-extract/css'
import { vars } from 'site/styles/theme.css'

export const arrow = style({
  fill: 'white'
})

export const content = style({
  paddingTop: vars.spacing.small,
  paddingBottom: vars.spacing.small,
  paddingLeft: vars.spacing.medium,
  paddingRight: vars.spacing.medium,
  fontSize: vars.fontSize['2x'],
  lineHeight: vars.lineHeight,
  color: vars.color.primary,
  backgroundColor: vars.color.white,
  borderRadius: vars.border.radius.small,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  fontFamily: vars.font.body
})
