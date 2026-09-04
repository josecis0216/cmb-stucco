'use client';

import ContactForm from "@/app/ui/contact-form/page";
import { radley, carlito } from "../ui/fonts"
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Contact() {
    return <div className="flex flex-col flex-1 items-center justify-center font-sans"> {/* bg-zinc-50 dark:bg-black */}
        <div className="relative isolate px-6 lg:px-8">
            <div className="mx-auto max-w-7xl py-8 md:py-12 mt-5">
                <div className="grid sm:grid-cols-1 lg:grid-cols-2">
                    <div className="mb-2 sm:flex justify-center mt-[70px] md:mt-0">
                        <h1 className={`text-3xl font-semibold tracking-tight text-balance text-gray-900 md:hidden ${radley.className}`}>
                            Reach out for a free quote today!
                        </h1>
                        <div className="md:mt-[25px]">
                            <ContactForm />
                        </div>
                    </div>

                    <div className="text-left mt-[55px] md:mt-3">
                        <h1 className={`text-5xl font-semibold tracking-tight text-balance text-gray-900 hidden md:block mb-2 ${radley.className}`}>
                            Reach out for a free quote today!
                        </h1>
                        <hr />

                        <p className={`mt-5 mb-3 text-xl font-medium text-pretty text-gray-500 ${carlito.className}`}>
                            Visit our Socials:
                        </p>
                        <div className="grid grid-cols-6">
                            {/* <a href="https://www.facebook.com"><FaFacebook size={52} color="#1877F2" /></a> */}
                            <a href="https://www.instagram.com/cmbexteriors"><FaInstagram size={52} color="#833AB4" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};