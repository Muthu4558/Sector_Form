import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '../components/AirlineSector/SectionHeader';
import HotelHealthChallenges from '../components/AirlineSector/AirlineHealthChallenges';
import HealthPackagesAccordion from '../components/AirlineSector/HealthPackagesAccordion';
import WellnessPackages from '../components/AirlineSector/WellnessPackages';
import InHouseHealthcare from '../components/AirlineSector/InHouseHealthcare';
import WhatWillYouGain from '../components/AirlineSector/UniqueWhyNizcareSection';    
import Footer from '../components/AirlineSector/Footer';

const AirlineSector = () => {
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
        'Cement',
        'Fertilizer',
        'Food processing',
        'Steel',
        'Pharma',
        'Hotels',
        'IT',
        'Banks',
        'Airlines',
        'Leather Industry',
        'Heavy industry',
        'Cottage',
        'Chemical',
        'Mining',
        'Textile',
        'Automobile',
        'ITES',
        'Aerospace & Defense',
        'Metals',
        'Petroleum Industry',
        'Telecommunication',
        'Ports, Shipping & Maritime',
        'Water Treatment & Sanitation Services',
        'Dairy & Livestock Industry',
        'Tourism & Travel',
        'Paper',
        'Real Estate Tech',
        'Sports Industry'
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleChange = (field, value) => {
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

    const ThankYouMessage = () => (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-teal-200 to-green-100 px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">🎉 Thank you!</h1>
            <p className="text-lg">We will get in touch with you shortly.</p>
        </div>
    );

    if (isSubmitted) return <ThankYouMessage />;

    return (
        <div>
            <div>
                <HeroSection />
                <HotelHealthChallenges />
                <HealthPackagesAccordion />
                <WellnessPackages />
            </div>
            {/* <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#e8f5e9] flex items-center justify-center py-10 px-4">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-2xl bg-white shadow-2xl px-10 py-12 space-y-8"
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
                            placeholder="HR SPOC Name *"
                            className="input-style"
                            value={formData.hrSpocName}
                            onChange={(e) => handleChange("hrSpocName", e.target.value)}
                            required
                        />
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
                            placeholder="Number of Employees *"
                            className="input-style"
                            value={formData.employeeCount}
                            onChange={(e) => handleChange("employeeCount", e.target.value)}
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
                            className="input-style"
                            value={formData.sector}
                            onChange={(e) => handleChange("sector", e.target.value)}
                            required
                        >
                            <option value="">Select Sector *</option>
                            {sectorOptions.map((s, idx) => (
                                <option key={idx}>{s}</option>
                            ))}
                        </select>

                        <select
                            className="input-style"
                            value={formData.usingWellness}
                            onChange={(e) => handleChange("usingWellness", e.target.value)}
                            required
                        >
                            <option value="">Currently using any wellness service? *</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div className="space-y-4">
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
                    </div>

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
            </div> */}
            <div>
                <InHouseHealthcare />
                <WhatWillYouGain />
                <Footer />
            </div>
        </div>
    );
};

export default AirlineSector;