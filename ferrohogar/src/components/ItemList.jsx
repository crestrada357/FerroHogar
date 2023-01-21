import React from "react";

function ItemList(props){
    return(
        <section >
            <ul className="item-list">{props.children}</ul>
        </section>
    );
}

export {ItemList}