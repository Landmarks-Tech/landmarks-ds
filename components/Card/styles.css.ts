import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { fontFace, style } from '@vanilla-extract/css'

import { sprinkles } from 'site/styles/sprinkles.css'
import { vars } from 'site/styles/theme.css'

export const card = recipe({
  base: [
    sprinkles({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }),
    style({
      boxSizing: 'border-box',
      color: vars.color.white,
      backgroundColor: vars.color.primary,
      display: 'inline-block',
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
      small: {
        boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.1)'
      },
      medium: {
        boxShadow: '0px 0px 2px 2px rgba(0, 0, 0, 0.1)'
      },
      large: {
        boxShadow: '0px 0px 4px 4px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  defaultVariants: {
    elevation: 'small'
  }
})

export type TButtonRecipe = RecipeVariants<typeof card>
