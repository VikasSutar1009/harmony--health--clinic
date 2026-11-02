import { HeartPlus, ShieldCheck, Users, CalendarCheck, } from "lucide-react";

const highlights = [
    {
        icon: HeartPlus,
        title:"Patient-focused care",
        text: "Treatment plans designed around individual needs.",
    },
    {
        icon: ShieldCheck,
        title: "Safety and hygiene",
        text: "A focus on cleaniness and responsible care practices.",
    },
    {
        icon: Users,
        title: "Collaborative approach",
        text: "Dental and physiotherapy services in one place.",
    },
    {
        icon: CalendarCheck,
        title: "Convenient scheduling",
        text: "Choose a preferred appointment slot through our demo form.",
    },
];

export default function About() {
    const goToBooking = () => {
        document.getElementById("booking")?.scrollIntoView({
            behavior:"smooth",
        });
    };

    return (
        <section className="section about-section" id="about">
            <div className="about-content">
                <span className="eyebrow">ABOUT</span>

                <h2>
                    A thoughtful approach to your
                    <span className="text-primary">everyday wellness.</span>
                </h2>

                <p>
                    Harmony Health Clinic is a demonstration website for a multi-spacialty
                    clinic offering dental and physiotherapy services. It brings
                    treatment information, spacialist profiles, cost estimates, and
                    appointment requests together in one convenient experience.
                </p>

                <p>
                    Our website concept focuses on helping visitors understand their
                    options and prepare for a conversation with a qualified healthcare
                    professional.
                </p>

                <button
                    className="button button-primary"
                    onClick={goToBooking}
                >
                    Schedule a Visit
                </button>
            </div>

            <div className="about-highlights">
                {highlights.map((item) => {
                    const Icon = item.icon;

                    return (
                        <article className="about-feature" key={item.title}>
                            <span className="about-feature-icon">
                                <Icon size={25}/>
                            </span>

                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}