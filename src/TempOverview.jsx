import React from 'react'

const TempOverview = ({eventsArray}) => {

  let events = eventsArray.map((event, i) =>
    <div className='overview' key={i}>
      <h3>{event.name}</h3>
      {event.positions.map((position, j) =>
        <div className='overview position' key={j}>
          <h4>Position type: {position.name}</h4>
        </div>
      )}
      <div>address: {event.address}</div>
      <div>date: {event.datetime.substr(0,10)}</div>
    </div>
  )

  return (
    <div>{events}</div>
  )
}

export default TempOverview
