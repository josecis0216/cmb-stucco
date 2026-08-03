'use client';

import ContactForm from "@/app/ui/contact-form/page";
import { radley, carlito } from "../ui/fonts"
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Contact() {
    return <div className="flex flex-col flex-1 items-center justify-center font-sans bg-[#f4f1e8]"> {/* bg-zinc-50 dark:bg-black */}
        <div className="relative isolate px-6 lg:px-8">
            <div className="mx-auto max-w-5xl py-5 sm:py-8 lg:py-6">
                <div className="grid sm:grid-cols-1 lg:grid-cols-2">
                    <div className="text-left mt-10">
                        <h1 className={`text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl ${radley.className}`}>
                            Reach out for a free quote today!
                        </h1>
                        <hr />
                        <p className={`mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 ${carlito.className}`}>
                            Visit our Socials:
                        </p>
                        <div className="grid grid-cols-6">
                            <a href="https://www.facebook.com"><FaFacebook size={52} color="#1877F2" /></a>
                            <a href="https://www.instagram.com"><FaInstagram size={52} color="#833AB4" /></a>
                        </div>
                    </div>

                    <div className="sm:mb-2 sm:flex sm:justify-center mt-8">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
};