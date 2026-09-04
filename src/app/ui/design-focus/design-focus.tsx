'use client';

import clsx from 'clsx';


const designs = [
  { title: 'Stucco & EIFS', src: '/stucco-example.jpg', details: 'For 30 years we have been working on our craft to build beufitul homes with our exterior upgrades. It all started with stucco and we continue to build upon the skillset everyday to keep creating beautiful looking buildings.', alt: 'image of house with stucco' },
  { title: 'Siding', src: '/siding-example.jpg', details: `Siding is a new trade we have gotten into. We aim to keep learning and keep doing the job well with our siding projects. `, alt: 'Photo by <a href="https://unsplash.com/@rstar50?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Roger Starnes Sr</a> on <a href="https://unsplash.com/photos/a-new-house-under-construction-with-a-dark-roof-lT2Hpiqgn3c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' },
  { title: 'Commercial', src: '/commercial-example.jpg', details: `Our company started with focusing on residential properties. We wanted to carry our trade into the commercial world as well.`, alt: 'commercial property example' },
  { title: 'Stone & Brick', src: '/stone-example.jpg', details: `We don't only deal with stucco projects. We also have experience working with brick and stone. Our goal is to meet our customers' needs and we try to please our customers with our multi exterior experience.`, alt: 'image of mister car wash with stone exeterior finish' }, 
  { title: 'Renovation and Repairs', src: '/renovation-example.jpg', details: `The majority of our works consists of new construction. However, we also prioritze customers who need repairs or renovations done. No project is too small for us to help you achieve the home exterior you've been dreaming of.`, alt: 'image of house being renovated with stucco exterior finish' }
];

export default function DesignFocus() {

  return (
    <>
      {designs.map((design) => {       
        return (
            <section key={design.title} className="text-center my-3">
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
