/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import fatu from '../images/fatu.png'


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
      text-gray-800 w-full flex
        items-center justify-center mt-20"
      >
        <div className="
          container flex flex-col justify-center p-6
          sm:py-16 lg:py-24 lg:px-14 lg:flex-row
          lg:justify-between py-12
          xl:ml-5 dark:bg-hero-bg "
        >
          <div className="
            flex flex-col justify-center
            text-center rounded-sm
            lg:max-w-md xl:max-w-lg lg:text-left"
          >
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Aberdeen
              {' '}
              <br />
              <span className="text-yellow-500"> Watta </span>
              Taxi
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              More than just a boat ride. Experience the fastest and most affordable water taxi service
              from Freetown to Lungi and beyond! Discover all our routes and services and book your
              tickets easy through our mobile application.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#"
                className="px-8 py-3 text-lg font-semibold rounded
                dark:bg-yellow-500 dark:text-gray-900
                transform hover:scale-110 transition-transform duration-300"
              >
                Get Mobile App
              </a>

            </div>
          </div>
          <div className="
            flex items-center justify-center p-6 mt-8
            lg:mt-0 h-5/6 sm:h-80 lg:h-96
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

