import { style } from '@vanilla-extract/css'
import { vars } from 'site/styles/theme.css'

export const wrapper = style({
  backgroundColor: vars.color.neutral_2,
  padding: vars.spacing.large,
  color: vars.color.neutral_4,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize['-1x'],
  lineHeight: vars.lineHeight
})

export const links = style({
  display: 'flex',
  flexDirection: 'column'
})

export const fluidGrid = style({
  display: 'grid',
  // padding: '16px',
  gap: '16px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
  // gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 100%), 1fr)'
})

export const heading = style({
  fontFamily: vars.font.heading,
  fontSize: vars.fontSize['1x'],
  fontWeight: 'bold'
})

export const line = style({
  width: vars.spacing.large,
  border: `0.75px solid ${vars.color.neutral_3}`
})
