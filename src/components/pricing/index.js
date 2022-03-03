import React from 'react'
import MyButton from '../utils/MyButton'
import { Zoom } from 'react-awesome-reveal'

const Pricing = () => {

    const priceState = {
        prices: [100, 150, 200],
        position: ['Balcony', 'Medium', 'Star'],
        des: [
            'Dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
            'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.',
            'Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum'
        ],
        linkto: ['http://sales.b', 'http://sales.m', 'http://sales.s'],
        delay:[500, 0, 500]
    }

    const showBoxes = () => (
        priceState.prices.map((box, i) => (
            <Zoom key={i} className="pricing_item" delay={priceState.delay[i]}>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${priceState.prices[i]}</span>
                        <span>{priceState.position[i]}</span>
                    </div>
                    <div className="pricing_description">
                        {priceState.des[i]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            name="Purchase"
                            size="large"
                            style= {{
                                color: `#ffff`,
                                background: `#ffa800`
                            }}
                            link={priceState.linkto[i]}
                        />
                    </div>
                </div>
            </Zoom>
        ))
    )

    return(
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing Container</h2>
                <div className="pricing_wrapper">
                    { showBoxes() }
                </div>         
            </div>
        </div>
    )
}

export default Pricing