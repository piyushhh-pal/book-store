import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function Dashboard() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [adDetails, setAdDetails] = useState({
    title: '',
    description: '',
    price: '',
    category: 'electronics',
    images: []
  });

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleAdChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setAdDetails({ ...adDetails, images: Array.from(files).slice(0, 4) });
    } else {
      setAdDetails({ ...adDetails, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Details:', userDetails);
    console.log('Ad Details:', adDetails);
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">
      <div className="w-full max-w-7xl px-64"> {/* Increased padding here to px-64 */}
        <div className="bg-white w-full p-10 rounded-lg shadow-2xl">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Enter the Details!!</h1>
          <form className="space-y-10" onSubmit={handleSubmit}>
            {/* User Details Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">User Details</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={userDetails.name}
                    onChange={handleUserChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleUserChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={userDetails.phone}
                    onChange={handleUserChange}
                    required
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                  />
                </div>
              </div>
            </div>

            {/* Ad Details Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Book Details</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-600">Book Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={adDetails.title}
                    onChange={handleAdChange}
                    required
                    placeholder="Enter the book title"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={adDetails.description}
                    onChange={handleAdChange}
                    required
                    placeholder="Enter a description"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                  />
                </div>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-600">Price</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={adDetails.price}
                    onChange={handleAdChange}
                    required
                    placeholder="Enter the price"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-600">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={adDetails.category}
                    onChange={handleAdChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                  >
                    <option value="fiction">Fiction</option>
                    <option value="history">History</option>
                    <option value="non-fiction">Non-Fiction</option>
                    <option value="horror">Horror</option>
                    
                  </select>
                </div>
                <div>
                  <label htmlFor="images" className="block text-sm font-medium text-gray-600">Upload Images (Max 4)</label>
                  <input
                    type="file"
                    id="images"
                    name="images"
                    multiple
                    onChange={handleAdChange}
                    accept="image/*"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:ring focus:ring-purple-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;