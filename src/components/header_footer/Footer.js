import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Footer = () => {


    return (
        <footer className="bck_red">
            <Fade>
                <div className="header_logo">
                    <div className="font_righteous header_logo_venue">
                        The venue
                    </div>
                    <div className="footer_copyright">
                        The venue 2021 all rights reserved 
                    </div>
                </div>
            </Fade>
        </footer>
    )
}

export default Footer