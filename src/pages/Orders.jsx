import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import Title from '../components/Title';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className='border-t pt-16 px-4 md:px-8'>
      <div className='text-2xl mb-6'>
        <Title text1='My' text2='Orders' />
      </div>
      
      <div className='space-y-4'>
        {products && products.length > 0 ? (
          products.slice(1, 4).map((item, index) => (
            <div 
              key={index} 
              className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
            >
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20 object-cover' src={item.image[0]} alt={item.name} />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p>{currency}{item.price}</p>
                    {item.size && <p>Size: {item.size}</p>}
                    {item.quantity && <p>Qty: {item.quantity}</p>}
                  </div>
                </div>
              </div>
              <div className='flex gap-3'>
                <button 
                  className='text-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'
                >
                  View Details
                </button>
                <button 
                  className='text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md'
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500'>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
