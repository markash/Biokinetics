import * as React from "react"
import { Navbar, Container } from "react-bootstrap"
import NavigationBar from "./navigationbar"

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({title}:HeaderProps) => {
    return (
        <>
        <Navbar expand="lg" className="navbar-light w-100 navbar-clone fixed navbar-unstick" >
            <Container className="px-3">
                <Navbar.Brand href="#home">
                Shadow NavBar
                </Navbar.Brand>
            </Container>
        </Navbar>
        <header data-bs-theme="light">
            <NavigationBar title={title} />
        </header>
        </>
    )
}

export default Header