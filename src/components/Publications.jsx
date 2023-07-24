import React from 'react'

const Publications = () => {
  return (
    <>
         <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-semibold text-gray-800">Publication Title</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Replace the following with your publication content */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold">Article 1</h2>
            <img
              className="mt-4 rounded-lg"
              src="https://placeimg.com/640/480/any"
              alt="Article 1"
            />
            <p className="mt-2 text-gray-600">
              This is the content of Article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a
              href="https://www.external-site.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              Like this on External Site
            </a>
          </div>

          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold">Article 2</h2>
            <img
              className="mt-4 rounded-lg"
              src="https://placeimg.com/640/480/any"
              alt="Article 2"
            />
            <p className="mt-2 text-gray-600">
              This is the content of Article 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="https://www.external-site.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              Like this on External Site
            </a>
          </div>

          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold">Article 3</h2>
            <img
              className="mt-4 rounded-lg"
              src="https://placeimg.com/640/480/any"
              alt="Article 3"
            />
            <p className="mt-2 text-gray-600">
              This is the content of Article 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a
              href="https://www.external-site.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              Like this on External Site
            </a>
          </div>
          {/* End of publication content */}
        </div>
      </main>

    </>
  )
}

export default Publications
