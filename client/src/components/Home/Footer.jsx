import React from 'react';
import { FaComments } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-6 px-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 text-sm sm:text-base text-center">
        <FaComments className="text-lg" />
        <span>
          💬 Need Help? Chat with our wellness consultants or reach out at{' '}
          <a
            href="mailto:wellness@nizcare.co"
            className="underline hover:text-white font-medium"
          >
            wellness@nizcare.co
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
