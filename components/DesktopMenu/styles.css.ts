import { style } from '@vanilla-extract/css'
import { sprinkles } from 'site/styles/sprinkles.css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints, vars } from 'site/styles/theme.css'

export const hideOnMobile = style({
  display: 'none',

  '@media': {
    [breakpoints.xx_laptop]: {
      display: 'inherit',
    }
  }
})

export const noPadding = style({
  padding: 0,
})

export const stickyMenu = style([
  sprinkles({
    position: 'fixed',
    zIndex: 3,
  }),
  {
    top: 0,
    left: 0,
    right: 0,
  }
])

export const mainButton = style({
  display: 'none',

  '@media': {
    [breakpoints.xx_laptop]: {
      display: 'flex',
    }
  }
})

// only handles text color based on light/dark background
export const lightDarkRecipe = recipe({
  base: [
    style({
      // should this be here?
      textDecoration: 'none',
    })
  ],
  variants: {
    hue: {
      onLight: {},
      onDark: {},
    },
    active: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        hue: 'onLight',
        active: true,
      },
      style: sprinkles({
        color: 'neutral_6'
      })
    },
    {
      variants: {
        hue: 'onLight',
        active: false,
      },
      style: sprinkles({
        color: 'onLight'
      })
    },
    {
      variants: {
        hue: 'onDark',
        active: true,
      },
      style: sprinkles({
        color: 'neutral_0'
      })
    },
    {
      variants: {
        hue: 'onDark',
        active: false,
      },
      style: sprinkles({
        color: 'onDark'
      })
    }
  ]
})

export const variantRecipe = recipe({
  base: [],
  variants: {
    variant: {
      regular: {},
      split: [
        sprinkles({
          textTransform: 'uppercase',
          paddingBottom: 'small',
        }),
        {
          lineHeight: '1.5rem',
        }
      ]
    }
  }
})

// ACTIVE INDICATORS - Used to highlight the active element
export const activeIndicatorPartialUnderline = style({
  position: 'relative',
  selectors: {
    '&:after': {
      content: '" "',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '25px',
      borderBottom: `3px solid ${vars.color.primary}`
    }
  }
})

export const activeIndicatorUnderline = style({
  position: 'relative',
  selectors: {
    '&:after': {
      content: '" "',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      borderBottom: `3px solid ${vars.color.primary}`
    }
  }
})
// ACTIVE INDICATORS - END

export type TLightDarkRecipe = RecipeVariants<typeof lightDarkRecipe>
export type TVariantRecipe = RecipeVariants<typeof variantRecipe>
