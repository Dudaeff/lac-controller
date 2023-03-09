import { Component,Componentinfo } from "./ComponentsListItem.styled";

const ComponentsListItem = ({component:{name, type, unit, value}}) => {
    return (
        <Component>
            <Componentinfo>Name: { name }</Componentinfo>
            <Componentinfo>Type: { type }</Componentinfo>
            <Componentinfo>Value: {value}</Componentinfo>
            <Componentinfo>Unit: { unit }</Componentinfo>
        </Component>
)    
}

export { ComponentsListItem };