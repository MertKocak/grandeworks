import "./ContactCard.css"

interface ContactCardProps {
    name: string;
    email: string;
    level: string;
}

// sağ panel iletişim kartları
const ContactCard = ({ name, email, level }: ContactCardProps) => (
    <div className="contact-card">
        <div className='inner-container'>
            <div className="contact-avatar" />
            <div className='contact-text'>
                <div className="contact-info">
                    <p className="contact-name">{name}</p>
                    <span className="level-badge">{level}</span>
                </div>
                <p className="contact-email">{email}</p>
            </div>
        </div>
        <button className="add-button">+</button>
    </div>
);

export default ContactCard