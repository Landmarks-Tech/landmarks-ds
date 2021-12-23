import * as styles from './styles.css'

import { IUIComponent, Range } from '../../utils/types'

import { Box } from '../Box'
import React from 'react'

interface IProps extends IUIComponent {
  children?: any
  orientation?: Range<360>
  tooltip?: string
  [key: string]: any
}

const Sun = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="74"
      height="74"
      viewBox="0 0 74 74"
    >
      <g
        id="Group_223"
        data-name="Group 223"
        transform="translate(-494.5 -732.5)"
      >
        <g id="Group_222" data-name="Group 222" transform="translate(497 735)">
          <circle
            id="Ellipse_11"
            data-name="Ellipse 11"
            cx="15.5"
            cy="15.5"
            r="15.5"
            transform="translate(20 20)"
            fill="#fff5cb"
            stroke="#fff5cb"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="7"
          />
          <line
            id="Line_57"
            data-name="Line 57"
            y2="6"
            transform="translate(35 1)"
            fill="none"
            stroke="#fff5cb"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="7"
          />
          <line
            id="Line_58"
            data-name="Line 58"
            y2="5"
            transform="translate(35 63)"
            fill="none"
            stroke="#fff5cb"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="7"
          />
          <line
            id="Line_59"
            data-name="Line 59"
            x2="4.376"
            y2="4.376"
            transform="translate(10.924 10.924)"
            fill="none"
            stroke="#fff5cb"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="7"
          />
          <line
            id="Line_60"
            data-name="Line 60"
            x2="4.376"
            y2="4.376"
            transform="translate(54.502 54.502)"
            fill="none"
            stroke="#fff5cb"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="7"
          />
          <line
            id="Line_61"
            data-name="Line 61"
            x2="6"
            transform="translate(1 35)"
            fill="none"
            stroke="#fff5cb"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="7"
          />
          <line
            id="Line_62"
            data-name="Line 62"
            x2="5"
            transform="translate(63 35)"
            fill="none"
            stroke="#fff5cb"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="7"
          />
          <line
            id="Line_63"
            data-name="Line 63"
            y1="4.376"
            x2="4.376"
            transform="translate(10.924 54.502)"
            fill="none"
            stroke="#fff5cb"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="7"
          />
          <line
            id="Line_64"
            data-name="Line 64"
            y1="4.376"
            x2="4.376"
            transform="translate(54.502 10.924)"
            fill="none"
            stroke="#fff5cb"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="7"
          />
        </g>
        <text
          id="S"
          transform="translate(525 778)"
          fill="#edc749"
          stroke="rgba(0,0,0,0)"
          stroke-width="1"
          font-size="25"
          font-family="Karmina-Bold, Karmina"
          font-weight="700"
        >
          <tspan x="0" y="0">
            S
          </tspan>
        </text>
      </g>
    </svg>
  )
}

export function Sunshine({
  children,
  orientation = 0,
  tooltip = 'Sun'
}: IProps) {
  return (
    <Box>
      <Sun />
    </Box>
  )
}
