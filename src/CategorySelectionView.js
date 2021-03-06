import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import StateContext from './store'

export default function CategorySelectionView(props) {
    const { store, dipatch } = useContext(StateContext) //here we are setting up the consumer of state context
    return (
        <div>
            <h1>Category Selection</h1>
            <ul>
                {
                    store.categories.map((item, index) => (
                        <li>
                            <Link to={`/entry/new/${index}`}>{item}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}