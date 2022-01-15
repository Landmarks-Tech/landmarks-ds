import { style } from '@vanilla-extract/css'

export const fluidGrid = style({
  display: 'grid',
  padding: '16px',
  gap: '16px',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 100%), 1fr)'
})
