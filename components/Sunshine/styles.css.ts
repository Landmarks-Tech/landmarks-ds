import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { style, styleVariants } from '@vanilla-extract/css'

import { sprinkles } from 'site/styles/sprinkles.css'
import { vars } from 'site/styles/theme.css'

export const suffix = styleVariants({
  small: {
    paddingRight: vars.spacing.xsmall
  },
  medium: {
    paddingRight: vars.spacing.small
  },
  large: {
    paddingRight: vars.spacing.medium
  }
})
