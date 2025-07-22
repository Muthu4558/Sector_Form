import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import india from '../../assets/indiaData.json';

const HotelSectorModal = ({ open, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '',
        hrName: '',
        hrSpocName: '',
        mobile: '',
        email: '',
        city: '',
        sector: '',
        usingWellness: '',
        employeeCount: '',
        expectedFeatures: '',
        anythingElse: ''
    });

    const sectorOptions = [
        'Cement', 'Fertilizer', 'Food processing', 'Steel', 'Pharma', 'Hotels', 'IT', 'Banks', 'Airlines', 'Leather Industry',
        'Heavy industry', 'Cottage', 'Chemical', 'Mining', 'Textile', 'Automobile', 'ITES', 'Aerospace & Defense', 'Metals', 'Petroleum Industry',
        'Telecommunication', 'Ports, Shipping & Maritime', 'Water Treatment & Sanitation Services', 'Dairy & Livestock Industry', 'Tourism & Travel',
        'Paper', 'Real Estate Tech', 'Sports Industry', 'Other'
    ];

    useEffect(() => {
        if (open) AOS.init({ duration: 1000 });
    }, [open]);

    useEffect(() => {
        // Prevent background scroll when modal open
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    const handleChange = (field, value) => {
        if (field === 'state') {
            setFormData(prev => ({
                ...prev,
                state: value,
                district: ''
            }));
            return;
        }

        if (['companyName', 'hrName', 'hrSpocName', 'city'].includes(field)) {
            value = value.replace(/[^A-Za-z\s]/g, '');
        }
        if (field === 'mobile') {
            value = value.replace(/[^\d]/g, '').slice(0, 10);
        }
        if (field === 'employeeCount') {
            value = value.replace(/[^\d]/g, '');
        }
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/company/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok) {
                setIsSubmitted(true);
            } else {
                alert('Submission failed');
                console.error(data);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-opacity-40 transition animate-fade-in">
            <div className="relative w-full max-w-2xl">
                <button
                    onClick={onClose}
                    className="absolute right-5 top-4 text-gray-400 hover:text-gray-700 text-3xl font-bold focus:outline-none z-20"
                    aria-label="Close"
                    type="button"
                >&times;</button>

                {/* Content */}
                {isSubmitted ? (
                    <div className="flex flex-col justify-center items-center min-h-[400px] bg-gradient-to-br from-teal-200 to-green-100 px-6 text-center rounded-lg shadow-2xl">
                        <h1 className="text-5xl font-bold mb-4">🎉 Thank you!</h1>
                        <p className="text-lg">We will get in touch with you shortly.</p>
                        <button onClick={onClose} className="mt-8 px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition">Close</button>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="w-full bg-white rounded-lg shadow-2xl px-8 py-10 space-y-8"
                    >
                        <h2 className="text-3xl font-bold text-center text-teal-600">
                            Schedule a Free Demo
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input
                                type="text"
                                placeholder="Company Name *"
                                className="input-style"
                                value={formData.companyName}
                                onChange={(e) => handleChange("companyName", e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Number of Employees *"
                                className="input-style"
                                value={formData.employeeCount}
                                onChange={(e) => handleChange("employeeCount", e.target.value)}
                                required
                            />
                            <select
                                className="input-style bg-white/90"
                                value={formData.state}
                                onChange={(e) => handleChange('state', e.target.value)}
                                required
                            >
                                <option value="">Select State *</option>
                                {Object.keys(india).map((state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>

                            <select
                                className="input-style bg-white/90"
                                value={formData.district}
                                onChange={(e) => handleChange('district', e.target.value)}
                                required
                                disabled={!formData.state}
                            >
                                <option value="">Select District *</option>
                                {formData.state &&
                                    india[formData.state].map((district) => (
                                        <option key={district} value={district}>
                                            {district}
                                        </option>
                                    ))}
                            </select>
                            <input
                                type="text"
                                placeholder="City *"
                                className="input-style"
                                value={formData.city}
                                onChange={(e) => handleChange("city", e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="HR SPOC Name *"
                                className="input-style"
                                value={formData.hrSpocName}
                                onChange={(e) => handleChange("hrSpocName", e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Mobile Number *"
                                className="input-style"
                                value={formData.mobile}
                                onChange={(e) => handleChange("mobile", e.target.value)}
                                required
                                maxLength={10}
                            />
                            <input
                                type="email"
                                placeholder="Email *"
                                className="input-style"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                required
                            />

                            <select
                                className="input-style mx-auto lg:px-20"
                                value={formData.sector}
                                onChange={(e) => handleChange("sector", e.target.value)}
                                required
                            >
                                <option value="">Select Sector *</option>
                                {sectorOptions.map((s, idx) => (
                                    <option key={idx}>{s}</option>
                                ))}
                            </select>


                            {/* <select
                                className="input-style"
                                value={formData.usingWellness}
                                onChange={(e) => handleChange("usingWellness", e.target.value)}
                                required
                            >
                                <option value="">Currently using any wellness service? *</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select> */}
                        </div>

                        {/* <div className="space-y-4">
                            <label className="block text-teal-600 font-semibold">
                                Features Expecting
                            </label>
                            <textarea
                                rows={3}
                                className="input-style w-full"
                                placeholder="Expected Features *"
                                value={formData.expectedFeatures}
                                onChange={(e) =>
                                    handleChange("expectedFeatures", e.target.value)
                                }
                                required
                            />

                            <label className="block text-teal-600 font-semibold">
                                Anything Else
                            </label>
                            <textarea
                                rows={3}
                                className="input-style w-full"
                                placeholder="Anything else you would like to share"
                                value={formData.anythingElse}
                                onChange={(e) => handleChange("anythingElse", e.target.value)}
                            />
                        </div> */}

                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full md:w-auto bg-gradient-to-r from-orange-400 to-yellow-400 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md transition duration-300 hover:scale-105 ${loading ? "opacity-60 cursor-not-allowed" : ""
                                    }`}
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default HotelSectorModal;