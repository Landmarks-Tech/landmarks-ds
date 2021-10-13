import Link from 'next/link'
import * as styles from './styles.css'

interface IProps {
  title: string
  href: string
  toggleMenu?: () => void
}

export function MenuItem({ title, href, toggleMenu }: IProps) {
  return (
    <Link href={href}>
      <a title={title} className={styles.item} onClick={toggleMenu}>
        {title}
      </a>
    </Link>
  )
}