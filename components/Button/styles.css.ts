import { breakpoints, vars } from 'site/styles/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

import { atoms } from 'site/styles/sprinkles.css'
import { text } from 'site/components/Footer/styles.css'

export const button = style([
  atoms({
    alignItems: 'center',
    textTransform: 'uppercase',
    cursor: 'pointer'
  }),
  {
    display: 'inline-flex', // centers icons with text
    fontFamily: vars.font.body,
    textDecoration: 'none'
  }
])

export const variants = styleVariants({
  text: {
    // color: vars.color.primary,
    backgroundColor: vars.color.transparent,
    border: 'none'
  },
  contained: {
    // backgroundColor: vars.color.primary,
    // color: vars.color.onOptional,
    outline: 'none',
    border: 'none'
  },
  outlined: {
    backgroundColor: vars.color.transparent,
    // color: vars.color.primary,
    // border: `1px solid ${vars.color.primary}`,
    borderRadius: vars.unit,
    outline: 'none'
  },
  underlined: {
    backgroundColor: vars.color.transparent,
    // color: vars.color.primary,
    border: 'none',
    // borderBottom: `1px solid ${vars.color.primary}`,
    outline: 'none'
  }
})

export const sizes = styleVariants({
  small: {
    fontSize: '10px',
    padding: '3px 6px',
    '@media': {
      [breakpoints.xx_laptop]: {
        fontSize: '12px',
        padding: '4px 8px'
      }
    }
  },

  medium: {
    fontSize: '14px',
    padding: '5px 10px',
    '@media': {
      [breakpoints.xx_laptop]: {
        fontSize: '14px',
        padding: '8px 15px'
      }
    }
  },

  large: {
    fontSize: '14px',
    padding: '10px 20px',
    '@media': {
      [breakpoints.xx_laptop]: {
        fontSize: '16px',
        padding: '13px 30px'
      }
    }
  }
})

export const colors = styleVariants({
  primary: {
    ...(variants.text && {
      color: vars.color.primary,
      backgroundColor: vars.color.transparent,
      border: 'none'
    }),
    ...(variants.contained && {
      backgroundColor: vars.color.primary,
      color: vars.color.onOptional,
      outline: 'none',
      border: 'none'
    }),
    ...(variants.outlined && {
      backgroundColor: vars.color.transparent,
      color: vars.color.primary,
      border: `1px solid ${vars.color.primary}`,
      borderRadius: vars.unit,
      outline: 'none'
    }),
    ...(variants.underlined && {
      backgroundColor: vars.color.transparent,
      color: vars.color.primary,
      border: 'none',
      borderBottom: `1px solid ${vars.color.primary}`,
      outline: 'none'
    })
  }
})

// export const endIcon = style({
// selectors: {
//   [`${variants.underline} &`]: {
//     marginLeft: '20px',
//   }
// }
// })
