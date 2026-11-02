import { useState } from "react";
import {
  ArrowUpRight,
  X,
  CheckCircle2,
  CalendarDays,
  ChevronDown,
  Clock,
} from "lucide-react";

import { services } from "../data/clinicData";
import { serviceDetails } from "../serviceDetails";

const serviceImages = {
  "General Dentistry":
    "https://plus.unsplash.com/premium_photo-1674998806375-58edc35ddf3b?q=80&w=900&auto=format&fit=crop",

  "Teeth Cleaning":
    "https://plus.unsplash.com/premium_photo-1661768571778-52173afa5a74?q=80&w=900&auto=format&fit=crop",

  "Dental Filling":
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=900&auto=format&fit=crop",

  "Orthodontic Consultation":
    "https://images.unsplash.com/photo-1598531228433-d9f0cb960816?q=80&w=900&auto=format&fit=crop",

  "Sports Physiotherapy":
    "https://images.unsplash.com/photo-1770012905139-713758ded6ec?q=80&w=900&auto=format&fit=crop",

  "Back and Neck Therapy":
    "https://images.unsplash.com/photo-1768507423533-b87b62769758?q=80&w=900&auto=format&fit=crop",

  "Posture Correction":
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=900&auto=format&fit=crop",

  "Post-Surgery Rehabilitation":
    "https://plus.unsplash.com/premium_photo-1663047690815-d80acb46f127?q=80&w=900&auto=format&fit=crop",
};

const fallbackImage =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const getServiceName = (service) =>
    service.name || service.title;

  const getServiceImage = (service) => {
    const name = getServiceName(service);

    return (
      serviceImages[name] ||
      service.image ||
      fallbackImage
    );
  };

  const getServiceDetails = (service) => {
    return serviceDetails[getServiceName(service)] || {};
  };

  const openServiceDetails = (service) => {
    setSelectedService(service);
    setOpenFaq(0);
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
  };

  const handleBookAppointment = () => {
    if (!selectedService) return;

    const serviceName = getServiceName(selectedService);

    window.dispatchEvent(
      new CustomEvent("select-treatment", {
        detail: serviceName,
      })
    );

    setSelectedService(null);

    setTimeout(() => {
      document.getElementById("booking")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  return (
    <>
      {/* SERVICES SECTION */}
      <section
        className="section services-section"
        id="services"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              OUR TREATMENTS
            </span>

            <h2>
              Care for every stage of your wellness journey.
            </h2>
          </div>

          <p>
            Discover our dental and physiotherapy services.
            Explore treatment information, benefits, and
            frequently asked questions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const name = getServiceName(service);
            const image = getServiceImage(service);

            return (
              <article
                className="service-card"
                key={name || index}
                style={{
                  "--service-image": `url("${image}")`,
                }}
              >
                <div className="service-card-content">
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="service-category">
                    {service.department ||
                      service.category ||
                      "Healthcare"}
                  </span>

                  <h3>{name}</h3>

                  <p>{service.description}</p>

                  <button
                    type="button"
                    className="service-card-button"
                    onClick={() =>
                      openServiceDetails(service)
                    }
                    aria-label={`Explore ${name}`}
                  >
                    <span>Explore Treatment</span>
                    <ArrowUpRight size={19} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SERVICE DETAILS POPUP */}
      {selectedService && (
        <div
          className="service-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeServiceDetails();
            }
          }}
        >
          <section
            className="service-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <button
              type="button"
              className="service-modal-close"
              onClick={closeServiceDetails}
              aria-label="Close treatment details"
            >
              <X size={22} />
            </button>

            {/* IMAGE AND TITLE */}
            <div className="service-modal-image">
              <img
                src={getServiceImage(selectedService)}
                alt={getServiceName(selectedService)}
              />

              <div className="service-modal-image-overlay">
                <span>
                  {selectedService.department ||
                    selectedService.category ||
                    "Healthcare"}
                </span>

                <h2 id="service-modal-title">
                  {getServiceName(selectedService)}
                </h2>

                <p>
                  {getServiceDetails(selectedService).subtitle ||
                    "Learn about your treatment and care options."}
                </p>
              </div>
            </div>

            <div className="service-modal-body">
              {/* OVERVIEW */}
              <section className="service-detail-section">
                <h3>About This Treatment</h3>

                <p>
                  {getServiceDetails(selectedService).overview ||
                    selectedService.description}
                </p>
              </section>

              {/* BENEFITS */}
              <section className="service-detail-section">
                <h3>Benefits of the Treatment</h3>

                <div className="service-benefits">
                  {(
                    getServiceDetails(selectedService).benefits ||
                    [
                      selectedService.description,
                      "Personalized assessment and guidance.",
                      "Recommendations for your individual needs.",
                    ]
                  ).map((benefit, index) => (
                    <div
                      className="service-benefit"
                      key={index}
                    >
                      <CheckCircle2 size={19} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* TREATMENT PROCESS */}
              <section className="service-detail-section">
                <h3>What to Expect</h3>

                <ol className="service-process">
                  {(
                    getServiceDetails(selectedService).process ||
                    [
                      "Discuss your needs with a healthcare professional.",
                      "Receive an assessment and suitable recommendations.",
                      "Agree on the next steps for your care.",
                    ]
                  ).map((step, index) => (
                    <li key={index}>
                      <span>{index + 1}</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
              </section>

              {/* FREQUENTLY ASKED QUESTIONS */}
              <section className="service-detail-section">
                <h3>
                  Frequently Asked Questions
                </h3>

                <div className="service-faq-list">
                  {(
                    getServiceDetails(selectedService).faqs ||
                    [
                      {
                        question:
                          "How can I book this treatment?",
                        answer:
                          "Click the Book an Appointment button to select this treatment in the appointment form.",
                      },
                      {
                        question:
                          "Will I need a consultation first?",
                        answer:
                          "A healthcare professional can assess your needs and explain suitable treatment options.",
                      },
                    ]
                  ).map((faq, index) => {
                    const isOpen = openFaq === index;

                    return (
                      <article
                        className="service-faq-item"
                        key={faq.question}
                      >
                        <button
                          type="button"
                          className="service-faq-question"
                          onClick={() =>
                            setOpenFaq(
                              isOpen ? -1 : index
                            )
                          }
                          aria-expanded={isOpen}
                        >
                          <span>{faq.question}</span>

                          <ChevronDown
                            size={19}
                            className={
                              isOpen
                                ? "service-faq-chevron-open"
                                : ""
                            }
                          />
                        </button>

                        {isOpen && (
                          <div className="service-faq-answer">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </section>

              {/* INFORMATION NOTE */}
              <div className="service-modal-note">
                <Clock size={18} />

                <p>
                  Treatment suitability and recovery time vary
                  by individual. Consult a qualified healthcare
                  professional for personalized advice.
                </p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="service-modal-actions">
                <button
                  type="button"
                  className="button button-primary"
                  onClick={handleBookAppointment}
                >
                  <CalendarDays size={19} />
                  Book an Appointment
                </button>

                <button
                  type="button"
                  className="button button-outline"
                  onClick={closeServiceDetails}
                >
                  Close Details
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}