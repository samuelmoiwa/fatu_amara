import React from "react";
import fatu_about from '../images/fatu_about_me.png'

const HealthReadMore = () => {
  return (
    <>
      <section class="bg-white border-b py-8 mt-16" id="about">
        <div class="container max-w-5xl mx-auto m-8">
          <div className="text-center py-2 flex flex-col items-center justify-center">
            <p
              className="text-2xl font-bold leading-none sm:text-3xl
          text-purple-header my-6'"
            >
              HEALTH AND POLICY PROFESSIONAL
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
                  Fatu Amara is a Project Manager and has 2+ years
                  of full-time experience working on city-wide initiatives that promote
                  the wellbeing of New Yorkers. She has experience in management, coordination,
                  qualitative and quantitative data analysis.
                <br />
                <br />
                  As a Watson Fellow, she worked on public health issues in the US, Rwanda, and the UK.
                  Her work includes program management, qualitative and quantitative research analysis,
                  literature reviews, and scientific journal writing on SARS, Ebola, and COVID-19 issues.
                  She plans to work at the intersection of health and policy to lead large scale programs
                  that ensure the well-being of vulnerable communities.
                <br />
                <br />
                  She graduated with honors and was awarded the American Chemical Society (ACS) Accredited BS
                  in Chemistry from CUNY College of Staten Island (CSI). As President of the Student Government,
                  she represented the 14,000 student body as an Executive Board member to five college boards,
                  managed the $400,000 budget, and developed the Student Government Internship Program.
              </p>
            </div>
            <div class="w-full sm:w-1/2 p-6 sm:order-first">
              <img class="w-full rounded" src={fatu_about} alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthReadMore;
