import React from "react";
import FamiliaMembros from "./FamiliaMembros";

export default props =>{
    return(
        <div>
            {props.children.map((child, i) =>{
                return React.cloneElement(child, {...props, key:i})
            })}
        </div>
    )
}