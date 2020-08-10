import * as React from "react"
import {useEffect} from 'react'

function Detail(info : any) {

    const {location, history} = info
    useEffect(() => {
        if(location.state === undefined){
            history.push("/")
        }
    },[location, history])
    return (
        <div>
            {
                (location.state) ?
                (<div>{location.state.info.title}</div>)
                : 
                (null)
            }
        </div>
    )
}

export default Detail