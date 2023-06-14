import React from 'react';
import medalIcon from '../images/volunteer.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cardData = [
  {
    id: 1,
    icon: medalIcon,
    heading: `St Paul’s School of Nursing`,
    description: `Raised donations and led workshops at an affiliate college in Sierra Leone (01/2021 – Present)`,
  },
  {
    id: 2,
    icon: medalIcon,
    heading: `Leukemia and Lymphoma Society`,
    description: `Led a cancer fundraising tournament at the College of Staten Island(08/2019 – 01/2020)`,
  },
  {
    id: 3,
    icon: medalIcon,
    heading: `Snug Harbor Cultural Center`,
    description: `Taught science classes to NYC high school students(08/2017 – 04/2018)`,
  },
  {
    id: 4,
    icon: medalIcon,
    heading: `College of Staten Island High School Science Fair`,
    description: `Mentor students and guide scientific lab tours(08/2016 – 05/2020)`,
  },
  // Add more card data as needed
];

const Card = ({ icon, heading, description }) => {
  // Initialize AOS library
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="w-72 sm:w-72 h-64 max-w-md p-6 rounded-lg shadow-md bg-white
      border-b-4 hover:border-purple
      cursor-pointer transition duration-300 ease-in-out"
      data-aos="fade-up"
    >
      <div className="flex items-center mb-4">
        <div className="mr-3">
          <img className="w-10 h-10" src={icon} alt="Icon" />
        </div>
      </div>
      <h2 className="text-lg font-semibold">{heading}</h2>
      <br />
      <p className="text-gray-700 mb-4">{description}</p>
    </div>
  );
};

const Volunteering = () => {
  return (
    <div className="flex flex-wrap -mx-4 sm:w-9/12 justify-center items-center">
      {cardData.map((card) => (
        <div className="w-4/5 sm:w-3/4 lg:w-1/3 xl:w-1/4 p-4" key={card.id}>
          <Card
            icon={card.icon}
            heading={card.heading}
            description={card.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Volunteering;
