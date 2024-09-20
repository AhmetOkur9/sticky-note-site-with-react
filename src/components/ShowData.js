import { useContext, useState } from "react";
import MainContext from "../MainContext";


export default function ShowData({ data }) {
    const [showMessageDetail, setShowMessageDetail] = useState(true);

    const { setIsClickMessage, setMessagesData } = useContext(MainContext)

    const handleMessageContent = () => {
        setShowMessageDetail(prevState => !prevState);

    }

    const deleteMessage = () => {
        setMessagesData(prev => {
            const updatedData = prev.filter(msg => msg.id !== data.id)
            setIsClickMessage(false)
            return updatedData;

        })
    }

    return (
        <div onMouseLeave={() => setIsClickMessage(false)} onMouseEnter={() => setIsClickMessage(true)} className="show-message" style={{ position: "absolute", top: data.location.y, left: data.location.x }}>
            <h2 onClick={handleMessageContent} style={{ backgroundColor: data.type.color }}>
                {data.id}
            </h2>
            {showMessageDetail && (
                <div className="show-message-content">
                    <p>{data.message}</p>
                    <button onClick={deleteMessage} className="show-message-delete-message">Mesajı Sil</button>
                </div>
            )}
        </div>
    )
}
