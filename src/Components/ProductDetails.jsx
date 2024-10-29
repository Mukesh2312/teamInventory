import React from 'react';
import Details from './Details';
import {Link} from 'react-router-dom'

const ProductDetails = () => {
  const brands = [
    { logo: 'https://www.shutterstock.com/image-vector/hp-logo-vector-computer-brand-600nw-2373918093.jpg', name: 'HP', rating: 5, price: '000.00' },
    { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMaWh99FF_Adpx6RAXXH48EUb295u90hNxA&s', name: 'Acer', rating: 4, price: '000.00' },
    { logo: 'https://static.vecteezy.com/system/resources/previews/016/460/777/original/dell-company-logo-with-realistic-shadow-popular-computer-and-laptop-manufacturing-companies-logotype-free-png.png', name: 'Dell', rating: 5, price: '000.00' },
    { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyrdaFXA7ujZEe8FvUqKnbANKynIWCbhj4SA&s', name: 'Lenovo', rating: 4, price: '000.00' },
    { logo: 'https://www.shutterstock.com/image-vector/galati-romania-april-29-2023-260nw-2295394661.jpg', name: 'Apple', rating: 5, price: '000.00' },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Product Details Section */}
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex-shrink-0">
          <img
            className="w-48 h-48 object-cover rounded-lg"
            src=" https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product"
          />
  </div>
  <div className="ml-6 flex flex-col md:flex-row justify-between">
  <div className="md:mr-6">
    <h2 className="text-sm font-semibold">Product Name</h2> <br />
    <p className="text-sm  font-semibold text-gray-800">Brand Name</p> <br />
    <p className="text-sm font-bold text-gray-800">Price</p>
  </div>
  <div className="mt-4 md:mt-0">
    <h3 className="text-xl font-semibold ">Description</h3>
    <p className="text-gray-600 mb-4">
    Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.Dummy text is also known as filler text or placeholder text, and it has been used for a long time in the various fields of online publishing. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements. Dummy text is also known as filler text or placeholder text, and it has been used for a long time in the various fields of online publishing.
    </p>
    <Link to="/Details"><button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
    View Details
    </button></Link>
  </div>
</div>
 </div>
  {/* Brands Table Section */}
      <h2 className="text-2xl font-semibold mb-4">Product available in Brand</h2>
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full bg-white table-auto">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-gray-100 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Brand Logo</th>
              <th className="py-3 px-6 bg-gray-100 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Brand Name</th>
              <th className="py-3 px-6 bg-gray-100 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Ratings</th>
              <th className="py-3 px-6 bg-gray-100 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
              <th className="py-3 px-6 bg-gray-100 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">View Description</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-4 px-6 border-b text-left">
                  <img src={brand.logo} alt={brand.name} className="w-16 h-16" />
                </td>
                <td className="py-4 px-6 border-b text-left">{brand.name}</td>
                <td className="py-4 px-6 border-b text-left">
                  {'⭐'.repeat(brand.rating)}
                </td>
                <td className="py-4 px-6 border-b text-left">{brand.price}</td>
                <td className="py-4 px-6 border-b text-left">
                  <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-300">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Details/>
    </div>
  );
};

export default ProductDetails;
