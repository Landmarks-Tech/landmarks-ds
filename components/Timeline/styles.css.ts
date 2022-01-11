import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from 'site/styles/sprinkles.css'
import { style } from '@vanilla-extract/css'
import { vars } from 'site/styles/theme.css'

export const status = recipe({
  base: [
    sprinkles({
      background: 'black_alpha_02',
      padding: 'small',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }),
    style({
      width: '5rem'
    })
  ],
  variants: {
    variant: {
      normal: [
        sprinkles({
          background: 'black_alpha_02'
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
      background: 'surfaceFaded',
      padding: 'large',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative'
    }),
    style({
      flexBasis: '24rem',
      textAlign: 'center'
    })
  ],
  variants: {
    variant: {
      normal: [
        sprinkles({
          background: 'surfaceFaded'
        })
      ]
    }
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'normal'
  }
})

export const timeline = recipe({
  base: [
    sprinkles({
      // cursor: 'pointer',
      // display: 'flex',
      // textAlign: 'center',
      // alignItems: 'center',
      // width: 'full'
    }),
    style({
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center'
    })
  ],
  variants: {
    size: {
      // small: sprinkles({
      //   fontSize: '-1x',
      //   paddingX: 'small',
      //   paddingY: 'xsmall'
      // }),
      // medium: sprinkles({
      //   fontSize: '1x',
      //   paddingX: 'medium',
      //   paddingY: 'small'
      // }),
      // large: sprinkles({
      //   fontSize: '2x',
      //   paddingX: 'large',
      //   paddingY: 'medium'
      // })
    },
    variant: {
      normal: {}
    }
  },

  compoundVariants: [],

  defaultVariants: {
    // size: 'medium',
    variant: 'normal'
  }
})

export const unfinished = sprinkles({
  color: 'black_alpha_06'
})
