'use client';

import NavLinks from '@/app/ui/nav-links';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { radley, carlito } from "../ui/fonts"
import Link from 'next/link';


export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <header className="absolute inset-x-0 top-0 z-50 text-center justify-items-center">
                <div className="grid grid-cols-[30%_30%_40%] md:grid-cols-[20%_60%_20%] md:grid-cols-3 justify-items-center">  {/* grid-flow-col */}
                    <Link href="/" className="md:justify-items-center">
                        <img
                        alt="cmb exteriors logo"
                        src="/logo.PNG"
                        className="w-full md:w-1/4 flex lg:justify-end" />
                    </Link>

                    <nav aria-label="Global" className="flex p-6 lg:px-8">
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="cursor-pointer inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="size-10" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12 lg:justify-end">

                            <NavLinks mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                        </div>
                        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div> */}
                    </nav>

                    <span className="flex items-center text-2xl lg:text-4xl"><a href="tel:8016381332" className={`${radley.className} `}>801-638-1332</a></span>
                </div>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <img
                                    alt="cmb exteriors logo"
                                    src="/logo.PNG"
                                    className="h-16 w-auto"
                                />
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                {/* <XMarkIcon aria-hidden="true" className="size-6" /> */}
                                Close
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {/* {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))} */}
                                    <NavLinks mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                                </div>
                                {/* <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </div>
    );
}

{/* {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                                {item.name}
                            </a>
                        ))} */}