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
    
/*
class Header extends React.Component{
    constructor(props){
        super(props);
    }
}
render() {
    return(
        <header className='header'>
            <h1>{this.props.name}</h1>
            <Menu links={this.props.links}></Menu>
        </header>
    );
}
*/

export default Header;
