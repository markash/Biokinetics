import * as React from "react"

import NavigationBar from "./navigationbar"

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({title}:HeaderProps) => {
    return (
        <header data-bs-theme="light">
            <NavigationBar title={title} />
        </header>
    )
}

export default Header