import React from 'react';
import ebola from '../images/ebola.jpg'
import free_city from '../images/free_city.PNG'
import mayor_africa from '../images/mayor_africa.PNG'
import women_transport from '../images/womwn_transport.PNG'

const Publications = () => {
  // Dummy data for publications
  const publications = [
    {
      title: "Academic Publications",
      imageSrc: ebola,
      content: `Ethical and sociocultural challenges in managing dead bodies during epidemics and
                natural disasters (Directions - just reference "add link" to this publication, no need
                to copy and paste the journal content on the website)`,
      link: "https://gh.bmj.com/content/6/11/e006345"
    },

  ];

  // Dummy data for blogs
  const blogs = [
    {
      title: "Free City Services for Immigrant New Yorkers",
      imageSrc: free_city,
      content: `Through the Jeannette K. Watson fellowship, I had the privilege of interning at New York
                City – Mayor’s Office of Immigrant Affairs (MOIA). This experience exposed me to all the
                outstanding resources that MOIA has to offer Immigrant communities. As an immigrant New Yorker,`,
      link: "https://theimmigrantguide.wordpress.com/2018/08/16/free-city-services-for-immigrant-new-yorkers/"
    },
    {
      title: "NYC Mayor’s African Heritage Reception",
      imageSrc: mayor_africa,
      content: `Last Month, I had the incredible opportunity of attending NYC Mayor’s African Heritage Reception
                at Gracie Mansion. This event was organized to celebrate African heritage in New York City. We all
                know that NYC is one of the most diverse cities in the world,`,
      link: "https://theimmigrantguide.wordpress.com/2018/10/10/nyc-mayors-african-heritage-reception/"
    },
    {
      title: "Women – Transportation & Safety in Sierra Leone",
      imageSrc: women_transport,
      content: `My trip to Sierra Leone was a little over two weeks. I haven’t been in Sierra Leone in almost
                seven years. Therefore, I was very persistent in traveling within the country. I felt a heightened
                awareness of my gender whenever I used public transportation.`,
      link: "https://theimmigrantguide.wordpress.com/2022/01/19/women-transportation-safety-in-sierra-leone%ef%bf%bc/"
    }
  ];

  return (
    <>
        {/* Publications Section */}
      <section className="container mx-auto px-4 py-8 mt-14">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-semibold text-gray-800">Publications</h1>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {publications.map((publication, index) => (
              <div key={index} className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-semibold">{publication.title}</h2>
                <img
                  className="mt-4 rounded-lg"
                  src={publication.imageSrc}
                  alt={publication.title}
                />
                <p className="mt-2 text-gray-600">
                  {publication.content}
                </p>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </main>
      </section>

      {/* Blogs Section */}
      <section className="container mx-auto px-4 py-8">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-semibold text-gray-800">Blogs</h1>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <img
                  className="mt-4 rounded-lg"
                  src={blog.imageSrc}
                  alt={blog.title}
                />
                <p className="mt-2 text-gray-600">
                  {blog.content}
                </p>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </main>
      </section>
    </>
  );
};

export default Publications;
