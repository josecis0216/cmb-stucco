import { radley, carlito } from '@/app/ui/fonts';
import ProjectsComp from '@/app/ui/projects/projects-comp';

export default function Projects() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans bg-[#f4f1e8]"> {/* bg-zinc-50 dark:bg-black */}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-5xl py-5 sm:py-8 lg:py-6">
                    <h1 className={`text-5xl font-bold text-center mb-10 ${radley.className}`}>Project Gallery</h1>

                    <div className="grid grid-cols-3">
                        <ProjectsComp />
                    </div>
                </div>
            </div>
        </div>
    )
};