import { useState } from "react";
import { CalendarDays, ChevronDown, GraduationCap } from "lucide-react";
import { doctors } from "../data/clinicData";

export default function Doctors() {
  const [expandedDoctor, setExpandedDoctor] = useState(null);

  const bookWithDoctor = (doctor) => {
    window.dispatchEvent(
      new CustomEvent("select-doctor", {
        detail: doctor,
      })
    );

    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="section doctors-section" id="doctors">
      <div className="section-heading">
        <div>
          <span className="eyebrow">MEET OUR TEAM</span>
          <h2>Care led by experienced professionals.</h2>
        </div>

        <p>
          Explore our sample specialist profiles and appointment schedules.
        </p>
      </div>

      <div className="doctors-grid">
        {doctors.map((doctor) => {
          const isExpanded = expandedDoctor === doctor.id;

          return (
            <article className="doctor-card" key={doctor.id}>
              <img
                src={doctor.image}
                alt={doctor.name}
                className="doctor-image"
                loading="lazy"
              />

              <div className="doctor-content">
                <span className="doctor-department">
                  {doctor.department}
                </span>

                <h3>{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>

                <div className="doctor-detail">
                  <GraduationCap size={17} />
                  <span>{doctor.qualification}</span>
                </div>

                <p className="doctor-experience">{doctor.experience}</p>

                <button
                  className="availability-toggle"
                  onClick={() =>
                    setExpandedDoctor(isExpanded ? null : doctor.id)
                  }
                  aria-expanded={isExpanded}
                >
                  <span><CalendarDays size={17} /> View availability</span>
                  <ChevronDown
                    size={18}
                    className={isExpanded ? "rotate-icon" : ""}
                  />
                </button>

                {isExpanded && (
                  <div className="availability-list">
                    {doctor.availability.map((slot) => (
                      <div className="availability-row" key={slot.day}>
                        <strong>{slot.day}</strong>
                        <span>{slot.time}</span>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  className="button button-outline doctor-book"
                  onClick={() => bookWithDoctor(doctor)}
                >
                  Book with doctor
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}