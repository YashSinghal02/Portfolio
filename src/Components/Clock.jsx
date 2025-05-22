import React, { useState, useEffect } from 'react'

export const Clock = () => {
    const [clock, setClock] = useState('')
    
    useEffect(() => {
        setInterval(() => {
            // Create date object and convert to Indian Standard Time (IST)
            const date = new Date();
            // Format for New Delhi time (UTC+5:30)
            const timestamp = date.toLocaleString('en-US', {timeZone: 'Asia/Kolkata'});
            console.log(timestamp);
            setClock(timestamp)
        }, 1000)
    }, [])
  
    return (
        <div>
            <h5><i className="fa-solid fa-clock"></i> {clock}</h5>
        </div>
    )
}