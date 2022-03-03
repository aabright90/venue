import React from 'react'
import { Drawer, List, ListItem } from '@material-ui/core'
import { scroller } from 'react-scroll'

const SideDrawer = ({ open, onClose }) => {
    const links = [
        { 
            where: 'featured',
            value: 'To top'
        },
        { 
            where: 'venuenfo',
            value: 'Venue NFO'
        },
        { 
            where: 'highlights',
            value: 'Highlights'
        },
        { 
            where: 'pricing',
            value: 'Pricing'
        },
        { 
            where: 'location',
            value: 'Location'
        }
    ]

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 500,
            offSet: -150
        })
        onClose(false)
    }

    const renderItem = (item) => {
        return (
        <ListItem button onClick={() => scrollToElement(item.where)} key={item.where}>
           {item.value}
        </ListItem>
        )
    }

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => onClose(false)}
        >
            <List component="nav">
                {
                    links.map((item) => renderItem(item))
                }
            </List>           
        </Drawer>
    )
}

export default SideDrawer