import React from 'react';
import { PAPER_INFO } from '../constants';
import Card from '../components/Card';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center pt-8 pb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          <span className="block text-indigo-600 xl:inline">GeleNet</span>
          <span className="block xl:inline">: {PAPER_INFO.title}</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-slate-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {PAPER_INFO.authors}
        </p>
        <p className="mt-2 text-sm text-slate-400">{PAPER_INFO.publication}</p>
      </div>

      <Card>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Abstract</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          {PAPER_INFO.abstract}
        </p>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <Card>
           <h3 className="text-xl font-bold mb-2">Key Innovation</h3>
           <p className="text-slate-600">GeleNet introduces a novel 'global-to-local' paradigm, leveraging a Transformer backbone for capturing long-range dependencies and specialized modules for enhancing local and contextual details.</p>
        </Card>
        <div className="w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center">
            <img src="https://picsum.photos/seed/home/600/300" alt="Remote Sensing Imagery Example" className="w-full h-full object-cover rounded-xl"/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;