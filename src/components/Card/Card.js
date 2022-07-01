import React from "react";
import { Block } from "../Block";
import { Card, Toast} from "antd-mobile";
import "./Card.scss"



export const ShowCard = (props) => {
    const { image, content, subContent } = props;
    const onClick = () => {
        Toast.show('ASNB')
      }

      return (
        <Block
        childrenClassName="cardBlock"
        >
        
        <Card 
        className='CardContainer' 
        onClick={onClick}
        style= {{ 
            backgroundImage: `url(${image})`,
            position: 'absolute',
            }}
        >
            <div>
                <div className="CardHeader">{content}</div>
                <div className="CardContent">{subContent}</div>
            </div>
            
        </Card>

     
     
        </Block>
      )
}