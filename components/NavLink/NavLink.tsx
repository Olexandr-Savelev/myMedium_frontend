import { NavLinkProps } from "./NavLinkProps"
import cn from 'classnames'
import styles from './NaLink.module.scss'
import Link from "next/link"

export default function NavLink({ children, href = '/', style, inMenu = false }: NavLinkProps): JSX.Element {

    const className = "hidden text-[20px] md:block"

    return (
        <Link href={href}><a className={cn([styles.link], className, {
            [styles.withBorder]: style === "withBorder",
            [styles.withBG]: style === "withBG",
            [styles.textColor]: style === "textColor",
            [styles.inMenu]: inMenu === true,
        })}>{children}</a></Link>
    )
}
