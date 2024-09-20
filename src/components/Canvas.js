import MainContext from "../MainContext"

import { useState } from "react"

import "../styles/components/canvas.css"

import OpenModeText from "./OpenModeText"
import MessageBox from "./MessageBox"
import ShowData from "./ShowData"

export default function Canvas({imgUrl}) {
    const [messagesData,setMessagesData] = useState([
        {
            id:1,
            message:"bu bir örnek mesajdır.",
            type: 2, 
            location:{
                x:350,
                y:300
            }
        }
    ])
    const [isClickMessage,setIsClickMessage] = useState(false)

    const [mode, setMode] = useState(false)
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })
    const [boxVisible, setBoxVisible] = useState(false)
    const [messageBoxPosition,setMessageBoxPosition] = useState({
        x:0,
        y:0
    })
    
    


    const handleKeyDown = (e) => {
        if (e.key === "c") {
            setMode(!mode)
        }
    }

    const handleMauseMove = (e) => {
        setMousePosition({
            x: e.pageX,
            y: e.pageY
        })
    }

    const handleClick = (e) => {
        if (mode) {
            setMessageBoxPosition({
                x:mousePosition.x,
                y:mousePosition.y
            })
            setBoxVisible(true)
        }
    }

    const data ={
        mousePosition,
        messageBoxPosition,
        setIsClickMessage,
        setMode,
        messagesData,
        setMessagesData
    }

    return (
        <MainContext.Provider value={data}>
            <div tabIndex={0} onClick={handleClick} onMouseMove={handleMauseMove} onKeyDown={handleKeyDown} style={{backgroundImage:`url(${imgUrl})`}} className='canvas'>
                {mode && <OpenModeText />}
                {boxVisible && !isClickMessage && <MessageBox />}
                { messagesData.map((data,index) => (
                    <ShowData key={index} data={data}/>
                ))
                }
            </div>
        </MainContext.Provider>
    )
}
