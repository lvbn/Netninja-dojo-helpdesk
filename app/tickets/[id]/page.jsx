import React from 'react'

export default function TicketDetails({ params }) {
  const id = params.id

  return (
    <div>{id}</div>
  )
}
