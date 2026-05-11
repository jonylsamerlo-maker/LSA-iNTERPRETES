import './WhatsAppButton.css';

function WhatsAppButton() {

  return (

    <a
      href="https://wa.me/1139248986"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >

      <img
        src="/whatsapp.png"
        alt="WhatsApp"
      />

    </a>
  );
}

export default WhatsAppButton;