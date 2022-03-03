import React from 'react'
import { Button } from '@material-ui/core'

import TicketIcon from '../../resources/images/icons/ticket.png'

const MyButton = ({
    name, 
    link, 
    size = 'large',
    style= {
        background:`#8e8e8e`,
        color: `#ffff`
    },
    iconTicket
}) => {
    return(
        <Button
        href={link}
        variant="contained"
        size={size}
        style={style}
        >
        { iconTicket ? <img src={TicketIcon} className="iconImage" alt="icon_button"/> : null}
        {name}
        </Button>
    )
}

export default MyButton