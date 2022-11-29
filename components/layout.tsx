import React from "react";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-background min-h-screen text-gray-100">
            {children}
        </div>
    )
}