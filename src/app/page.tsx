import Image from "next/image";
import Nav from "@/app/ui/nav";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black bg-[#f4f1e8]"> {/* bg-zinc-50 */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-5 sm:py-8 lg:py-6">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <Image
              className="dark:invert"
              src="/logo.png"
              alt="cmb logo"
              width={400}
              height={200}
              priority
            />
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              CMB Exteriors LLC
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Your expert in exterior customizable finishes. Experienced in commercial or residential.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Nav />
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <p className="">EST. {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div> */}
      </div>
    </div>
  );
}
