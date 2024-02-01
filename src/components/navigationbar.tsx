import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import { Navbar, Container } from "react-bootstrap"

interface NavigationBarProps {
  title: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({title}: NavigationBarProps) => {
  return (
    <>
    <style type="text/css">
      {`
      .bg-body-tertiary {
          --bs-bg-opacity: 1;
          background-color: #016EC8 !important; 
      }
      `}
    </style>
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home">
          <StaticImage src="../images/logo/logo-white.webp" alt="Monique Strydom Biokineticist / Biokinetikus 🥇🧘🏻‍♀️🏌🏻‍♀️" placeholder="blurred" width={377} height={50} />
        </Navbar.Brand>
      </Container>
    </Navbar>
    </>
  )
}

export default NavigationBar;

