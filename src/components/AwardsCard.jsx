import React from 'react';
import medalIcon from '../images/medal.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cardData = [
  {
    id: 1,
    icon: medalIcon,
    heading: `New York City Urban Fellow Fellowship`,
    description: `1 of 25 recent graduates awarded the national nine-months fellowship to work on NYC city policy.`,
  },
  {
    id: 2,
    icon: medalIcon,
    heading: `Corporation for National Service AmeriCorps`,
    description: `Completed 1700 hours of community service to address public health at the height of COVID-19 pandemic.`,
  },
  {
    id: 3,
    icon: medalIcon,
    heading: `Jeannette K. Watson Fellow Fellowship`,
    description: `1 of 15 awarded a highly selective fellowship that funds internships in NYC and abroad.`,
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
      className="w-auto sm:w-96 h-64 max-w-md p-6 rounded-lg shadow-md bg-white
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

const AwardsCard = () => {
  return (
    <div className="flex flex-wrap -mx-4 w-full justify-center">
      {cardData.map((card) => (
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4" key={card.id}>
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

export default AwardsCard;
