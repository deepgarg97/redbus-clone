import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function RedBusNavbar() {
  const navigate=useNavigate();
  function signOut(){
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Image src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='ms-2'>Bus Ticket</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={<FaUser />} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={()=>{
                signOut();
              }}>Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RedBusNavbar;