import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form';

export default function Header() {
    const Navigate = useNavigate();
    const { currency, setCurrency } = CryptoState()


    return (
        <div  >
            <Navbar color="transparent" position="static">
                
                    <Navbar.Brand>
                        <h6 onClick={() => Navigate('/')}
                            className='titlep'>Vira Crypto</h6>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <NavDropdown variant="outlined"
                            style={{
                                width: 100,
                                height: 40,
                                marginLeft: 15
                            }}
                            value={currency}
                            onChange={(e) => { setCurrency(e.target.value) }} 
                        >
                            <NavDropdown.Item value={'USD'}>USD</NavDropdown.Item>
                            <NavDropdown.Item value={'RIAL'}>RIAL</NavDropdown.Item> 
                        </NavDropdown>*/}
                            <Form.Group style={{
                                width: 100,
                                height: 40,
                                marginLeft: 15,                        
                            }}
                          
                            >
                                <Form.Select   value={currency}
                            onChange={(e) => { setCurrency(e.target.value) }}  type="text" placeholder="Placeholder text" >
                                    <option value={'USD'}> Dollar</option>
                                    <option value={'EUR'}> EURO</option>
                                    </Form.Select>
                                
                            </Form.Group>
                    </Nav>
               
            </Navbar>
        </div>
    );
}
