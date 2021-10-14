import { style, keyframes } from "@vanilla-extract/css"

const leftSlide = keyframes({
  '0%': {
    width: 0,
  },
  '100%': {
    width: '100%',
  }
})

export const selectRight = style({
  position: 'relative',
  zIndex: 0,

  selectors: {
    '&:after': {
      content: '" "',
      position: 'absolute',
      zIndex: -1,
      left: 0,
      bottom: 0,
      top: 0,

      animationName: leftSlide,
      animationDuration: '2s',
      animationIterationCount: '1',
      animationDelay: '0',
      animationTimingFunction: 'ease-in-out',
      animationFillMode: 'forwards',
    }
  }
})

export const delay1s = style({
  selectors: {
    '&:after': {
      animationDelay: '1s'
    }
  }
})

export const delay2s = style({
  selectors: {
    '&:after': {
      animationDelay: '2s'
    }
  }
})