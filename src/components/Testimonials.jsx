import Container from "./Container";

const Testimonials = () => {
  return (
    <div className="w-full  py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-gray-200">
      <Container>
        <div className="">
        
        <h1 className="text-[#202124] text-4xl font-bold pb-10 ">What Our Learners Say</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Testimonial 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-md border transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
          <img
            src="https://i.ibb.co/fGCp8ztX/download.jpg"
            className="w-16 h-16 rounded-full mb-4 border-2 border-indigo-500 object-cover"
            alt="Jannatul"
          />
          <h3 className="text-xl font-semibold text-gray-800">Jannatul</h3>
          <p className="text-sm italic text-gray-500">Course: React for Beginners</p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            “This course changed my life! The explanations were super clear.”
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-md border transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
          <img
            src="https://i.ibb.co/27nqP65y/360-F-969342778-BCPc-WUTy-PG7-Rs-XUUPa-J2j-DNii-Czrty-Od.jpg"
            className="w-16 h-16 rounded-full mb-4 border-2 border-indigo-500 object-cover"
            alt="Rahim Uddin"
          />
          <h3 className="text-xl font-semibold text-gray-800">Rahim Uddin</h3>
          <p className="text-sm italic text-gray-500">Course: Fullstack Web Dev</p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            “Very practical and project-based! Loved the enrollment system.”
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-md border transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
          <img
            src="https://i.ibb.co/4W2DGKm/testimonial3.jpg"
            className="w-16 h-16 rounded-full mb-4 border-2 border-indigo-500 object-cover"
            alt="Meherun"
          />
          <h3 className="text-xl font-semibold text-gray-800">Meherun</h3>
          <p className="text-sm italic text-gray-500">Course: JavaScript Masterclass</p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            “Loved how interactive the platform was. Learned a lot in a short time!”
          </p>
        </div>
      </div>
      </div>
      </Container>
    </div>
  );
};

export default Testimonials;