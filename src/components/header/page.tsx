import Link from "next/link";
import styles from "@/components/header/header.module.css"

export function Header() {
    return (
        <header className={styles.header}>
            <h1>Meu site</h1>
            <Link href='/'>Home</Link>
            <Link href='/contatos'>Contatos</Link>
            <Link href='/dashboard'>Dashboard</Link>

        </header>
    )
}