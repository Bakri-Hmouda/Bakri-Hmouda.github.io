import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"

export default function Header(): React.ReactElement {
    const [open, setOpen] = useState(false)
    const currentPath = useRouter().pathname

    return (

        <header className="max-w-full border-b-2 mt-20 sticky top-0 pt-3 bg-background shadow-md border-yellow-400">
            <div className="container relative flex content-around items-center max-sm:px-5">

                {/* site header */}
                <div className="flex-1">
                    <h1 className="text-3xl">Bakri Hmouda</h1>
                    <p className="text-xs">
                        full-stack web developer
                    </p>
                </div>

                {/* show menu button on mobile device */}
                <div className="sm:hidden  hover:text-yellow-400 cursor-pointer p-2" onClick={(): void => setOpen(!open)}>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                {/* nav menus - transom to mobile menu on sm break point */}
                <div className={`flex max-sm:absolute gap-3 ${!open && 'max-sm:hidden'}
                        max-sm:bg-lightGrey max-sm:flex-col max-sm:top-[104%] max-sm:w-full max-sm:right-0 
                        max-sm:p-5 max-sm:shadow-md`}>
                    <Link href="/" className={`hover:text-yellow-400 transition-colors ${currentPath === '/' && 'text-yellow-400'}`}>HOME</Link>
                    <Link href="/design" className={`hover:text-yellow-400 transition-colors ${currentPath === '/design' && 'text-yellow-400'}`}>DESIGN</Link>
                    <Link href="/contact" className={`hover:text-yellow-400 transition-colors ${currentPath === '/contact' && 'text-yellow-400'}`}>CONTACT</Link>
                </div>
            </div>
        </header>
    )
}