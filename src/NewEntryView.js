import React from 'react'

export default function NewEntryView() {
    const { cat_id } = props.match.params
    return (
        <div>
            <h1>New Entry</h1>
            <h5>Category: { cat_id }</h5>
        </div>
    )
}