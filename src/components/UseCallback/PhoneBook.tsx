import { memo, useCallback, useState } from "react";

interface Contact {
  id: number,
  name: string,
  phone: string,
}

interface ContactParams {
  contact: Contact,
  onCall: (name: string) => {}
}

const ContactCard = memo(({ contact, onCall }: ContactParams) => {
  console.log(contact.name +' render');

  return (
    <>
      <h3>{contact.name}</h3>
      <p>Phone: {contact.phone}</p>
      <button onClick={() => onCall(contact.name)}>Call</button>
    </>
  )
})

export const PhoneBook = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: 'Tiziano', phone: '324523452345' },
    { id: 2, name: 'Macarena', phone: '17234523452343' },
    { id: 3, name: 'Julia', phone: '102455234550' },
  ])

  const handleOnCall = useCallback((name: string) => {
    console.log("Calling to " + name);
    return {};
  }, [])

  const addContact = () => {
    const newContact: Contact = {
      id: contacts.length + 1,
      name: 'Contact' + contacts.length + 1,
      phone: (Math.floor((Math.random() * 1234234123) * (Math.random() * 1234234123))).toString()
    }

    setContacts([...contacts, newContact])
  }

  return (
    <>
      <h2>Contact list</h2>

      {contacts.map(contact => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onCall={handleOnCall}
        />
      ))}

      <button onClick={addContact}>Add Contact</button>
    </>
  )
}