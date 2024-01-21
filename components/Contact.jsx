// components/Contact.js
const Contact = () => {
    // Replace this with your real form handling logic
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your form handling logic here
    };
  
    return (
      <section className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm">Name</label>
            <input type="text" id="name" name="name" className="w-full border px-4 py-2 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm">Email</label>
            <input type="email" id="email" name="email" className="w-full border px-4 py-2 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600 text-sm">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full border px-4 py-2 rounded" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
        {/* Add your real social media icons and links here */}
        <div className="mt-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-4">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-4">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500">Twitter</a>
        </div>
      </section>
    );
  };
  
  export default Contact;
  