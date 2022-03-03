import React, { useState, useEffect } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import MyButton from '../utils/MyButton'

import ticket_icon from '../../resources/images/icons/ticket.png'

const Discount = () => {

    const end = 30
    const [start, setStart] = useState(0)

    const percentage = () => {
        if(start < end){
            setStart(prevCount => prevCount + 1)
        }
    }

    useEffect(() => {
        if(start > 0 && start < 30){
            setTimeout(() => {
                setStart(prevCount => prevCount + 1)
            }, 30);
        }
    },[start])


    return(
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade
                    onVisibilityChange={ (inView) => {
                        if(inView){
                            percentage()
                        }
                    }}
                >
                    <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase ticket before July 30th!</h3>
                        <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et.
                        </p>

                        <MyButton 
                        name="Buy NOW!"
                        link="http://google.com"
                        size='small'
                        style={{
                            background: '#ffa800',
                            color: '#fff'
                        }}
                        iconTicket={true}
                        />

                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Discount