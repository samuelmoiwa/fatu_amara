/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import fatu from "../images/fatu.png";
import fatu_about from "../images/fatu_about_me.png";
import AwardsCard from "../components/AwardsCard";
import Volunteering from "../components/Volunteering";
import partnership from "../images/partnership.json";
import insta from "../images/Instagram.png";
import linkedIn from "../images/linkedin.png";
import ContactUs from "../components/ContactUs";
import { Link, useLocation } from "react-router-dom";


import AOS from "aos";
import "aos/dist/aos.css";

function Popup({ header, description, onClose }) {
  return (
    <div
      className="top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50"
      style={{ zIndex: 9999, position: "fixed", }}
    >
      <div className="bg-white rounded p-8">
        <h2 className="text-xl font-semibold mb-4">{header}</h2>
        <p>{description}</p>
        <button
          className="mt-4 px-4 py-2 font-semibold rounded bg-purple text-white"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}


function Home() {
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sectionId = searchParams.get('section');

    if (sectionId) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.search]);

  // const about = '/?section=about';


  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({
    header: "",
    description: "",
  });

  const handleLinkClick = (header, description) => {
    setPopupContent({ header, description });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const readMore = "/readMore";

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: partnership,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 200,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <section
        className="
      text-gray-800 w-full flex dark:bg-hero-bg
        items-center justify-center" id="home"
      >
        <div
          className="
          container flex flex-col justify-center p-6
          sm:py-16 lg:py-24 lg:px-14 lg:flex-row
          lg:justify-between pb-12 pt-20
          xl:ml-5 dark:bg-hero-bg "
        >
          <div
            className="
            flex flex-col justify-center
            text-center rounded-sm
            lg:max-w-md xl:max-w-lg lg:text-left"
          >
            <p className="mb-2 text-lg sm:mb-2 font-roboto">Hay, I am Fatu</p>
            <h1 className="text-4xl font-bold leading-none sm:text-5xl text-purple-header">
              HEALTH AND <br />
              <span className="text-purple"> POLICY </span>
              PROFESSIONAL
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-purple-body">
              currently works as a Project Manager and has 2+ years of full-time
              experience working on city-wide initiatives that promote the
              wellbeing of New Yorkers{" "}
              <span className="text-blue-500">
                <Link to={readMore}>...Read Moreee</Link>
              </span>
            </p>
            <div
              className="flex flex-col space-y-4 sm:items-center sm:justify-center
                            sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
            >
              <a
                rel="get in touch"
                href="mailto:amarafatue@gmail.com"
                className="px-8 py-3 text-lg font-semibold rounded
                dark:bg-purple dark:text-white
                transform hover:scale-110 transition-transform duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div
            className="
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

      <section className="flex flex-col justify-center items-center w-full py-6 sm:px-2 bg-white">
        <h2
          className="text-2xl text-center font-bold leading-none sm:text-3xl
          text-purple-header my-6"
          data-aos="fade-right"
        >
          AWARDS & FELLOWSHIPS
        </h2>
        <AwardsCard />
      </section>

      <section class="bg-white border-b py-8" id="about">
        <div class="container max-w-5xl mx-auto m-8">
          <div className="text-center py-2 flex flex-col items-center justify-center">
            <p
              className="text-2xl font-bold leading-none sm:text-3xl
          text-purple-header my-6'"
            >
              About me
            </p>
            <div className="w-16 h-1 bg-purple mt-2" data-aos="fade-right">
              {" "}
            </div>
          </div>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div
            class="flex flex-wrap flex-col-reverse sm:flex-row"
            data-aos="fade-up"
          >
            <div class="w-full sm:w-1/2 p-6">
              <p class="text-gray-600 mb-8 text-justify">
                Fatu Amara graduated with honors and was awarded the American
                Chemical Society (ACS) Accredited BS in Chemistry from CUNY
                College of Staten Island (CSI).
                <br />
                <br />
                As President of the Student Government, she represented the
                14,000 student body as an Executive Board member to five college
                boards, managed the $400,000 budget, and developed the Student
                Government Internship Program.
                <br />
                <br />
                As a Watson Fellow, she worked on public health issues in the
                US, Rwanda, and the UK. Her work includes program management,
                qualitative and quantitative research analysis, literature
                reviews, and scientific journal writing on SARS, Ebola, and
                COVID-19 issues.
                <br />
                <br />
                She plans to work at the intersection of health and policy to
                lead large scale programs that ensure the well-being of
                vulnerable communities.
              </p>

              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a
                  rel="noopener noreferrer"
                  className="px-4 py-2 font-semibold rounded dark:bg-purple dark:text-white
                  transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                  onClick={() =>
                    handleLinkClick(
                      "The City University of New York, College of Staten Island (2016 – 2020)",
                      "Bachelor of Science in Chemistry, Minors – Psychology & Political Science Cum Laude, Honors in Chemistry"
                    )
                  }
                >
                  Education
                </a>

                <a
                  rel="noopener noreferrer"
                  className="px-4 py-2 font-semibold rounded dark:bg-purple dark:text-white transform
                  hover:scale-110 transition-transform duration-300 cursor-pointer"
                  onClick={() =>
                    handleLinkClick("New York City Economic Development Cooperation, New York (2022)",
                    <p> Provide project management on planning and implementation of the NYCEDC Childcare Innovation lab activities
                      <br />
                      Plan and coordinate events for the Childcare Innovation Lab industry round tables, government, and corporate dialogues.
                    </p>
                    )
                  }
                >
                  Project
                </a>

                <a
                  rel="noopener noreferrer"
                  className="px-4 py-2 font-semibold rounded dark:bg-purple dark:text-white transform
                  hover:scale-110 transition-transform duration-300 cursor-pointer"
                  onClick={() =>
                    handleLinkClick(
                      "Administration for Children’s Services, New York (2021-2022)",
                      <p>
                          Worked on an equity pilot for children in the NYC Foster Care system. Scaled the project to other Foster Care Agencies.
                          <br />
                          Communicated with all stakeholders and coordinated meetings for internal and external stakeholders.
                          <br />
                          <br />
                          <span className="font-bold">Community Health Action of Staten Island, New York (2020-2021)</span>
                          <br/>
                          <br/>
                          Recruited, trained, and supervised 80 new pre-health volunteers to support staff at the CHASI programs.
                          <br/>
                          Developed all volunteer policies and materials. Forged new partnerships to strengthen the CHASI volunteer network.
                          <br/>
                          Led a Public Health Field Research to identify DSP (Distant Support Program) families vulnerable for malaria.
                      </p>
                    )
                  }
                >
                  Coordinator
                </a>

                <a
                  rel="noopener noreferrer"
                  className="px-4 py-2 font-semibold rounded dark:bg-purple dark:text-white transform
                  hover:scale-110 transition-transform duration-300 cursor-pointer"
                  onClick={() =>
                    handleLinkClick(
                      "Los Angeles County Department of Public Health, Carlifornia (2021)",
                      <p>
                        Attended and scribed weekly focus group meetings between the department, health professionals, and frontline workers.
                        <br/>
                        Curated and managed the health department’s digital library for COVID-19 vaccine equity information.
                        <br/>
                        <br/>
                        <span className="font-bold">Public Health and Early Childhood Development Fellow, AVSI Foundation, Rwanda (2019)</span>
                        <br/>
                        <br/>
                        Supported with research to secure a grant to address mental health prevention in rural Rwanda.
                        <br/>
                        Created health education materials and worked closely with staff to translate and distribute materials to AVSI centers.
                        <br/>
                        <br/>
                        <span className="font-bold">University of Oxford, United Kingdom (2020-2021)</span>
                        <br/>
                        <br/>
                        Worked a research project aiming to strengthen research capacity in health crises and pandemics.
                        <br/>
                        Conducted literature reviews, research analysis, and scientific journal publication for the British Medical Journal.
                        <br/>
                        Co-developed a global health workshop with health professionals across seven countries and co-authored a
                        publication based on findings about mass deaths in crises like SARS, Ebola, and COVID-19.

                      </p>
                    )
                  }
                >
                  Researcher
                </a>
              </div>

              {showPopup && (
                <Popup
                  header={popupContent.header}
                  description={popupContent.description}
                  onClose={closePopup}
                />
              )}
            </div>
            <div class="w-full sm:w-1/2 p-6 sm:order-first">
              <img class="w-full rounded" src={fatu_about} alt="image" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col sm:justify-center justify-center sm:items-center items-center w-full py-6 sm:px-2 bg-gray-100">
        <h2
          className="text-2xl text-center font-bold leading-none sm:text-3xl
          text-purple-header my-6"
          data-aos="fade-right"
        >
          VOLUNTEERING
        </h2>
        <Volunteering />
      </section>

      <section class="bg-white border-b py-8" id="services">
        <div class="container max-w-5xl mx-auto m-8">
          <div class="flex flex-wrap flex-col sm:flex-row" data-aos="fade-up">
            <div class="w-full sm:w-1/2 p-6">
              <div class="text-gray-600 mb-8 text-justify">
                <h1 className="text-4xl font-bold leading-none sm:text-4xl text-purple-header">
                  READY <br />
                  <span className="text-purple"> FOR </span>
                  PARTNERSHIP?
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12 text-purple-body">
                  Email to partner on consulting projects or other partnerships
                  including speaking engagement, community projects, research
                  projects, etc.
                </p>
              </div>

              <div
                className="flex space-y-4 sm:items-center
                sm:flex-row sm:space-y-0
                sm:space-x-4 lg:justify-start md:items-center"
              >
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-4 py-2 flex justify-center
                  transform hover:scale-110 transition-transform duration-300"
                >
                  <img class="w-14 h-14" src={insta} alt="image" />
                </a>

                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-4 py-2 flex justify-center
                  transform hover:scale-110 transition-transform duration-300"
                >
                  <img class="w-14 h-14 " src={linkedIn} alt="image" />
                </a>
              </div>
            </div>

            <div class="w-full sm:w-1/2 p-6 sm:order-first">
              <Lottie options={animationOptions} height={350} width={350} />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center
      items-center w-full py-6 sm:px-2 bg-gray-100"
      id="contact"
      >
        <ContactUs />
      </section>

      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-20">
        <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
        <p className="text-gray-500 text-lg">
          To Fatu Amara profile site, currently under development
        </p>
      </div>
    </>
  );
}

export default Home;
