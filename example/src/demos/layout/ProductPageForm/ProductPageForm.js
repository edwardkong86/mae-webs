import React from 'react'
import { ShowCard, Header, Block} from 'mae-webs'
import image1 from "../../../../src/assets/Property_1.png"
import image2 from "../../../../src/assets/Property_2.png"

import "./ProductPageForm.css"

const data = [
    {
        content: 'ASB Financing/i',
        subContent: 'Enjoy flexing financing tenure with competitive returns',
        bgImage:image1,
    },
    {
        content: 'Fixed Deposit Account',
        subContent: 'Grow your savings with attractive rates.',
        bgImage:image2,
    }
]

const ProductPage = () => {
    
    return (
    <React.Fragment>
        <Header />
        <div className="asbContainer">
            <div className="asbContent">
                <Block blockClassName="asbTitleBlock">
                    <div>
                        <div className="asbTitle1">
                        Grow your funds in low-risk investments
                        </div>
                        <div className="asbTitle2">
                        Invest your extra savings in these low-risk accounts to earn higher interest rates. Swipe now to explore your options.
                        </div>
                    </div>
                </Block>
                {data.map((d, index) => (
                <ShowCard 
                    key={index}
                    content={d.content}
                    subContent={d.subContent}
                    bgImage={d.bgImage}
                />

                ))}
            </div>
        </div>
        </React.Fragment>
    )
}

export default ProductPage




