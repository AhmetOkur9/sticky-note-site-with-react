import React, { useContext, useState } from 'react'
import MainContext from '../MainContext'

export default function MessageBox() {
    const { messageBoxPosition, setMode, messagesData, setMessagesData } = useContext(MainContext)

    const [selectedType, setSelectedType] = useState(1)
    const [userMessage, setUserMessage] = useState("")

    const messageType = [
        {
            id: 1,
            name: "warning",
            color: "red",
            text: "uyarı"
        },
        {
            id: 2,
            name: "private-comment",
            color: "blue",
            text: "Gizli Yorum"
        },
        {
            id: 3,
            name: "note",
            color: "orange",
            text: "Not"
        },
        {
            id:4,
            name:"like",
            color:"green",
            text:"Beğeni"
        }
    ]

    const sendMessage = () => {
        const selectedMessageType = messageType.find(type => type.id === parseInt(selectedType))  // ID ile eşleşen türü bul
        const obj = {
            type: selectedMessageType, 
            id: messagesData.length + 1,
            message: userMessage,
            location: {
                x: messageBoxPosition.x,
                y: messageBoxPosition.y
            }
        }
        setMessagesData(data => [...data, obj])
    }

    const handleMouseEnter = () =>{
        setMode(false)

    }
    const handleMouseLeave = () => {
        setMode(true)
    }

    return (
        <div className='message-box' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: "absolute", top: messageBoxPosition.y, left: messageBoxPosition.x }}>
            <div className='message-box-header'>mesaj gonder</div>
            <div className='message-box-body'>
                <select onChange={e => setSelectedType(e.target.value)} value={selectedType}>
                    {messageType.map((type) => (
                        <option key={type.id} value={type.id}>{type.text}</option>
                    ))}
                </select>
                <input onChange={(e) => setUserMessage(e.target.value)} type="text" placeholder='Mesaj Gonder' />
                <button onClick={sendMessage} disabled={!userMessage}>Onayla</button>
            </div>
        </div>
    )
}
