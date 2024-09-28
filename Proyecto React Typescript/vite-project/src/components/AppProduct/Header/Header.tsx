
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Carga de productos</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
