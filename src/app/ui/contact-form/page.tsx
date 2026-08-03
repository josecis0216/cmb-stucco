'use client';

import React, { useState, useRef, SubmitEvent } from 'react';
import { createContactMessage } from '@/app/lib/actions';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const formRef = useRef<HTMLFormElement>(null);

    // Handle form submission
    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);

        try {
            const response = await createContactMessage(formData);

            if (response.success) {
                setStatus('success');
                formRef.current?.reset();
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-150 ease-in-out text-gray-900 placeholder-gray-400 bg-white"
                />
            </div>

            {/* Email Field */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-150 ease-in-out text-gray-900 placeholder-gray-400 bg-white"
                />
            </div>

            {/* Message Field */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-150 ease-in-out text-gray-900 placeholder-gray-400 bg-white resize-none"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status Alerts */}
            {status === 'success' && (
                <p className="text-sm text-green-600 font-medium text-center mt-2">
                    ✓ Message sent successfully!
                </p>
            )}
            {status === 'error' && (
                <p className="text-sm text-red-600 font-medium text-center mt-2">
                    ✕ Something went wrong. Please try again.
                </p>
            )}
        </form>
    );
}