import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { sprinkles } from 'site/styles/sprinkles.css'
import { style } from '@vanilla-extract/css'
import { vars } from 'site/styles/theme.css'

export const button = recipe({
  base: {
    whiteSpace: 'nowrap',
    userSelect: 'none',
    outline: 'none',
    textAlign: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    transition: 'all 0.2s ease-in-out',
    overflow: 'hidden',
    display: 'inline-flex',
    fontFamily: vars.font.body,
    textDecoration: 'none',
    cursor: 'pointer'
    // border: 'none', // breaks outlined and underlined variant
  },
  variants: {
    size: {
      // line height needs to be added
      small: sprinkles({
        fontSize: '-1x',
        paddingX: 'small',
        paddingY: 'xsmall'
      }),
      medium: sprinkles({
        fontSize: '1x',
        paddingX: 'medium',
        paddingY: 'small'
      }),
      large: sprinkles({
        fontSize: '2x',
        paddingX: 'large',
        paddingY: 'medium'
      })
    },
    hue: {
      primary: {},
      secondary: {}
    },
    variant: {
      text: {
        border: 'none' // not sure about this reset
      },
      contained: {
        border: 'none'
      },
      outlined: {},
      underlined: {
        borderLeft: 'none',
        borderTop: 'none',
        borderRight: 'none'
      }
    },
    disabledButton: {
      yes: {
        // opacity: 0.5,
        background: 'neutral_5',
        cursor: 'not-allowed'
      }
    }
    // disabled: {
    //   no: {},
    //   yes: {
    //     opacity: 0.5,
    //     cursor: 'not-allowed'
    //   }
    // }
  },

  compoundVariants: [
    // text
    {
      variants: {
        variant: 'text',
        hue: 'primary'
      },
      style: sprinkles({
        color: 'primary',
        background: 'transparent'
      })
    },
    {
      variants: {
        variant: 'text',
        hue: 'secondary'
      },
      style: sprinkles({
        color: 'secondary',
        background: 'transparent'
      })
    },
    // contained
    {
      variants: {
        variant: 'contained',
        hue: 'primary'
      },
      style: sprinkles({
        color: 'white',
        background: 'primary'
      })
    },
    {
      variants: {
        variant: 'contained',
        hue: 'secondary'
      },
      style: sprinkles({
        color: 'white',
        background: 'secondary'
      })
    },
    // outlined
    {
      variants: {
        variant: 'outlined',
        hue: 'primary'
      },
      style: [
        sprinkles({
          color: 'primary',
          background: 'transparent'
        }),
        style({
          border: `1px solid ${vars.color.primary}`
        })
      ]
    },
    {
      variants: {
        variant: 'outlined',
        hue: 'secondary'
      },
      style: [
        sprinkles({
          color: 'secondary',
          background: 'transparent'
        }),
        style({
          border: `1px solid ${vars.color.secondary}`
        })
      ]
    },
    // underlined
    {
      variants: {
        variant: 'underlined',
        hue: 'primary'
      },
      style: [
        sprinkles({
          color: 'primary',
          background: 'transparent'
        }),
        style({
          borderBottom: `2px solid ${vars.color.primary}`
        })
      ]
    },
    {
      variants: {
        variant: 'underlined',
        hue: 'secondary'
      },
      style: [
        sprinkles({
          color: 'secondary',
          background: 'transparent'
        }),
        style({
          borderBottom: `2px solid ${vars.color.secondary}`
        })
      ]
    }
  ],

  defaultVariants: {
    size: 'medium',
    variant: 'contained',
    hue: 'primary'
  }
})

export type TButtonRecipe = RecipeVariants<typeof button>
