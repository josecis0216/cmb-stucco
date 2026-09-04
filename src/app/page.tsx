import Image from "next/image";
import { radley, carlito } from '@/app/ui/fonts';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans"> {/* bg-zinc-50 */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl py-5 sm:py-8 lg:py-6">
          <div className="flex justify-center md:justify-end p-4">
            <Link
              href="/contact"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              Get a Free quote
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 ">           
            <div className="md:pl-5 md:order-2">
              <div className="sm:mb-2 sm:flex sm:justify-center lg:mx-16">
                <img src="/logo-updated.png" alt="business logo image" className="lg:w-md"></img>
              </div>
              <div className="text-center">
                <h1 className={`text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl ${radley.className}`}>
                  CMB Exteriors LLC
                </h1>
                <p className={`mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 ${carlito.className}`}>
                  Your expert in customizable exterior finishes. With over 29 years of experience in commercial or residential projects.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <p className={`${radley.className}`}>EST. 2026</p>
                </div>
              </div>
            </div>

            <div className="justify-items-center md:order-1">
              <img
                alt="cmb exteriors logo"
                src="/hero-image.jpg"
                className="w-full" />
            </div>        
          </div>          
        </div>
      </div>
    </div>
  );
}
