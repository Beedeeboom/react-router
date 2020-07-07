import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import StateContext from './store'

export default function HomeView() {
    // const { store, dispatch } = useContext(StateContext)
    return (
        <div>
           <h1>Home View</h1> 
           <StateContext.Consumer>
               {/* {console.log(entries)} */}
            {/* {store => store.entries.map(<p>{store.entries}</p>)} */}
           </StateContext.Consumer>
           <Link to="/category">
               <button>Create new entry</button>
           </Link>
        </div>
    )
}
