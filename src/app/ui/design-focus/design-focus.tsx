'use client';

import clsx from 'clsx';


const designs = [
  { title: 'We do stucco', src: '/logo-new.png', details: 'something about how they do stucco well' },
  { title: 'We do siding', src: '/logo-new.png', details: 'something about how they do siding well' },
  { title: 'We do something else', src: '/logo-new.png', details: 'something about how they do something else well' }
];

export default function DesignFocus() {

  return (
    <>
      {designs.map((design) => {       
        return (
            <section className="text-center">
                <img src={design.src} alt="image of design focus"></img>
                <h3 className="text-xl font-bold">{design.title}</h3>
                <hr className="my-6 border-t border-gray-300 mx-2" />
                <p className="text-base">{design.details}</p>
            </section>
        );
      })}
    </>
  );
}
