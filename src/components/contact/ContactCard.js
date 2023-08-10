import styles from "../contact/ContactCard.module.css";

export default function ContactCard({ name, job, email, phone }) {
  return (
    <div className={styles.contact_card}>
      <h4>{name}</h4>
      <p>
        <span>Cargo:</span> {job}
      </p>
      <p>
        <span>Email:</span> {email}
      </p>
      <p>
        <span>Telefone:</span> {phone}
      </p>
    </div>
  );
}
