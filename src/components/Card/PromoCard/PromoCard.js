
import React from "react";
import { Block } from "../../Block/Block";
import { Card, Toast} from "antd-mobile";
import "./PromoCard.scss"



export const PromoCard = (props) => {
    const { image, subContent2} = props;
    const onClick = () => {
        Toast.show('ASNB')
      }

      return (
        <Block
        childrenClassName="cardBlock"
        >
        <Card 
        className='CardContainer2' 
        onClick={onClick}
        style= {{ 
            image: `url(${image})`,
            }}
        >
            <div className="CardMainContainer2">
                <div>
                    <div className="CardImage">{image}</div>
                </div>
                <div>
                    <div className="subContent2">{subContent2}</div>
                </div>
            </div>
            
            
        </Card>

     
     
        </Block>
      )
}