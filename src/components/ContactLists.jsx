import '../App.css'
import Contact from './Contact';
const ContactLists = ({ contacts, onDelete }) => {
    return (
      <ul className='list' >
        {contacts.map((contacts) => (
          <li  key={contacts.id}>
            <Contact data={contacts} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    );
  }
  
export default ContactLists;