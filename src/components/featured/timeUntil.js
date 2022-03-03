import React, { useState, useEffect, useCallback } from 'react'
import { Slide } from 'react-awesome-reveal'


const TimeUntil = () => {

    const [time, setTime] = useState({
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    })

    const renderItem = (time, value) => {
        return(
            <div className="countdown_item">
                <div className="countdown_time">
                    {time}
                </div>
                <div className="countdown_tag">
                    {value}
                </div>
            </div>
        )
    }

    const getTimeUntil = useCallback((deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date())
        if (time < 0) {
            console.log('event passed');
        } else {
            
            const seconds = Math.floor((time/1000)%60)
            const minutes = Math.floor((time/1000/60)%60)
            const hours = Math.floor((time/(1000*60*60))%60)
            const days = Math.floor(time/(60*60*24*1000))
            
            setTime({ days, hours, minutes, seconds })
        }

    },[])

    useEffect(() => {
        setInterval(() => getTimeUntil('December, 14, 2022, 01:20:00'), 1000);
    }, [getTimeUntil])


    return (
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in
                </div>
                <div className="countdown_bottom">
                    {renderItem(time.days, 'days')}
                    {renderItem(time.hours, 'HS')}
                    {renderItem(time.minutes, 'Min')}
                    {renderItem(time.seconds, 'Sec')}
                </div>
            </div>
        </Slide>
    )
}


export default TimeUntil