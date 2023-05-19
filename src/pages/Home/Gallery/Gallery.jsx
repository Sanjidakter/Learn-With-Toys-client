import React from 'react';

const Gallery = () => {
    const images = [
      'https://images.unsplash.com/photo-1681127727536-069dc4cdedad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      'https://media.istockphoto.com/id/669922196/photo/little-boy-playing-with-puzzle-education.jpg?s=2048x2048&w=is&k=20&c=xX8Toot7lGK0I1ldkKf0T1aagndGs8_HTgq4dHpt5tY=',
      'https://images.unsplash.com/photo-1545426373-6588267475be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
      'https://media.istockphoto.com/id/153011986/photo/tic-tac-toe.jpg?s=2048x2048&w=is&k=20&c=lqsZdwLhwJM5fAg7Imj9GsvP_mzPXHRdks2TMtpntuQ=',
      'https://images.unsplash.com/photo-1673732394408-75afb7ea7864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1558907353-ceb54f3882ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1777&q=80',
      
      // Add more image URLs as needed
    ];
  
    return (
    <div className='mt-6 text-5xl text-center '>
        <h2 className='mb-4'>Visit our shop to get more exciting toys!!!</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        {images.map((image, index) => (
          <div key={index} className="bg-gray-200">
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
    );
  };
  
  export default Gallery;