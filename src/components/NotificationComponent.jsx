function NotificationComponent(props){
    const {content, type} = props
    return(
            <div className={`notification is-danger ${type}`}>
                <button className="delete"></button>
                <p>Lorem ipsum dolor sit amet</p>
                {content}
            </div>
    )
}

export default NotificationComponent
