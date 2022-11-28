import Link from "next/link"
import styles from "./button.module.css"


export default function Button({ text, icon, link }:
    { text: string, icon: string, link: string }) {

    return (
        <Link href={link}>
            <button>
                {text}
            </button>
        </Link>
    )
}