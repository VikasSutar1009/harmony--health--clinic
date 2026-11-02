import { useState } from "react";
import { Calculator, Clock3, IndianRupee } from "lucide-react";
import { services } from "../data/clinicData";

export default function CostEstimator() {
  const [selectedId, setSelectedId] = useState(services[0].id);
  const [quantity, setQuantity] = useState("1");

  const selectedService = services.find(
    (service) => service.id === Number(selectedId)
  );

  const total = selectedService.price * Number(quantity);

  const bookTreatment = () => {
    window.dispatchEvent(
      new CustomEvent("select-treatment", {
        detail: selectedService,
      })
    );

    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="section estimator-section" id="estimator">
      <div className="estimator-intro">
        <span className="eyebrow">PLAN YOUR VISIT</span>
        <h2>Understand your estimated treatment cost.</h2>
        <p>
          Select a service to view an illustrative starting price. Actual
          charges depend on the assessment and treatment recommended by a
          qualified clinician.
        </p>

        <div className="estimator-note">
          <Calculator size={22} />
          <span>Simple, transparent cost planning</span>
        </div>
      </div>

      <div className="estimator-card">
        <div className="estimator-card-heading">
          <span className="estimator-icon">
            <IndianRupee size={23} />
          </span>
          <div>
            <h3>Treatment estimator</h3>
            <p>Calculate an indicative amount</p>
          </div>
        </div>

        <label htmlFor="estimate-treatment">Choose a treatment</label>

        <select
          id="estimate-treatment"
          value={selectedId}
          onChange={(event) => setSelectedId(event.target.value)}
        >
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>

        <label htmlFor="estimate-quantity">Number of sessions or units</label>

        <select
          id="estimate-quantity"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        >
          <option value="1">1 session / unit</option>
          <option value="2">2 sessions / units</option>
          <option value="3">3 sessions / units</option>
          <option value="4">4 sessions / units</option>
          <option value="5">5 sessions / units</option>
        </select>

        <div className="estimate-info">
          <span>Illustrative starting price</span>
          <strong>
            ₹{selectedService.price.toLocaleString("en-IN")}
          </strong>
        </div>

        <div className="estimate-info">
          <span><Clock3 size={16} /> Recovery guidance</span>
          <span className="recovery-value">{selectedService.recovery}</span>
        </div>

        <div className="estimate-total">
          <span>Estimated total</span>
          <strong>₹{total.toLocaleString("en-IN")}</strong>
        </div>

        <button className="button button-primary full-width" onClick={bookTreatment}>
          Book this treatment
        </button>

        <p className="estimate-disclaimer">
          This estimate is for demonstration only and is not a medical quote
          or a guarantee of treatment outcome.
        </p>
      </div>
    </section>
  );
}