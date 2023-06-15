/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import Lottie from 'react-lottie'
import fatu from '../images/fatu.png'
import fatu_about from '../images/fatu_about_me.png'
import AwardsCard from '../components/AwardsCard';
import Volunteering from '../components/Volunteering';
import partnership from '../images/partnership.json'
import insta from '../images/Instagram.png'
import linkedIn from '../images/linkedin.png'
import ContactUs from '../components/ContactUs';


import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: partnership,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };


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
            <h1 className="text-4xl font-bold leading-none sm:text-5xl text-purple-header">
              HEALTH AND
              {' '}
              <br />
              <span className="text-purple"> POLICY </span>
              PROFESSIONAL
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-purple-body">
              currently works as a Project Manager and has 2+ years of full-time experience working on city-wide
              initiatives that promote the wellbeing of New Yorkers <span className='text-blue-500'> <a href='#'>...Read More </a> </span>
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

      <section className='flex flex-col justify-center items-center w-full py-6 sm:px-2 bg-white'>
        <h2 className='text-2xl text-center font-bold leading-none sm:text-3xl
          text-purple-header my-6'
          data-aos="fade-right"
        >
          AWARDS & FELLOWSHIPS
        </h2>
        < AwardsCard />
      </section>

      <section class="bg-white border-b py-8" id='about'>
        <div class="container max-w-5xl mx-auto m-8">
          <div className="text-center py-2 flex flex-col items-center justify-center">
            <p className="text-2xl font-bold leading-none sm:text-3xl
          text-purple-header my-6'">
              About me
            </p>
            <div className="w-16 h-1 bg-purple mt-2" data-aos="fade-right"> </div>
          </div>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div class="flex flex-wrap flex-col-reverse sm:flex-row" data-aos="fade-up">
            <div class="w-full sm:w-1/2 p-6">
              <p class="text-gray-600 mb-8 text-justify">
                Fatu Amara graduated with honors and was awarded the American Chemical Society (ACS)
                Accredited BS in Chemistry from CUNY College of Staten Island (CSI).
                <br />
                <br />
                As President of the Student Government, she represented the 14,000 student body as an Executive
                Board member to five college boards, managed the $400,000 budget, and developed the Student
                Government Internship Program.
                <br />
                <br />
                As a Watson Fellow, she worked on public health issues in the US, Rwanda, and the UK. Her work
                includes program management, qualitative and quantitative research analysis, literature reviews,
                and scientific journal writing on SARS, Ebola, and COVID-19 issues.
                <br />
                <br />
                She plans to work at the intersection of health and policy to lead large scale programs that
                ensure the well-being of vulnerable communities.
              </p>

              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a rel="noopener noreferrer" href="#"
                  className="px-4 py-2 font-semibold rounded
                  dark:bg-purple dark:text-white
                  transform hover:scale-110 transition-transform duration-300"
                >
                  Education
                </a>

                <a rel="noopener noreferrer" href="#"
                  className="px-4 py-2 font-semibold rounded
                  dark:bg-purple dark:text-white
                  transform hover:scale-110 transition-transform duration-300"
                >
                  Project
                </a>

                <a rel="noopener noreferrer" href="#"
                  className="px-4 py-2 font-semibold rounded
                  dark:bg-purple dark:text-white
                  transform hover:scale-110 transition-transform duration-300"
                >
                  Coordinator
                </a>

                <a rel="noopener noreferrer" href="#"
                  className="px-4 py-2 font-semibold rounded
                  dark:bg-purple dark:text-white
                  transform hover:scale-110 transition-transform duration-300"
                >
                  Researcher
                </a>

              </div>
            </div>
            <div class="w-full sm:w-1/2 p-6 sm:order-first">
              <img class="w-full rounded"
                src={fatu_about} alt="image"
              />
            </div>
          </div>

        </div>
      </section>

      <section className='flex flex-col sm:justify-center justify-center sm:items-center items-center w-full py-6 sm:px-2 bg-gray-100'>
        <h2 className='text-2xl text-center font-bold leading-none sm:text-3xl
          text-purple-header my-6'
          data-aos="fade-right"
        >
          VOLUNTEERING
        </h2>
        < Volunteering />
      </section>

      <section class="bg-white border-b py-8" id='about'>
        <div class="container max-w-5xl mx-auto m-8">

          <div class="flex flex-wrap flex-col sm:flex-row" data-aos="fade-up">
            <div class="w-full sm:w-1/2 p-6">
              <div class="text-gray-600 mb-8 text-justify">
                <h1 className="text-4xl font-bold leading-none sm:text-4xl text-purple-header">
                READY
                {' '}
                <br />
                <span className="text-purple"> FOR </span>
                PARTNERSHIP?
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12 text-purple-body">
                Email to partner on consulting projects or other partnerships including speaking engagement,
                community projects, research projects, etc.
              </p>
              </div>

              <div className="flex space-y-4 sm:items-center
                sm:flex-row sm:space-y-0
                sm:space-x-4 lg:justify-start md:items-center"
              >
                <a rel="noopener noreferrer" href="#"
                  className="px-4 py-2 flex justify-center
                  transform hover:scale-110 transition-transform duration-300"
                >
                  <img class="w-14 h-14"
                    src={insta} alt="image"
                  />
                </a>

                <a rel="noopener noreferrer" href="#"
                  className="px-4 py-2 flex justify-center
                  transform hover:scale-110 transition-transform duration-300"
                >
                  <img class="w-14 h-14 "
                    src={linkedIn} alt="image"
                  />
                </a>
              </div>
            </div>

            <div class="w-full sm:w-1/2 p-6 sm:order-first">
              <Lottie options={animationOptions} height={350} width={350} />
            </div>
          </div>

        </div>
      </section>

      <section className='flex flex-col justify-center items-center w-full py-6 sm:px-2 bg-gray-100'>
        < ContactUs />
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

