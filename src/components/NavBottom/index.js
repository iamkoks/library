import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'

function NavBot(){
    return(
        <div className="NavBot">
             <Navbar>
                <Navbar.Brand>Created by</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <a href="https://t.me/iamkoksss">iamkoksss</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Navbar>
        </div>
    )
}

export default NavBot;