import { Nav, Navbar } from "rsuite";

const PrincipalHeader = () => {
    return (
        <Navbar>
            <Navbar.Brand href="#">MI SITIO</Navbar.Brand>
            <Nav>
            <Nav.Item>Home</Nav.Item>
            <Nav.Item>About</Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default PrincipalHeader;