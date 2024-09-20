import React from 'react'
import { useContext } from 'react'
import MainContext from '../MainContext'

export default function OpenModeText() {
    const {mousePosition} = useContext(MainContext)
    
    return (
        <div style={{position:"fixed" ,top:mousePosition.y , left:mousePosition.x + 20}}>Mesaj birakin</div>
    )
}
