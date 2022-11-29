import Link from "next/link"


export default function Button({ text, icon, link }:
    { text: string, icon: string, link: string }) {

    return (
        <Link href={link}>
            <button>
                <i className="fa-solid fa-house"></i>{text}
            </button>
        </Link>
    )
}