import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './index.css'

function Nav(){
    return(
        <div>
             <Navbar bg="dark" variant="dark" className="navbar">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Library-logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Library
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Nav;