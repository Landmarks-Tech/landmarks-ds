import { createElement, AllHTMLAttributes, ElementType, Ref } from 'react'
import cn from 'classnames'
import { sprinkles, Atoms } from 'site/styles/sprinkles.css'

export interface BoxProps
  extends Omit<
  AllHTMLAttributes<HTMLElement>,
  'content' | 'height' | 'translate' | 'color' | 'width' | 'cursor' | 'size'
  >,
  Atoms {
  component?: ElementType
  innerRef?: Ref<HTMLElement>
  [key: string]: any
}

export const Box = ({
  component = 'div',
  className,
  aspectRatio,
  boxShadow,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginX,
  marginY,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  display,
  overflow,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  flexGrow,
  flexShrink,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  gap,
  position,
  top,
  bottom,
  left,
  right,
  background,
  color,
  order,
  width,
  zIndex,
  opacity,
  pointerEvents,
  cursor,
  textAlign,
  textTransform,
  transition,
  animationDelay,
  userSelect,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  innerRef,
  ...restProps
}: BoxProps) => {
  // TODO: get reset to work https://github.com/seek-oss/vanilla-extract/discussions/301
  const atomClasses = sprinkles({
    aspectRatio,
    boxShadow,
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    margin,
    marginX,
    marginY,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    display,
    overflow,
    alignItems,
    justifyContent,
    flexDirection,
    flexWrap,
    flexGrow,
    flexShrink,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    gap,
    position,
    top,
    bottom,
    left,
    right,
    background,
    color,
    order,
    width,
    zIndex,
    opacity,
    pointerEvents,
    cursor,
    textAlign,
    fontSize,
    fontWeight,
    fontFamily,
    lineHeight,
    textTransform,
    transition,
    animationDelay,
    userSelect
  })

  return createElement(component, {
    className: cn(atomClasses, className),
    ref: innerRef,
    ...restProps
  })
}
