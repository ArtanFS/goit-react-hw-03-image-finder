import ContactListItem from '../ContactListItem';
// import { List } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul class="gallery">
      {contacts.map(el => (
        <ContactListItem
          key={el.id}
          contacts={el}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
