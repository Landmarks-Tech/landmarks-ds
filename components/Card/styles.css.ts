import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { fontFace, style } from '@vanilla-extract/css'

import { sprinkles } from 'site/styles/sprinkles.css'
import { vars } from 'site/styles/theme.css'

export const card = recipe({
  base: [
    sprinkles({
      // display: 'flex',
      // flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }),
    style({
      boxSizing: 'border-box',
      color: vars.color.white,
      backgroundColor: vars.color.primary,
      whiteSpace: 'nowrap',
      userSelect: 'none',
      outline: 'none',
      transition: 'all 0.2s ease-in-out',
      fontFamily: vars.font.body,
      textDecoration: 'none'
    })
  ],
  variants: {
    elevation: {
      none: {
        boxShadow: 'none'
      },
      // gradients generated from:
      // https://shadows.brumm.af
      small: {
        boxShadow:
          '2.6px 2.6px 2.7px rgba(0, 0, 0, 0.008),9.5px 9.5px 6.9px rgba(0, 0, 0, 0.011),23px 23px 14.2px rgba(0, 0, 0, 0.013),47.7px 47.7px 29.2px rgba(0, 0, 0, 0.017),100px 100px 80px rgba(0, 0, 0, 0.03)'
      },
      medium: {
        boxShadow:
          '2.6px 2.6px 2.7px rgba(0, 0, 0, 0.016),9.5px 9.5px 6.9px rgba(0, 0, 0, 0.022),23px 23px 14.2px rgba(0, 0, 0, 0.027),47.7px 47.7px 29.2px rgba(0, 0, 0, 0.035),100px 100px 80px rgba(0, 0, 0, 0.06)'
      },
      large: {
        boxShadow:
          '2.5px 2.6px 2.7px rgba(0, 0, 0, 0.027),9.2px 9.5px 6.9px rgba(0, 0, 0, 0.036),22.1px 23px 14.2px rgba(0, 0, 0, 0.044),45.8px 47.7px 29.2px rgba(0, 0, 0, 0.058),96px 100px 80px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  defaultVariants: {
    elevation: 'small'
  }
})

export type TButtonRecipe = RecipeVariants<typeof card>
