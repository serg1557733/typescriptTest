import React, { FC, useState } from "react";


export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'

}


interface ICard {
    width?: number;
    heigth: number;
    variant?: CardVariant;
    children?: React.ReactNode;
    onClickFunc: (num: number) => void;
}


const Card: FC<ICard> = ({width, heigth, variant, onClickFunc}) => {

const [state, setState] = useState(0)


    return (
        <div onClick={() => onClickFunc(state)} >
            <div style={{ 
                height: heigth, 
                width,  
                border: variant === CardVariant.outlined ? '1px solid black': '', 
                backgroundColor: variant === CardVariant.primary ? 'gray': ""
            }}>
                <button> OK </button>
            </div>
        </div>
    )
}
export default Card;