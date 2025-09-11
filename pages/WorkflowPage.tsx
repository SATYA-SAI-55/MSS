import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Diagram from '../components/Diagram';

const ArchitectureCard: React.FC<{
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}> = ({ step, title, description, icon, className }) => (
  <Card className={`relative overflow-hidden ${className}`}>
    <div className="absolute top-4 right-4 text-6xl font-bold text-slate-100 z-0">{step}</div>
    <div className="relative z-10">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
          {icon}
        </div>
        <h3 className="ml-4 text-xl font-bold text-slate-800">{title}</h3>
      </div>
      <p className="text-slate-600">{description}</p>
    </div>
  </Card>
);


const WorkflowPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <Header title="GeleNet Architecture" subtitle="A deep dive into the 'global-to-local' pipeline that powers GeleNet's state-of-the-art performance." />

      <Card>
        <h2 className="text-2xl font-bold mb-4 text-center">Architectural Diagram</h2>
        <Diagram />
      </Card>
      
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-900">Core Architectural Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <ArchitectureCard
            step="01"
            title="Global Feature Extraction"
            description="The process starts with a Pyramid Vision Transformer (PVT) backbone. Unlike CNNs, it processes the entire image to generate four levels of feature embeddings, establishing global long-range dependencies from the very beginning."
            icon={<svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            className="border-t-4 border-indigo-500"
          />

          <ArchitectureCard
            step="02"
            title="Local & Contextual Enhancement"
            description="The core innovation lies in parallel modules that refine the global features. This is where the 'local exploration' happens, targeting specific levels of features for specialized tasks."
            icon={<svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
            className="border-t-4 border-sky-500"
          />

          <Card className="md:col-span-2 bg-slate-50 p-6 space-y-6">
            <h3 className="text-xl font-bold text-center text-slate-800">Specialized Enhancement Modules</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-4 bg-white rounded-lg border">
                    <h4 className="font-bold text-teal-600">D-SWSAM (Low-Level Features)</h4>
                    <p className="text-sm text-slate-600 mt-1">The <strong>Direction-aware</strong> module uses directional convolutions on the finest features (F1) to perceive object orientation and enhance detailed structures.</p>
                </div>
                 <div className="p-4 bg-white rounded-lg border">
                    <h4 className="font-bold text-teal-600">KTM (Mid-Level Features)</h4>
                    <p className="text-sm text-slate-600 mt-1">The <strong>Knowledge Transfer Module</strong> models correlations between mid-level features (F2, F3) to ensure contextual information is shared, preventing missed detections of smaller objects.</p>
                </div>
                 <div className="p-4 bg-white rounded-lg border">
                    <h4 className="font-bold text-teal-600">SWSAM (High-Level Features)</h4>
                    <p className="text-sm text-slate-600 mt-1">A simplified <strong>Shuffle Weighted Spatial Attention</strong> module refines the coarsest features (F4) to precisely locate the main salient objects in the scene.</p>
                </div>
            </div>
          </Card>
          
          <ArchitectureCard
            step="03"
            title="Saliency Map Prediction"
            description="Finally, a lightweight but effective partial decoder aggregates the enhanced, multi-level features from the PVT and the specialized modules (D-SWSAM, KTM, SWSAM) to generate the final high-resolution saliency map."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>}
            className="md:col-span-2 border-t-4 border-emerald-500"
          />

        </div>
      </div>
    </div>
  );
};

export default WorkflowPage;