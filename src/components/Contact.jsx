
import '../App.css'
 function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className="contact">
            <div className='contact-info'>
                <img src="https://img.icons8.com/material-sharp/24/user.png" alt="icon" />
            <p >{name}</p>


            <p>{number}</p>
            </div>
            <button  onClick={() => onDelete(id)}>
                Delete
            </button>

    </div>
  );
}

export default Contact;
