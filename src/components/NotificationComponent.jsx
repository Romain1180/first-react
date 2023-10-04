import { useState } from "react";
import NotificationButton from "./NotificationButton"
import NotificationContent from "./NotificationContent"


function NotificationComponent(props){
    const [visible, setVisible] = useState(true)

    const handleClick = () => {
        setVisible(false)
    }

    const {content, type} = props
    return(
        visible ? (
            <div className={`notification ${type}`}>
                <NotificationButton handleClick = {handleClick} displayCloseBtn = {true}/>
                <NotificationContent content = {content}/>
            </div>
        ) : null
    )
}

export default NotificationComponent
