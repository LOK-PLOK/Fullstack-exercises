const Notification = ({message}) =>{
    if (message === null){
        return null
    }
    
    const notificationType = message.includes('Added') || message.includes('Updated')
    const style = (notificationType)? 'success':'error'

    return(
        <div className = {style}>
            {message}
        </div>
    )
}

export default Notification