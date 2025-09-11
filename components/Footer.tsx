
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-slate-500">
        <p>&copy; 2023 GeleNet Project. All rights reserved.</p>
        <p className="text-sm mt-1">
          Based on the paper "Salient Object Detection in Optical Remote Sensing Images Driven by Transformer".
        </p>
      </div>
    </footer>
  );
};

export default Footer;
