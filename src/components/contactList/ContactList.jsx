import styles from '../contactList/contactForm.module.css'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

    const ContactList = ({names,removeHuman}) => {
        const elements = names.map(item => <li key={item.id} className={styles.items}>
            
            <p className={styles.people__items}>{item.name}: {item.number}</p> <Button variant="primary"  onClick={()=>removeHuman(item.id)}>Delete</Button>
        </li>);
    
        return (
            <ul>
                {elements}
            </ul>
        )
    }

export default ContactList;

ContactList.propTypes={
    names: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
    
        })
      ).isRequired,
      removeHuman:PropTypes.func.isRequired,
}