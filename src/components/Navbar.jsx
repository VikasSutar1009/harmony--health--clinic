import {  Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenueOpen] = useState(false);

    const goToBooking = () => {
        setMenueOpen(false);
        document.getElementById("booking")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const closeMenu = () => setMenueOpen(false);

    return (
        <header className="navbar">
            <a href="#home" className="brand" onClick={closeMenu}>
                <span className="brand-icon">
                    <img
                        src="https://images.unsplash.com/photo-1657483203411-d0d74a8d2d7a?q=80&w=1032&auto=format&fit=crop"
                        alt="Harmony Health Clinic Logo"
                        className="brand-logo-image"
                    />
                </span>

                <span>
                    <strong>HARMONY</strong>
                    <small>HEALTH CLINIC</small>
                </span>
            </a>

            <button
                className="mobile-menu-button"
                onClick={() => setMenueOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
            >
                {menuOpen ? <X /> : <Menu />}
            </button>

            <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#services" onClick={closeMenu}>Treatments</a>
                <a href="#doctors" onClick={closeMenu}>Our Doctors</a>
                <a href="#estimator" onClick={closeMenu}>Cost Estimator</a>
                <a href="#faq" onClick={closeMenu}>FAQs</a>

                <button className="button button-primary nav-book" onClick={goToBooking}>
                    Book Appointment
                </button>
            </nav>
        </header>
    );
}