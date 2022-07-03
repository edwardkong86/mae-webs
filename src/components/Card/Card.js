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
        {/* style 1 */}
        {/* <Card 
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
            
            
        </Card> */}


        {/* style 2 */}
        <Card 
        className='CardContainer2' 
        onClick={onClick}
        style= {{ 
            image: `url(${image})`,
            }}
        >
            <div className="CardMainContainer2">
                <div>
                    {/* <div className="CardImage">{image}</div> */}
                </div>
                <div>
                    <div className="subContent2">{subContent2}</div>
                </div>
            </div>
            
            
        </Card>

     
     
        </Block>
      )
}