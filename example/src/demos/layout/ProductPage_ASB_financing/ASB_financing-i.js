import React from 'react'
import { ShowCard, Header, Block, Button} from 'mae-webs'
import { Image, AutoCenter } from "antd-mobile";
import image1 from "../../../../src/assets/Asset_1.png"
import image2 from "../../../../src/assets/Asset_2.png"
import image3 from "../../../../src/assets/Asset_3.png"
import HeaderImg from "../../../../src/assets/TabungImage@3x.png"

import "./ASB_financing-i.css"

const data = [
    {
        subContent2: 'Compare earnings when you save on your own vs with ASB financing/-i',
        image:image1,
    },
    {
        subContent2: 'Masih berbaloi ke untuk buat pembiayaan ASB sekarang?',
        image:image2,
    },
    {
        subContent2: 'Nak tahu rahsia untung RM65,000 dalam 30 tahun tanpa gunakan wang simp...',
        image:image3,
    }
]

const ASB_financing = () => {
    
    return (
    <React.Fragment>
        <Header />
        <div className="asbContainer">
            <div className="asbContent">
                <Block blockClassName="asbTitleBlock">
                    <div>
                        <div>
                        <Image src={HeaderImg} className='headerImg' />
                        </div>
                        <div className="asbTitle1">
                        ASB Financing/-i
                        </div>
                        <div className="asbTitle2">
                        Apply for an ASB Financing/-i and earn more in dividends over the years. Start with RM0 initial investment today.
                        </div>
                        <div className="asbTitle1" style={{ marginTop: '12px'}}>
                        Related articles
                        </div>
                    </div>
                </Block>
                {data.map((d, index) => (
                <ShowCard 
                    key={index}
                    subContent2={d.subContent2}
                    image={d.image}
                />

                ))}
            </div>
        </div>
        <AutoCenter className="">
        <Button block shape="rounded">
          Apply Now
        </Button>
      </AutoCenter>
        </React.Fragment>
    )
}

export default ASB_financing




