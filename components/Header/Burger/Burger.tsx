import styles from './Burger.module.scss'
import cn from 'classnames'

interface BurgerProps {
  menu: boolean;
  setMenu: () => void
}

export default function Burger({ menu, setMenu }: BurgerProps): JSX.Element {
  return (
    <div className={cn(styles.burger, {
      [styles.active]: menu
    })}
      onClick={() => setMenu()}>
      <span className={styles.line}></span>
    </div>
  )
}
