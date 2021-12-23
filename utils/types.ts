import { Atoms } from 'site/styles/sprinkles.css'

// reccursively go through all objects until given range
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types
export type Range<T extends number> = number extends T ? number : _Range<T, []>
type _Range<T extends number, R extends unknown[]> = R['length'] extends T
  ? R[number]
  : _Range<T, [R['length'], ...R]>

export interface IUIComponent extends Atoms {
  style?: any
  className?: string
}

export enum EUnitStatus {
  disponibil = 'disponibil',
  rezervat = 'rezervat',
  vandut = 'vandut',
  inactiv = 'inactiv'
}

export enum EPricePolicy {
  hide = 'hide',
  fixed = 'fixed',
  starting = 'starting'
}

export enum EBuildingStatus {
  autorizare = 'autorizare',
  constructie = 'constructie',
  finalizat = 'finalizat',
  finalizatCuCF = 'finalizat cu cf'
}

export interface ISize {
  label: string
  size: string
}

export interface IDescription {
  label: string
  description: string
}

export interface IArticle {
  title: string
  slug: string
  date: string
  author: {
    name: string
  }
  featuredImage: {
    src: string
  }
}
