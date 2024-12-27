import React from 'react';

export default function SendMail() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    // Here you'd implement your email sending logic
    // You'll need to set up an API route in Next.js to handle this
    console.log("Form submitted:", data);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-4 bg-gradient-to-r from-green-200 to-blue-200">
      <h2 className="text-8xl font-bold text-theme mb-8">...Or Send Me Mail 📬</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg font-mono">
        <div className="mb-3">
          <label htmlFor="name" className="block font-sans text-black mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full text-black p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block font-sans text-black mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full text-black p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="block font-sans text-black mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full text-black p-2 border border-gray-300 rounded-lg"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-theme transition-all duration-500 hover:scale-110"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
