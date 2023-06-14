/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import fatu from '../images/fatu.png'
import AwardsCard from '../components/AwardsCard';


import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {


  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      offset: 200, // Distance from the element when triggering the animation (in pixels)
    });
    AOS.refresh(); // Refresh the animations
  }, []);


  return (
    <>

      <section className="
      text-gray-800 w-full flex dark:bg-hero-bg
        items-center justify-center"
      >
        <div className="
          container flex flex-col justify-center p-6
          sm:py-16 lg:py-24 lg:px-14 lg:flex-row
          lg:justify-between pb-12 pt-20
          xl:ml-5 dark:bg-hero-bg "
        >
          <div className="
            flex flex-col justify-center
            text-center rounded-sm
            lg:max-w-md xl:max-w-lg lg:text-left"
          >
            <p className="mb-2 text-lg sm:mb-2 font-roboto">
              Hay, I am Fatu
            </p>
            <h1 className="text-5xl font-bold leading-none sm:text-5xl text-purple-header">
              HEALTH AND
              {' '}
              <br />
              <span className="text-purple"> POLICY </span>
              PROFESSIONAL
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-purple-body">
              currently works as a Project Manager and has 2+ years of full-time experience working on city-wide
              initiatives that promote the wellbeing of New Yorkers.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#"
                className="px-8 py-3 text-lg font-semibold rounded
                dark:bg-purple dark:text-white
                transform hover:scale-110 transition-transform duration-300"
              >
                Get In Touch
              </a>

            </div>
          </div>
          <div className="
            flex items-center justify-center p-6 mt-8
            lg:mt-0 h-3/4 sm:h-80 lg:h-96
            xl:h-112 2xl:h-128"
          >
            <img
                  src={fatu}
                  alt="Service"
                  className="object-contain object-center h-full w-full rounded-t-3xl"
                />
          </div>
        </div>
      </section>

      <section className='flex flex-col justify-center w-full py-6 sm:px-2 bg-white'>
        <h2 className='text-2xl text-center font-bold leading-none sm:text-3xl
          text-purple-header my-6'
          data-aos="fade-right"
        >
          AWARDS & FELLOWSHIPS
        </h2>
        < AwardsCard />
      </section>

      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-20">
        <p className="text-3xl text-gray-700 font-bold mb-5">
          Welcome!
        </p>
        <p className="text-gray-500 text-lg">
          To Fatu Amara profile site, currently under development
        </p>
      </div>
    </>
  )
}

export default Home

