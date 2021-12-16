import { breakpoints, vars } from 'site/styles/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

import { atoms } from 'site/styles/sprinkles.css'
import { recipe } from '@vanilla-extract/recipes'

export const buttonStyles = recipe({
  base: {
    fontWeight: 'bold'
  },
  variants: {
    color: {
      primary: {
        backgroundColor: 'red'
      },
      secondary: {
        backgroundColor: 'blue'
      }
    },
    size: {
      large: {
        padding: 30
      },
      medium: {
        padding: 15
      }
    }
  }
})

export const button = recipe({
  base: {
    boxSizing: 'border-box',
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
    textDecoration: 'none'
  },
  variants: {
    size: {
      // line height needs to be added
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
    },
    color: {
      primary: {
        color: vars.color.primary,
        backgroundColor: vars.color.white,
        border: `1px solid ${vars.color.primary}`,
        ':hover': {
          backgroundColor: vars.color.primary,
          color: vars.color.white
        },
        ':focus': {
          backgroundColor: vars.color.primary,
          color: vars.color.white
        }
      },
      secondary: {
        color: vars.color.white,
        backgroundColor: vars.color.primary,
        border: `1px solid ${vars.color.primary}`,
        ':hover': {
          backgroundColor: vars.color.white,
          color: vars.color.primary
        }
      }
    },
    types: {
      contained: {
        backgroundColor: vars.color.white,
        border: `1px solid ${vars.color.white}`
      }
    }
  }
})

// export const button = style([
//   atoms({
//     alignItems: 'center',
//     textTransform: 'uppercase',
//     cursor: 'pointer'
//   }),
//   {
//     boxSizing: 'border-box',
//     whiteSpace: 'nowrap',
//     userSelect: 'none',
//     outline: 'none',
//     textAlign: 'center',
//     overflow: 'hidden',
//     display: 'inline-flex', // centers icons with text
//     fontFamily: vars.font.body,
//     textDecoration: 'none'
//   }
// ])

// export const variants = styleVariants({
//   text: {
//     // color: vars.color.primary,
//     backgroundColor: vars.color.transparent,
//     border: 'none'
//   },
//   contained: {
//     // backgroundColor: vars.color.primary,
//     // color: vars.color.onOptional,
//     outline: 'none',
//     border: 'none'
//   },
//   outlined: {
//     backgroundColor: vars.color.transparent,
//     // color: vars.color.primary,
//     // border: `1px solid ${vars.color.primary}`,
//     borderRadius: vars.unit,
//     outline: 'none'
//   },
//   underlined: {
//     backgroundColor: vars.color.transparent,
//     // color: vars.color.primary,
//     border: 'none',
//     // borderBottom: `1px solid ${vars.color.primary}`,
//     outline: 'none'
//   }
// })

// export const sizes = styleVariants({
//   small: {
//     fontSize: '10px',
//     padding: '3px 6px',
//     '@media': {
//       [breakpoints.xx_laptop]: {
//         fontSize: '12px',
//         padding: '4px 8px'
//       }
//     }
//   },

//   medium: {
//     fontSize: '14px',
//     padding: '5px 10px',
//     '@media': {
//       [breakpoints.xx_laptop]: {
//         fontSize: '14px',
//         padding: '8px 15px'
//       }
//     }
//   },

//   large: {
//     fontSize: '14px',
//     padding: '10px 20px',
//     '@media': {
//       [breakpoints.xx_laptop]: {
//         fontSize: '16px',
//         padding: '13px 30px'
//       }
//     }
//   }
// })

// export const colors = styleVariants({
//   primary: {
//     ...(variants.text && {
//       color: vars.color.primary,
//       backgroundColor: vars.color.transparent,
//       border: 'none'
//     }),
//     ...(variants.contained && {
//       backgroundColor: vars.color.primary,
//       color: vars.color.onOptional,
//       outline: 'none',
//       border: 'none'
//     }),
//     ...(variants.outlined && {
//       backgroundColor: vars.color.transparent,
//       color: vars.color.primary,
//       border: `1px solid ${vars.color.primary}`,
//       borderRadius: vars.unit,
//       outline: 'none'
//     }),
//     ...(variants.underlined && {
//       backgroundColor: vars.color.transparent,
//       color: vars.color.primary,
//       border: 'none',
//       borderBottom: `1px solid ${vars.color.primary}`,
//       outline: 'none'
//     })
//   }
// })

// // export const endIcon = style({
// // selectors: {
// //   [`${variants.underline} &`]: {
// //     marginLeft: '20px',
// //   }
// // }
// // })
