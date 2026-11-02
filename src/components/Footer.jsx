import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-about">
          <a href="#home" className="brand footer-brand">
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

          <p>
            Supporting healthier smiles and better movement through
            patient-focused dental and physiotherapy care.
          </p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <a href="#home">Home</a>
          <a href="#services">Treatments</a>
          <a href="#doctors">Our Doctors</a>
          <a href="#estimator">Cost Estimator</a>
        </div>

        <div className="footer-column">
          <h4>Contact Information</h4>

          <p><MapPin size={17} /> Kolhapur, Maharashtra, India</p>
          <p><Phone size={17} /> +91 9158257510</p>
          <p><Mail size={17} /> harmonyclinic@gmail.com</p>
          <p><Clock size={17} /> By appointment</p>
        </div>

        <div className="footer-column footer-cta">
          <h4>Ready to get started?</h4>
          <p>Take the first step toward your wellness goals.</p>
          <a href="#booking" className="footer-book-link">
            Book an appointment <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Harmony Health Clinic.
        </p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}