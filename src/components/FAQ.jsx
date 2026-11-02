import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Which treatments are listed on this website?",
    answer:
      "The demonstration includes general dentistry, teeth cleaning, dental fillings, orthodontic consultations, sports physiotherapy, back and neck therapy, posture correction, and post-surgery rehabilitation.",
  },
  {
    question: "How do I request an appointment?",
    answer:
      "Go to the booking section, select a department and treatment, choose a sample doctor and time slot, and enter the required patient details.",
  },
  {
    question: "Are the displayed treatment prices final?",
    answer:
      "No. Prices are illustrative examples for this project. Real treatment costs depend on the clinic, assessment, and recommended care plan.",
  },
  {
    question: "Can I select a preferred doctor?",
    answer:
      "Yes. The sample booking form lets you select a doctor from the chosen department. The displayed schedules are sample data and are not connected to live availability.",
  },
  {
    question: "Does appointment booking contact a real clinic?",
    answer:
      "No. This is a frontend demonstration. Appointment requests are saved in your browser and are not sent to clinic staff.",
  },
  {
    question: "What should I do if I need medical advice?",
    answer:
      "Contact a qualified healthcare professional for advice specific to your symptoms and medical history. Website information is not a substitute for professional assessment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="faq-intro">
        <span className="eyebrow">HELP CENTER</span>
        <h2>Frequently asked questions.</h2>
        <p>
          Find answers about the treatments, sample prices, and appointment
          process featured on this website.
        </p>

        <a href="#contact" className="button button-outline">
          Need more help?
        </a>
      </div>

      <div className="faq-list">
        {questions.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article className="faq-item" key={item.question}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>

                <ChevronDown
                  size={20}
                  className={isOpen ? "rotate-icon" : ""}
                />
              </button>

              {isOpen && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}