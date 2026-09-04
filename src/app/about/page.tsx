import { radley, carlito } from "../ui/fonts"
import DesignFocus from "@/app/ui/design-focus/design-focus";

export default function About() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans"> {/* bg-zinc-50 dark:bg-black */}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-5xl py-5 py-12 lg:py-6">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2">
                        <div className="text-left mx-auto">
                            <h1 className={`text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl ${radley.className}`}>
                                <em>About</em> Us
                            </h1>
                            <p className={`mt-8 mb-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 ${carlito.className}`}>
                                CMB Exteriors is a family owned, family run business. Francisco, the owner has been doing stucco and exterior projects for over 29 years as a way to give himself and his family better opportunities.
                                He is a well known mason in the construction industry in Utah. His crew has always consisted of him and his brothers who also have over 25 years of experience in exterior finishes. 
                            </p>
                        </div>

                        {/* <div className="sm:mb-2 sm:flex sm:justify-center">
                            <img src="/logo.PNG" alt="headshot of ceo"></img>
                        </div> */}
                    </div>

                    <div className="text-center mb-5">
                        <h2 className={`text-3xl sm:text-5xl font-bold ${radley.className}`}>Focus On Excellence</h2>
                    </div>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-3">
                        <DesignFocus />
                    </div>
                </div>
            </div>
        </div>
    );
}