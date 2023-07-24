import React from 'react';

const Publications = () => {
  // Dummy data for publications
  const publications = [
    {
      title: "Publication 1",
      imageSrc: "https://placeimg.com/640/480/tech",
      content: "This is the content of Publication 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://www.external-site.com/publication1"
    },
    {
      title: "Publication 2",
      imageSrc: "https://placeimg.com/640/480/business",
      content: "This is the content of Publication 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://www.external-site.com/publication2"
    },
    {
      title: "Publication 3",
      imageSrc: "https://placeimg.com/640/480/abstract",
      content: "This is the content of Publication 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "https://www.external-site.com/publication3"
    }
  ];

  // Dummy data for blogs
  const blogs = [
    {
      title: "Blog 1",
      imageSrc: "https://placeimg.com/640/480/nature",
      content: "This is the content of Blog 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://www.external-site.com/blog1"
    },
    {
      title: "Blog 2",
      imageSrc: "https://placeimg.com/640/480/animals",
      content: "This is the content of Blog 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://www.external-site.com/blog2"
    },
    {
      title: "Blog 3",
      imageSrc: "https://placeimg.com/640/480/architecture",
      content: "This is the content of Blog 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "https://www.external-site.com/blog3"
    }
  ];

  return (
    <>
      {/* Publications Section */}
      <section className="container mx-auto px-4 py-8">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-semibold text-gray-800">Publications</h1>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  Like this on External Site
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  Like this on External Site
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
