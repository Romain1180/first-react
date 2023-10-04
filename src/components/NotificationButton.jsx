function NotificationButton({displayCloseBtn = true, handleClick}){
    return displayCloseBtn ? <button onClick={handleClick} className="delete"></button> : null
    //   if (displayCloseBtn) {
    //     return <button onClick={handleClick} className="delete"></button>;
    // } else {
    //     return null;
    // }
}

export default NotificationButton