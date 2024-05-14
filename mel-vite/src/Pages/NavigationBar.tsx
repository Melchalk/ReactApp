import { Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';

export function NavigationBar(){
    return(
        <>
           <Navbar bg="light" data-bs-theme="light">
            <Container>
              <Navbar.Brand href="/home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/features">Features</Nav.Link>
                <Nav.Link href="/pricing">Pricing</Nav.Link>
                <Nav.Link href="/login">Pricing</Nav.Link>
              </Nav>
              <DropdownButton id="dropdown-basic-button" title="Auth">
                <Dropdown.Item href="/register">Register</Dropdown.Item>
                <Dropdown.Item href="/auth">Log in</Dropdown.Item>
                <Dropdown.Item href="/logout">Log out</Dropdown.Item>
              </DropdownButton>
            </Container>
          </Navbar>
        </>
    )
}