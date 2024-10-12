import React from "react";

function Menu(props){
    return (<ul className="menu">
        {props.links.map(link=> {
            return (
                <li>
                    {link}
                </li>
            )
        })}
    </ul>)
}

export default Menu;