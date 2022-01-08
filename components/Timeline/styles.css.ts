import { sprinkles } from 'site/styles/sprinkles.css'
import { style } from '@vanilla-extract/css'
import { vars } from 'site/styles/theme.css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  height: '100%'
})

export const wrapper = style({
  display: 'flex',
  textAlign: 'center',
  marginTop: vars.spacing.medium
})

export const status = style([
  sprinkles({
    background: 'black_alpha_02',
    padding: 'small',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }),
  {
    fontSize: vars.fontSize['1x']
  }
])

export const detail = style([
  sprinkles({
    background: 'surfaceFaded',
    padding: 'large',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  }),
  {
    flexBasis: '30%',
    textAlign: 'center'
  }
])

export const date = style([
  sprinkles({
    color: 'black_alpha_06'
  }),
  {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexBasis: '5%'
    // flexShrink: 1

    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // display: '-webkit-box',
    // WebkitLineClamp: 2,
    // WebkitBoxOrient: 'vertical',
    // lineHeight: '1.6em',
    // maxHeight: '3.2em'
  }
])

export const unfinished = sprinkles({
  color: 'black_alpha_06'
})
