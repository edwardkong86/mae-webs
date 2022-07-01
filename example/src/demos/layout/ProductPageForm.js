import React from 'react'
import { ShowCard} from 'mae-webs'
import image1 from "../../../src/assets/Property_1.png"
import image2 from "../../../src/assets/Property_2.png"

const data = [
    {
        content: 'ASB Financing/i',
        subContent: 'Enjoy flexing financing tenure with competitive returns',
        image:image1,
    },
    {
        content: 'Fixed Deposit Account',
        subContent: 'Grow your savings with attractive rates.',
        image:image2,
    }
]

const ProductPage = () => {
    
    return (
    <React.Fragment>
        {data.map((d, index) => (
        <ShowCard 
            key={index}
            content={d.content}
            subContent={d.subContent}
            image={d.image}
        />

        ))}
        
        </React.Fragment>
    )
}

export default ProductPage






// import React, { useState } from "react";
// import { Block } from "../Block";
// import { Card, Toast} from "antd-mobile";
// import "./Card.scss"



// export const ShowCard = (props) => {
//     const { image, content, subContent } = props;
//     const onClick = () => {
//         Toast.show('ASNB')
//       }

//       return (
//         <Block
//         childrenClassName="cardBlock"
//         >
        
//         <Card 
//         title={content}
//         subTitle={subContent}
//         className='CardContainer' 
//         onClick={onClick}
//         style= {{ 
//             backgroundImage: `url(${image})`,
//             position: 'absolute',
//             }}
//         />
     
//         </Block>
//       )
// }