// components/Introduction.js
const Introduction = () => {
    return (
      <section className="container mx-auto mt-8">
        {/* Add your real content here */}
        <div className="text-center">
          <img src="your-profile-picture.jpg" alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Your Name</h1>
          <p className="text-gray-600">Web Developer</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4">View Projects</button>
        </div>
      </section>
    );
  };
  
  export default Introduction;
  