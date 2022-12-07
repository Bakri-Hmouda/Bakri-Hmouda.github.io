import React from 'react'

interface Props { children: React.ReactNode, padding?: number }

function Box(props: Props) {
    const { children, padding } = props

    return (
        <div className={`bg-lightGrey/10 p-${padding} hover:bg-lightGrey/30 transition-colors  border border-lightGrey rounded
        basis-28 grow  md:grow text-4xl text-center p-5`}>
            {children}
        </div>
    )
}

export default Box
