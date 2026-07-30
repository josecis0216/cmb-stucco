// 'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { fetchProjects } from '@/app/lib/data';

export default async function ProjectsComp() {
  const projects = await fetchProjects();

  return (
    <>
      {projects.map((proj) => {       
        return (
            <section key={proj.id} className="text-center m-2">
                <img src={proj.src} alt={proj.alt_text} className="w-72 h-72 object-cover mx-auto"></img>
                <h3 className="text-xl font-bold mt-2">{proj.title}</h3>
                <hr className="my-6 border-t border-gray-300 mx-2" />
                <p className="text-base">{proj.img_desc}</p>
            </section>
        );
      })}
    </>
  );
}
