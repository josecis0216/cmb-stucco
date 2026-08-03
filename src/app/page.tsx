import Image from "next/image";
import { radley, carlito } from '@/app/ui/fonts';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-[#f4f1e8]"> {/* bg-zinc-50 */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl py-5 sm:py-8 lg:py-6">
          <div className="sm:mb-2 sm:flex sm:justify-center lg:mx-16">
            <img src="/logo.PNG" alt="business logo image" className="lg:-mt-20 lg:w-md"></img>
          </div>
          <div className="text-center">
            <h1 className={`text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl ${radley.className}`}>
              CMB Exteriors LLC
            </h1>
            <p className={`mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 ${carlito.className}`}>
              Your expert in exterior customizable finishes. Experienced in commercial or residential.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <p className={`${radley.className}`}>EST. {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
