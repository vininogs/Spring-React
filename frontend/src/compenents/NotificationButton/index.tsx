import iconNotificar from '../../assets/img/notification-icon.svg'
import './styles.css'

function NotificationButton() {
    return(
      <div className='iconNotificar'>
        <img src={iconNotificar} alt="Notificar"/>
      </div>
    )
  }
 

  export default NotificationButton