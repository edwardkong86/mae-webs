import React from "react";
import { Block } from "../Block";
import { Card, Toast} from "antd-mobile";
import "./Card.scss"



export const ShowCard = (props) => {
    const { bgImage, content, subContent, image , content2, subContent2,} = props;
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
            backgroundImage: `url(${bgImage})`,
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