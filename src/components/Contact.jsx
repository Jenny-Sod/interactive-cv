function Contact() {
  return (
<div className="contact">
    <h2>Hör av dig 👋</h2>

    <div className="contact-list">
        <a href="mailto:jenny.soderstron@hotmail.com" className="contact-item">
            <span>📧</span>
            <p>jenny.soderstron@hotmail.com</p>
        </a>

        <a href="tel:+46707738553" className="contact-item">
            <span>📱</span>
            <p>+46 70 77 38 553</p>
        </a>

        <a href="www.linkedin.com/in/jenny-soderstrom"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item">
            <span>💼</span>
            <p>LinkedIn</p>
        </a>

        <a
            href="https://github.com/Jenny-Sod"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
        >
            <span>💻</span>
            <p>GitHub</p>
        </a>
    </div>

    <p className="contact-note">
        Jag är alltid öppen för nya möjligheter och roliga samarbeten ✨
    </p>
</div>
  )
}

export default Contact;