import React from 'react'
import './App.css'
import Menu from './Menu';

function Header(props){

    return (
        <Header className="header">
            <h1>{props.name}</h1>
            <Menu links={props.links}></Menu>
        </Header>
    )
}



export default Header;