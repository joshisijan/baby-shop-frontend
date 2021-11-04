import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import React from 'react'

const CircularProgressIndicator = () => {
    return (
        <CircularProgressbar
            className="animate-spin"
            value={0.5}
            maxValue={1}
            minValue={0}
            strokeWidth={12}
            styles={buildStyles({
                pathColor: '#3f4e4f',
                trailColor: '#C1DDD8',
            })}
        />
    )
}

export default CircularProgressIndicator
