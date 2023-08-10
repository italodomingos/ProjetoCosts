import React, { useEffect, useState } from "react";
import Container from "../layout/Container";
import ContactCard from "./ContactCard";
import Loading from "../layout/Loading";

export default function Contact() {
  const [contacts, setContacts] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/contacts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container customClass="column">
      <h1>Nossa Equipe</h1>
      {contacts ? (
        contacts.map((contact) => (
          <ContactCard
            name={contact.name}
            job={contact.job}
            email={contact.email}
            phone={contact.phone}
            key={contact.id}
          />
        ))
      ) : (
        <Loading />
      )}
    </Container>
  );
}
