import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../context/AuthContext';
import {useRouter} from 'next/router';

const NavbarComp = () => {
    const {user, logout} = useAuth()
    const router = useRouter()
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>BACKGROUND BEGONE</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
     
                <Nav.Link onClick={()=> {
                    logout()
                    router.push('/login')
                }}>Logout</Nav.Link>
        
            ):(
                <>
                    <Link href="/signup" passHref>
                        <Nav.Link>Signup</Nav.Link>
                    </Link>
                    <Link href="/login" passHref>
                        <Nav.Link>Login</Nav.Link>
                    </Link>
                </>
            )}
                
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp