import { Star, MessageCircle } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya K.",
    treatment: "Dental Care",
    rating: 5,
    message:
      "The website makes it easy to explore treatments and understand the appointment process.",
  },
  {
    id: 2,
    name: "Rahul M.",
    treatment: "Physiotherapy",
    rating: 5,
    message:
      "I like the clear layout and the ability to review the sample doctor schedules.",
  },
  {
    id: 3,
    name: "Sneha P.",
    treatment: "Treatment Estimator",
    rating: 4,
    message:
      "The cost estimator is a useful way to understand the example pricing before booking.",
  },
];

export default function Testimonials() {
  const shareFeedback = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="section testimonials-section" id="reviews">
      <div className="section-heading">
        <div>
          <span className="eyebrow">PATIENT EXPERIENCES</span>
          <h2>Designed around a better care experience.</h2>
        </div>

        <p>
          Example feedback cards showing how patient experiences could be
          presented on a real clinic website.
        </p>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.id}>
            <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: review.rating }, (_, index) => (
                <Star key={index} size={17} fill="currentColor" />
              ))}
            </div>

            <p className="review-message">“{review.message}”</p>

            <div className="review-person">
              <span className="review-avatar">
                {review.name.charAt(0)}
              </span>

              <div>
                <strong>{review.name}</strong>
                <small>{review.treatment}</small>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="review-action">
        <p>Have feedback about this website demonstration?</p>

        <button
          className="button button-outline"
          onClick={shareFeedback}
        >
          <MessageCircle size={18} />
          Share Your Feedback
        </button>
      </div>
    </section>
  );
}