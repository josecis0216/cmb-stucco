'use client';

import clsx from 'clsx';


const designs = [
  { title: 'We do stucco', src: '/stucco-example.jpg', details: 'something about how they do stucco well', alt: 'image of house with stucco' },
  { title: 'We do siding', src: '/siding-example.jpg', details: 'something about how they do siding well', alt: 'Photo by <a href="https://unsplash.com/@rstar50?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Roger Starnes Sr</a> on <a href="https://unsplash.com/photos/a-new-house-under-construction-with-a-dark-roof-lT2Hpiqgn3c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' },
  { title: 'We do commercial', src: '/construction-example.jpg', details: 'something about how they do commercial buildings as well', alt: 'Photo by <a href="https://unsplash.com/@troyscanon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Troy Mortier</a> on <a href="https://unsplash.com/photos/several-houses-under-construction-with-wooden-frames-AmGQi4pF_lE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' }
];

export default function DesignFocus() {

  return (
    <>
      {designs.map((design) => {       
        return (
            <section key={design.title} className="text-center">
                <img src={design.src} alt={design.alt} className="w-72 h-72 rounded-t-full object-cover mx-auto"></img>
                <h3 className="text-xl font-bold mt-2">{design.title}</h3>
                <hr className="my-6 border-t border-gray-300 mx-2" />
                <p className="text-base">{design.details}</p>
            </section>
        );
      })}
    </>
  );
}
