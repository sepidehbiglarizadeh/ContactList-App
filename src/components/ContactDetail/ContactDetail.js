import { Link } from "react-router-dom";
import styles from "./ContactDetail.module.css"

const ContactDetail = ({location}) => {
    const {contact}=location.state;
    return ( 
        <div className={styles.contactDetail}>
            <p>Name is : {contact.name}</p>
            <p>Email is : {contact.email}</p>
            <Link to="/">Go to Contact List</Link>
        </div>
     );
}
 
export default ContactDetail;