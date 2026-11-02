import { useEffect, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    CalendarCheck,
    CheckCircle2,
} from "lucide-react";
import { doctors, services } from "../data/clinicData";

const initialForm = {
    department: "Dental",
    treatmentId: String(services[0].id),
    doctorId: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    age: "",
    notes: "",
};

const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
];

export default function Booking() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [confirmation, setConfirmation] = useState(null);

    const selectedService = services.find(
        (service) => service.id === Number(form.treatmentId)
    );

    const availableDoctors = doctors.filter(
        (doctor) => doctor.department === form.department
    );

    const selectedDoctor = doctors.find(
        (doctor) => doctor.id === Number(form.doctorId)
    );

    useEffect(() => {
        const handleTreatment = (event) => {
            const service = event.detail;

            setForm((previous) => ({
                ...previous,
                department: service.category,
                treatmentId: String(service.id),
                doctorId: "",
            }));

            setStep(1);
            setConfirmation(null);
        };

        const handleDoctor = (event) => {
            const doctor = event.detail;

            setForm((previous) => ({
                ...previous,
                department: doctor.department,
                doctorId: String(doctor.id),
            }));

            setStep(1);
            setConfirmation(null);
        };

        window.addEventListener("select-treatment", handleTreatment);
        window.addEventListener("select-doctor", handleDoctor);

        return () => {
            window.removeEventListener("select-treatment", handleTreatment);
            window.removeEventListener("select-doctor", handleDoctor);
        };
    }, []);

    const updateField = (event) => {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
            ...(name === "department" ? { doctorId: "" } : {}),
        }));

        setErrors((previous) => ({
            ...previous,
            [name]: "",
        }));
    };

    const validateStep = () => {
        const newErrors = {};

        if (step === 1) {
            if (!form.department) {
                newErrors.department = "Please choose a department.";
            }

            if (!form.treatmentId) {
                newErrors.treatmentId = "Please choose a treatment.";
            }

            if (!form.doctorId) {
                newErrors.doctorId = "Please choose a doctor.";
            }

            if (!form.date) {
                newErrors.date = "Please select an appointment date.";
            } else {
                const selectedDate = new Date(`${form.date}T00:00:00`);
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                if (selectedDate < today) {
                    newErrors.date = "Please choose today or a future date.";
                }
            }

            if (!form.time) {
                newErrors.time = "Please choose a time slot.";
            }
        }

        if (step === 2) {
            if (form.name.trim().length < 2) {
                newErrors.name = "Enter your full name.";
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
                newErrors.email = "Enter a valid email address.";
            }

            if (!/^\d{10}$/.test(form.phone)) {
                newErrors.phone = "Enter a 10-digit mobile number.";
            }

            if (
                form.age &&
                (Number(form.age) < 1 || Number(form.age) > 120)
            ) {
                newErrors.age = "Enter an age between 1 and 120.";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep()) {
            setStep((previous) => Math.min(previous + 1, 3));
        }
    };

    const previousStep = () => {
        setErrors({});
        setStep((previous) => Math.max(previous - 1, 1));
    };

    const submitBooking = (event) => {
        event.preventDefault();

        if (!validateStep()) return;

        const appointment = {
            ...form,
            patientName: form.name.trim(),
            treatment: selectedService.title,
            doctor: selectedDoctor.name,
            reference: `HH-${Date.now().toString().slice(-8)}`,
            submittedAt: new Date().toISOString(),
            status: "Pending",
        };

        try {
            const existing = JSON.parse(
                localStorage.getItem("harmonyAppointments") || "[]"
            );

            localStorage.setItem(
                "harmonyAppointments",
                JSON.stringify([...existing, appointment])
            );
        } catch (error) {
            console.error("Unable to save appointment in this browser:", error);
        }

        setConfirmation(appointment);
        setStep(3);
    };

    const resetBooking = () => {
        setForm(initialForm);
        setErrors({});
        setConfirmation(null);
        setStep(1);
    };

    const today = new Date();
    const minimumDate = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, "0"),
        String(today.getDate()).padStart(2, "0"),
    ].join("-");

    return (
        <section className="section booking-section" id="booking">
            <div className="section-heading">
                <div>
                    <span className="eyebrow">BOOK YOUR VISIT</span>
                    <h2>Your next step toward better care.</h2>
                </div>

                <p>
                    Enter your details below to create a sample appointment request.
                </p>
            </div>

            <div className="booking-layout">
                <aside className="booking-sidebar">
                    <span className="booking-sidebar-icon">
                        <CalendarCheck size={28} />
                    </span>

                    <h3>Let's plan your visit.</h3>

                    <p>
                        Choose a department, select your preferred specialist, and share
                        your contact information.
                    </p>

                    <div className="booking-step-list">
                        <div className={`booking-step ${step >= 1 ? "active" : ""}`}>
                            <span>1</span>
                            <div>
                                <strong>Appointment</strong>
                                <small>Department, doctor and time</small>
                            </div>
                        </div>

                        <div className={`booking-step ${step >= 2 ? "active" : ""}`}>
                            <span>2</span>
                            <div>
                                <strong>Patient details</strong>
                                <small>Your contact information</small>
                            </div>
                        </div>

                        <div className={`booking-step ${step >= 3 ? "active" : ""}`}>
                            <span>3</span>
                            <div>
                                <strong>Confirmation</strong>
                                <small>Review your request</small>
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="booking-form-panel">
                    {confirmation ? (
                        <div className="confirmation-panel">
                            <span className="confirmation-icon">
                                <CheckCircle2 size={42} />
                            </span>

                            <span className="eyebrow">REQUEST CREATED</span>
                            <h3>Thank you, {confirmation.patientName}!</h3>

                            <p>
                                Your sample appointment request has been saved in this
                                browser. It has not been sent to a real clinic.
                            </p>

                            <div className="confirmation-reference">
                                <span>Reference number</span>
                                <strong>{confirmation.reference}</strong>
                            </div>

                            <div className="confirmation-details">
                                <div><span>Treatment</span><strong>{confirmation.treatment}</strong></div>
                                <div><span>Doctor</span><strong>{confirmation.doctor}</strong></div>
                                <div><span>Date</span><strong>{confirmation.date}</strong></div>
                                <div><span>Time</span><strong>{confirmation.time}</strong></div>
                                <div>
                                    <span>Illustrative price</span>
                                    <strong>₹{selectedService.price.toLocaleString("en-IN")}</strong>
                                </div>
                            </div>

                            <button className="button button-primary full-width" onClick={resetBooking}>
                                Book another appointment
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={submitBooking} noValidate>
                            {step === 1 && (
                                <>
                                    <div className="form-step-heading">
                                        <span>STEP 01 OF 03</span>
                                        <h3>Appointment preferences</h3>
                                        <p>Choose the service and a suitable appointment slot.</p>
                                    </div>

                                    <div className="form-grid">
                                        <div className="form-field">
                                            <label htmlFor="department">Department *</label>
                                            <select
                                                id="department"
                                                name="department"
                                                value={form.department}
                                                onChange={(event) => {
                                                    updateField(event);
                                                    setForm((previous) => ({
                                                        ...previous,
                                                        treatmentId: "",
                                                    }));
                                                }}
                                            >
                                                <option value="Dental">Dental Care</option>
                                                <option value="Physiotherapy">Physiotherapy</option>
                                            </select>
                                            {errors.department && <small className="field-error">{errors.department}</small>}
                                        </div>

                                        <div className="form-field">
                                            <label htmlFor="treatmentId">Treatment *</label>
                                            <select
                                                id="treatmentId"
                                                name="treatmentId"
                                                value={form.treatmentId}
                                                onChange={updateField}
                                            >
                                                <option value="">Select a treatment</option>
                                                {services
                                                    .filter((service) => service.category === form.department)
                                                    .map((service) => (
                                                        <option key={service.id} value={service.id}>
                                                            {service.title}
                                                        </option>
                                                    ))}
                                            </select>
                                            {errors.treatmentId && <small className="field-error">{errors.treatmentId}</small>}
                                        </div>

                                        <div className="form-field">
                                            <label htmlFor="doctorId">Preferred doctor *</label>
                                            <select
                                                id="doctorId"
                                                name="doctorId"
                                                value={form.doctorId}
                                                onChange={updateField}
                                            >
                                                <option value="">Select a doctor</option>
                                                {availableDoctors.map((doctor) => (
                                                    <option key={doctor.id} value={doctor.id}>
                                                        {doctor.name} — {doctor.specialty}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.doctorId && <small className="field-error">{errors.doctorId}</small>}
                                        </div>

                                        <div className="form-field">
                                            <label htmlFor="date">Preferred date *</label>
                                            <input
                                                id="date"
                                                name="date"
                                                type="date"
                                                min={minimumDate}
                                                value={form.date}
                                                onChange={updateField}
                                            />
                                            {errors.date && <small className="field-error">{errors.date}</small>}
                                        </div>

                                        <div className="form-field full-field">
                                            <label htmlFor="time">Preferred time *</label>
                                            <select
                                                id="time"
                                                name="time"
                                                value={form.time}
                                                onChange={updateField}
                                            >
                                                <option value="">Choose a time slot</option>
                                                {timeSlots.map((time) => (
                                                    <option key={time} value={time}>{time}</option>
                                                ))}
                                            </select>
                                            {errors.time && <small className="field-error">{errors.time}</small>}
                                        </div>
                                    </div>

                                    <div className="booking-summary">
                                        <span>Illustrative starting price</span>
                                        <strong>
                                            {selectedService
                                                ? `₹${selectedService.price.toLocaleString("en-IN")}`
                                                : "Select a treatment"}
                                        </strong>
                                    </div>

                                    <div className="form-actions">
                                        <span className="form-required">* Required fields</span>
                                        <button type="button" className="button button-primary" onClick={nextStep}>
                                            Patient details <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <div className="form-step-heading">
                                        <span>STEP 02 OF 03</span>
                                        <h3>Patient information</h3>
                                        <p>Provide the information needed for this demo request.</p>
                                    </div>

                                    <div className="form-grid">
                                        <div className="form-field full-field">
                                            <label htmlFor="name">Full name *</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Enter your full name"
                                                value={form.name}
                                                onChange={updateField}
                                                autoComplete="name"
                                            />
                                            {errors.name && <small className="field-error">{errors.name}</small>}
                                        </div>

                                        <div className="form-field">
                                            <label htmlFor="email">Email address *</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                value={form.email}
                                                onChange={updateField}
                                                autoComplete="email"
                                            />
                                            {errors.email && <small className="field-error">{errors.email}</small>}
                                        </div>

                                        <div className="form-field">
                                            <label htmlFor="phone">Mobile number *</label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                inputMode="numeric"
                                                maxLength={10}
                                                placeholder="10-digit mobile number"
                                                value={form.phone}
                                                onChange={updateField}
                                                autoComplete="tel"
                                            />
                                            {errors.phone && <small className="field-error">{errors.phone}</small>}
                                        </div>

                                        <div className="form-field full-field">
                                            <label htmlFor="age">Age (optional)</label>
                                            <input
                                                id="age"
                                                name="age"
                                                type="number"
                                                min="1"
                                                max="120"
                                                placeholder="Enter age"
                                                value={form.age}
                                                onChange={updateField}
                                            />
                                            {errors.age && <small className="field-error">{errors.age}</small>}
                                        </div>

                                        <div className="form-field full-field">
                                            <label htmlFor="notes">Additional notes (optional)</label>
                                            <textarea
                                                id="notes"
                                                name="notes"
                                                rows="3"
                                                placeholder="Share any appointment preferences"
                                                value={form.notes}
                                                onChange={updateField}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-actions">
                                        <button type="button" className="button button-outline" onClick={previousStep}>
                                            <ArrowLeft size={18} /> Back
                                        </button>

                                        <button type="submit" className="button button-primary">
                                            Create request <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}