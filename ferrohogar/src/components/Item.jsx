import React from "react";

function Item(props){
    return(
        <li className="item">{props.description}</li>
    );
}

export {Item}