import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
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
        <div className="min-h-screen bg-gradient-to-br from-teal-200 to-green-100 p-6 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-white p-8 rounded-3xl shadow-xl space-y-6">
                <h1 className="text-3xl font-bold text-center text-teal-600 mb-6">Company Enquiry Form</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Company Name *" className="fancy-input" value={formData.companyName} onChange={e => handleChange('companyName', e.target.value)} required />
                    {/* <input type="text" placeholder="HR Name *" className="fancy-input" value={formData.hrName} onChange={e => handleChange('hrName', e.target.value)} required /> */}
                    <input type="text" placeholder="HR SPOC Name *" className="fancy-input" value={formData.hrSpocName} onChange={e => handleChange('hrSpocName', e.target.value)} required />
                    <input type="text" placeholder="City *" className="fancy-input" value={formData.city} onChange={e => handleChange('city', e.target.value)} required />
                    <input type="text" placeholder="Mobile *" className="fancy-input" value={formData.mobile} onChange={e => handleChange('mobile', e.target.value)} required maxLength={10} />
                    <input type="email" placeholder="Email *" className="fancy-input" value={formData.email} onChange={e => handleChange('email', e.target.value)} required />
                    <input type="text" placeholder="Number of Employees *" className="fancy-input" value={formData.employeeCount} onChange={e => handleChange('employeeCount', e.target.value)} required />
                    <select className="fancy-input" value={formData.sector} onChange={e => handleChange('sector', e.target.value)} required>
                        <option value="">Select Sector *</option>
                        {sectorOptions.map((s, idx) => <option key={idx}>{s}</option>)}
                    </select>
                    <select className="fancy-input" value={formData.usingWellness} onChange={e => handleChange('usingWellness', e.target.value)} required>
                        <option value="">Currently using any wellness service? *</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-teal-600">What features are you expecting?</h2>
                    <textarea rows="4" className="fancy-input w-full" placeholder="Expected Features *" value={formData.expectedFeatures} onChange={e => handleChange('expectedFeatures', e.target.value)} required />
                    <h2 className="text-xl font-semibold text-teal-600">Anything else you would like to share?</h2>
                    <textarea rows="3" className="fancy-input w-full" placeholder="Anything Else" value={formData.anythingElse} onChange={e => handleChange('anythingElse', e.target.value)} />
                </div>

                <div className="text-center">
                    <button type="submit" disabled={loading} className={`bg-teal-500 hover:bg-teal-400 text-white text-lg px-8 py-3 rounded-full shadow-xl transition duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}>
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Submitting...
                            </span>
                        ) : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Home;