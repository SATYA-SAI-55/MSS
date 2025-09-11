import React from 'react';
import { CpuIcon, EyeIcon, GridIcon, ImageIcon, LayersIcon, RightArrowIcon } from './Icons';

const DiagramNode: React.FC<{ icon: React.ReactNode; title: string; description: string; className?: string }> = ({ icon, title, description, className = '' }) => (
  <div className={`flex flex-col items-center text-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm w-full md:w-48 ${className}`}>
    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
      {icon}
    </div>
    <h3 className="mt-3 text-sm font-bold text-slate-800">{title}</h3>
    <p className="mt-1 text-xs text-slate-500">{description}</p>
  </div>
);

const Arrow: React.FC = () => (
  <div className="flex-shrink-0 w-full md:w-12 h-12 flex items-center justify-center text-slate-300 transform md:rotate-0 rotate-90">
    <RightArrowIcon />
  </div>
);

const Diagram: React.FC = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        
        {/* Step 1: Input */}
        <DiagramNode 
          icon={<ImageIcon />} 
          title="Input Image" 
          description="Optical Remote Sensing Image (ORSI)" 
        />
        <Arrow />

        {/* Step 2: Backbone */}
        <DiagramNode 
          icon={<GridIcon />} 
          title="PVT Backbone" 
          description="Generates 4 levels of global feature embeddings (F1-F4)." 
        />
        <Arrow />

        {/* Step 3: Parallel Modules */}
        <div className="flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg border border-sky-300 shadow-sm w-full md:w-56">
          <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-sky-100 text-sky-600">
            <CpuIcon />
          </div>
          <h3 className="mt-3 text-sm font-bold text-slate-800">Parallel Enhancement</h3>
          <div className="mt-2 space-y-2 w-full">
            <div className="p-2 bg-teal-50 rounded text-xs border border-teal-200"><strong>D-SWSAM</strong> (on F1)</div>
            <div className="p-2 bg-teal-50 rounded text-xs border border-teal-200"><strong>KTM</strong> (on F2, F3)</div>
            <div className="p-2 bg-teal-50 rounded text-xs border border-teal-200"><strong>SWSAM</strong> (on F4)</div>
          </div>
        </div>
        <Arrow />
        
        {/* Step 4: Decoder */}
        <DiagramNode 
          icon={<LayersIcon />} 
          title="Partial Decoder" 
          description="Aggregates enhanced multi-level features." 
        />
        <Arrow />

        {/* Step 5: Output */}
        <DiagramNode 
          icon={<EyeIcon />} 
          title="Saliency Map" 
          description="Final high-resolution prediction." 
          className="border-green-400 bg-green-50"
        />
      </div>
    </div>
  );
};

export default Diagram;
