const UpcomingEvents = () => {
  return (
    <div className="my-12 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Upcoming Webinars</h2>

      <div className="grid gap-6 md:grid-cols-3">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6
          transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          <h3 className="text-xl font-semibold text-indigo-700">Live Q&A: Career in Web Dev</h3>
          <p className="text-gray-600 mt-2">Ask anything about Web Dev careers</p>
          <p className="mt-3 text-sm text-gray-500">
            📅 <span className="font-medium">July 5, 2025</span> &nbsp;|&nbsp; 🕒 7 PM - 8 PM
          </p>
          <button className="mt-5 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
            Join Now
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6
          transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          <h3 className="text-xl font-semibold text-indigo-700">Workshop: Building a MERN Project</h3>
          <p className="text-gray-600 mt-2">From MongoDB to Deployment</p>
          <p className="mt-3 text-sm text-gray-500">
            📅 <span className="font-medium">July 12, 2025</span> &nbsp;|&nbsp; 🕒 6 PM - 9 PM
          </p>
          <button className="mt-5 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
            Join Now
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6
          transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          <h3 className="text-xl font-semibold text-indigo-700">Webinar: Advanced React Patterns</h3>
          <p className="text-gray-600 mt-2">Master component design and hooks</p>
          <p className="mt-3 text-sm text-gray-500">
            📅 <span className="font-medium">July 20, 2025</span> &nbsp;|&nbsp; 🕒 5 PM - 7 PM
          </p>
          <button className="mt-5 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
            Join Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default UpcomingEvents;
