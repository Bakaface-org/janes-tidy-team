import React, { useEffect } from 'react';

const Book = () => {
  useEffect(() => {
    // Create and append the script element
    const script = document.createElement('script');
    script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
    script.setAttribute('clienthub_id', 'cfb8885f-4a68-4736-a19e-f391989be14a');
    script.setAttribute('form_url', 'https://clienthub.getjobber.com/booking/cfb8885f-4a68-4736-a19e-f391989be14a');
    document.body.appendChild(script);

    // Create and append the stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';
    link.media = 'screen';
    document.head.appendChild(link);

    // Cleanup function to remove the script and stylesheet when component unmounts
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">Book a Consultation</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-center text-gray-600 mb-8">
            Ready to transform your space? Schedule a consultation with us today!
          </p>
          <div id="cfb8885f-4a68-4736-a19e-f391989be14a"></div>
        </div>
      </div>
    </div>
  );
}

export default Book;