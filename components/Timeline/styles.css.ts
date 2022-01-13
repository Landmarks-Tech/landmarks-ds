import { breakpoints, vars } from 'site/styles/theme.css'

import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { sprinkles } from 'site/styles/sprinkles.css'
import { style } from '@vanilla-extract/css'

export const container = sprinkles({
  display: 'flex',
  fontFamily: 'heading',
})

export const cta = recipe({
  base: [
    sprinkles({
      padding: 'small'
    }),
    style({})
  ],
  variants: {
    variant: {
      normal: [
        sprinkles({
          background: 'tertiary',
          color: 'white'
        }),
        style({
          borderRadius: vars.border.radius.small
        })
      ]
    }
  },
})

export const status = recipe({
  base: [
    sprinkles({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }),
  ],
  variants: {
    variant: {
      normal: [
        sprinkles({
          background: 'neutral_2'
        })
      ]
    }
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'normal'
  }
})

export const detail = recipe({
  base: [
    sprinkles({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }),
    style({
      flex: 1,
    })
  ],
  variants: {
    variant: {
      normal: [
        sprinkles({
          padding: 'large',
          color: 'neutral_5',
          background: 'neutral_1'
        }),
        {
          gap: vars.spacing.medium,
        }
      ]
    }
  },
})

export const date = [
  sprinkles({
    padding: 'small'
  }),
  style({
    fontSize: vars.fontSize['-1x'],
    '@media': {
      [breakpoints.x_tablet]: {
        fontSize: vars.fontSize['1x']
      }
    }
  })
]

export const unfinished = sprinkles({
  color: 'neutral_3'
})
