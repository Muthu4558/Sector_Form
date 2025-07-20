import { useEffect, useState } from 'react';
import heroImage from '../../assets/Leather-sector-img/cover-img.jpeg';
import logo from '../../assets/Hotel-sector-img/logo_white.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import india from '../../assets/indiaData.json';

const HeroSection = () => {
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [mobileError, setMobileError] = useState('');
    const [formData, setFormData] = useState({
        companyName: '',
        hrName: '',
        hrSpocName: '',
        mobile: '',
        email: '',
        state: '',
        district: '',
        city: '',
        sector: 'Leather',
        usingWellness: '',
        employeeCount: '',
        expectedFeatures: '',
        anythingElse: ''
    });

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

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
            setMobileError(value.length !== 10 ? 'Mobile number must be 10 digits' : '');
        }

        if (field === 'employeeCount') {
            value = value.replace(/[^\d]/g, '');
        }

        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.mobile.length !== 10) {
            setMobileError('Mobile number must be 10 digits');
            return;
        }

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
                console.error(data);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-teal-200 to-green-100 px-6 text-center">
                <h1 className="text-5xl font-bold mb-4">🎉 Thank you!</h1>
                <p className="text-lg">We will get in touch with you shortly.</p>
            </div>
        );
    }

    return (
        <section
            className="relative min-h-screen bg-cover bg-center py-10 px-4 flex items-center justify-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

            <img
                src={logo}
                alt="Logo"
                className="absolute top-4 right-4 md:left-4 w-32 md:w-40 z-10"
            />

            <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-5">
                <div className="text-white space-y-6 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Strength Behind the Stitch: Wellness That Works for Leather
                    </h1>
                    <p className="text-lg max-w-md">
                    From Tannery to Tailoring – Healthier Workers, Stronger Output.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/30 space-y-6"
                    data-aos="fade-left"
                >
                    <h2 className="text-2xl text-white font-bold text-center mb-2">
                        Schedule a Demo
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <p className='hidden md:hidden'>Hotel</p>
                        <input
                            type="text"
                            placeholder="Company Name *"
                            className="input-style bg-white/90"
                            value={formData.companyName}
                            onChange={(e) => handleChange("companyName", e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Number of Employees *"
                            className="input-style bg-white/90"
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
                            className="input-style bg-white/90"
                            value={formData.city}
                            onChange={(e) => handleChange("city", e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="HR SPOC Name *"
                            className="input-style bg-white/90"
                            value={formData.hrSpocName}
                            onChange={(e) => handleChange("hrSpocName", e.target.value)}
                            required
                        />
                        <div className="flex items-center bg-white/90 rounded-md overflow-hidden">
                            <span className="px-3 text-gray-700 font-semibold border-r border-gray-300">
                                +91
                            </span>
                            <input
                                type="text"
                                placeholder="Mobile Number *"
                                className="input-style bg-white/90"
                                value={formData.mobile}
                                onChange={(e) => handleChange("mobile", e.target.value)}
                                required
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email *"
                            className="input-style bg-white/90"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                        />
                        {mobileError && (
                            <p className="text-red-500 text-sm mt-1 ml-1">{mobileError}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 rounded-xl bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold shadow-md transition duration-300 hover:scale-105 ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default HeroSection;