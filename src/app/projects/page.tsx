import { radley, carlito } from '@/app/ui/fonts';
import ProjectsComp from '@/app/ui/projects/projects-comp';

export default function Projects() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans"> {/* bg-zinc-50 dark:bg-black */}
            <div className="relative isolate px-6 pt-14 md:px-0 w-full md:h-full">
                <div className="mx-auto max-w-7xl py-5 py-12 md:py-6">
                    <h1 className={`text-5xl font-bold text-center mb-10 ${radley.className}`}>Project Gallery</h1>

                    <div className="grid sm:grid-cols-1 lg:grid-cols-3">
                        <ProjectsComp />
                    </div>
                </div>
            </div>
        </div>
    )
};