import React from "react";
import { Block } from "../../Block/Block";
import { Card, Toast} from "antd-mobile";
import "./ShowCard.scss"



export const ShowCard = (props) => {
    const { bgImage, content, subContent} = props;
    const onClick = () => {
        Toast.show('ASNB')
      }

      return (
        <Block
        childrenClassName="cardBlock"
        >
        {/* style 1 */}
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