import React from 'react'

const Events = ({eventsArray}) => {

  let events = eventsArray.map((event, i) =>
    <div className='overview' key={i}>
      <h3>{event.name}</h3>
      <div>address: {event.address}</div>
      <div>date: {event.datetime.substr(0,10)}</div>
      {event.positions.map((position, j) =>
        <div className='overview position' key={j}>
          <h4>{position.name}</h4>
          <div>hired temp: {position.hired_temp.first_name} {position.hired_temp.last_name}</div>
          <div>email: {position.hired_temp.email}</div>
        </div>
      )}
    </div>
  )

  return (
    <div>{events}</div>
  )
}

export default Events
