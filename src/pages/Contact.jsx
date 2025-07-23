import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate form submission
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset success message after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Phone",
            details: "+1 (555) 123-4567",
            subtext: "Mon-Fri 9AM-6PM"
        },
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email",
            details: "hello@company.com",
            subtext: "We'll respond within 24 hours"
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Office",
            details: "Tulsi Arcade, Mota varachha",
            subtext: "Surat, 394101"
        },
        {
            icon: <Clock className="h-6 w-6" />,
            title: "Hours",
            details: "Monday - Friday",
            subtext: "9:00 AM - 6:00 PM EST"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
            {/* Header Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-pink-700 py-16">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-red-100 max-w-3xl mx-auto">
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
                    <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white opacity-5 rounded-full"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100 to-pink-100 rounded-full -mr-16 -mt-16"></div>
                        <div className="relative">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>

                            {isSubmitted && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                    <span className="text-green-800">Message sent successfully! We'll get back to you soon.</span>
                                </div>
                            )}

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 flex items-center justify-center space-x-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-5 w-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                            <p className="text-gray-600 text-lg mb-8">
                                We're here to help and answer any question you might have. We look forward to hearing from you.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center text-white">
                                            {info.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                                            <p className="text-gray-800 font-medium">{info.details}</p>
                                            <p className="text-gray-500 text-sm">{info.subtext}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our Office</h3>
                            <div
                                onClick={() => window.open('https://maps.google.com/?q=Tulsi+Arcade', '_blank')}
                                className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-64 flex items-center justify-center cursor-pointer hover:from-gray-200 hover:to-gray-300 transition-all duration-300 group"
                            >
                                <div className="text-center">
                                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2 group-hover:text-red-500 transition-colors duration-300" />
                                    <p className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300 font-medium">Click to Open in Google Maps</p>
                                    <p className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                                        Tulsi arcade, mota varachha, Surat, 394101
                                    </p>
                                    <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        Get Directions
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Quick answers to common questions. Can't find what you're looking for? Send us a message above.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                question: "How quickly do you respond?",
                                answer: "We typically respond to all inquiries within 24 hours during business days."
                            },
                            {
                                question: "Do you offer phone support?",
                                answer: "Yes! You can call us during business hours at +1 (555) 123-4567."
                            },
                            {
                                question: "Can I schedule a meeting?",
                                answer: "Absolutely! Mention your preferred time in your message and we'll coordinate."
                            },
                            {
                                question: "What information should I include?",
                                answer: "Please provide as much detail as possible about your inquiry to help us assist you better."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                                <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}