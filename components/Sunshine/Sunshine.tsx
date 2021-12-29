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

/*
    This function will return the position of the Sun, based on the degrees given
    Check the drawing above for reference.

    Full range:
    (0-20) => 0
    (20-40) => 1
    (40-50) => 2 (diagonal)
    (50-70) => 3
    (70-90) => 4
    (90-110) => 5
    (110-130) => 6
    (130-140) => 7 (diagonal)
    (140-160) => 8
    (160-180) => 9
    (180-200) => 10
    (200-220) => 11
    (220-230) => 12 (diagonal)
    (230-250) => 13
    (250-270) => 14
    (270-290) => 15
    (290-310) => 16
    (310-320) => 17 (diagonal)
    (320-340) => 18
    (340-359) => 19

*/
const findPos = (
  orientation: Range<360>
): keyof typeof quadrantToCssPosition => {
  return Math.floor((20 / 360) * orientation) as any
}

// range is somehow only from 0 - 80?
// so I divided it into multiples of 16 because:
// (80 / 5) = 16
// 5 is the number of spaces between Sun's
// in a single line

// needs some check in different aspect ratios
// for now 1:1 works fine
const quadrantToCssPosition = {
  0: {
    top: '80%',
    left: '32%'
  },
  1: {
    top: '80%',
    left: '16%'
  },
  2: {
    top: '80%',
    left: '0%'
  },
  3: {
    top: '64%',
    left: '0%'
  },
  4: {
    top: '48%',
    left: '0%'
  },
  5: {
    top: '32%',
    left: '0%'
  },
  6: {
    top: '16%',
    left: '0%'
  },
  7: {
    top: '0%',
    left: '0%'
  },
  8: {
    top: '0%',
    left: '16%'
  },
  9: {
    top: '0%',
    left: '32%'
  },
  10: {
    top: '0%',
    left: '48%'
  },
  11: {
    top: '0%',
    left: '64%'
  },
  12: {
    top: '0%',
    left: '80%'
  },
  13: {
    left: '80%',
    top: '16%'
  },
  14: {
    left: '80%',
    top: '32%'
  },
  15: {
    left: '80%',
    top: '48%'
  },
  16: {
    left: '80%',
    top: '64%'
  },
  17: {
    left: '80%',
    top: '80%'
  },
  18: {
    top: '80%',
    left: '64%'
  },
  19: {
    top: '80%',
    left: '48%'
  }
}

export function Sunshine({
  children,
  orientation = 0,
  tooltip = 'Sun'
}: IProps) {
  return (
    <Box style={{ width: '100%', height: '100%' }}>
      {!!children && (
        <Box style={{ position: 'absolute', zIndex: '100' }}>{children}</Box>
      )}
      <Box
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          background: `linear-gradient(${orientation}deg, rgba(237,206,126, 0.5) 0%, rgba(237,206,126, 0) 30%)`
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="74"
          viewBox="0 0 74 74"
          style={{
            position: 'relative',
            ...quadrantToCssPosition[findPos(orientation)]
          }}
        >
          <g
            id="Group_223"
            data-name="Group 223"
            transform="translate(-494.5 -732.5)"
          >
            <g
              id="Group_222"
              data-name="Group 222"
              transform="translate(497 735)"
            >
              <circle
                id="Ellipse_11"
                data-name="Ellipse 11"
                cx="15.5"
                cy="15.5"
                r="15.5"
                transform="translate(20 20)"
                fill="#fff5cb"
                stroke="#fff5cb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="7"
              />
              <line
                id="Line_57"
                data-name="Line 57"
                y2="6"
                transform="translate(35 1)"
                fill="none"
                stroke="#fff5cb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="7"
              />
              <line
                id="Line_58"
                data-name="Line 58"
                y2="5"
                transform="translate(35 63)"
                fill="none"
                stroke="#fff5cb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="7"
              />
              <line
                id="Line_59"
                data-name="Line 59"
                x2="4.376"
                y2="4.376"
                transform="translate(10.924 10.924)"
                fill="none"
                stroke="#fff5cb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="7"
              />
              <line
                id="Line_60"
                data-name="Line 60"
                x2="4.376"
                y2="4.376"
                transform="translate(54.502 54.502)"
                fill="none"
                stroke="#fff5cb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="7"
              />
              <line
                id="Line_61"
                data-name="Line 61"
                x2="6"
                transform="translate(1 35)"
                fill="none"
                stroke="#fff5cb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="7"
              />
              <line
                id="Line_62"
                data-name="Line 62"
                x2="5"
                transform="translate(63 35)"
                fill="none"
                stroke="#fff5cb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="7"
              />
              <line
                id="Line_63"
                data-name="Line 63"
                y1="4.376"
                x2="4.376"
                transform="translate(10.924 54.502)"
                fill="none"
                stroke="#fff5cb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="7"
              />
              <line
                id="Line_64"
                data-name="Line 64"
                y1="4.376"
                x2="4.376"
                transform="translate(54.502 10.924)"
                fill="none"
                stroke="#fff5cb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="7"
              />
            </g>
            <text
              id="S"
              transform="translate(525 778)"
              fill="#edc749"
              stroke="rgba(0,0,0,0)"
              strokeWidth="1"
              fontSize="25"
              fontFamily="Karmina-Bold, Karmina"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                S
              </tspan>
            </text>
          </g>
        </svg>
      </Box>
    </Box>
  )
}
