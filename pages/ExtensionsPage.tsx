
import React from 'react';
import Card from '../components/Card';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
    {children}
  </div>
);

const FutureDirectionCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <Card className="text-center flex flex-col items-center border-t-4 border-indigo-500 h-full">
    <IconWrapper>{icon}</IconWrapper>
    <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
    <p className="text-slate-600">{children}</p>
  </Card>
);


const ExtensionsPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">Conclusion &amp; Future Directions</h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-slate-500">
          Summarizing GeleNet's impact and exploring the exciting possibilities its components unlock for computer vision.
        </p>
      </div>

      <Card>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-80 bg-slate-200 rounded-xl flex items-center justify-center">
             <img src="https://picsum.photos/seed/conclusion/600/400" alt="Technological innovation" className="w-full h-full object-cover rounded-xl"/>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Summary of Contributions</h2>
            <ul className="space-y-4 text-slate-600 text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <span><strong>Pioneering Approach:</strong> Established the first effective Transformer-driven baseline for ORSI-SOD.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <span><strong>Novel Paradigm:</strong> Successfully introduced a 'global-to-local' methodology for analyzing complex remote sensing scenes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <span><strong>Innovative Modules:</strong> Developed D-SWSAM and KTM, proving their power in enhancing local and contextual features.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <span><strong>State-of-the-Art Results:</strong> Outperformed existing methods on multiple public benchmarks, setting a new standard.</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
      
      <div className="pt-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">Future Research Directions</h2>
        <p className="text-lg text-slate-600 mb-10 text-center max-w-4xl mx-auto">
          A key insight is that the proposed D-SWSAM and SWSAM modules are highly versatile. Their effectiveness makes them suitable as general-purpose, <strong>plug-and-play components</strong> for a variety of related computer vision tasks.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FutureDirectionCard title="Semantic Segmentation" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>}>
              The modules can refine segmentation masks by emphasizing salient object features and improving boundary definition.
            </FutureDirectionCard>
            <FutureDirectionCard title="RGB-D/T Salient Detection" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}>
              Enhance saliency detection in multi-modal contexts (e.g., depth, thermal) by effectively fusing features from different sources.
            </FutureDirectionCard>
            <FutureDirectionCard title="Edge-Guided Detection" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z" /></svg>}>
              D-SWSAM's orientation-awareness is perfect for tasks requiring precise edge and boundary delineation.
            </FutureDirectionCard>
            <FutureDirectionCard title="Weakly Supervised Learning" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}>
              Provide stronger feature cues in tasks where detailed annotation data is scarce, improving model performance with less supervision.
            </FutureDirectionCard>
            <FutureDirectionCard title="Change Detection" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 12L3 8m4 8l4-8m4 8V4m0 12l4-8m-4 8l-4-8" /></svg>}>
              By accurately identifying objects in images taken at different times, the modules can form a powerful basis for change detection algorithms.
            </FutureDirectionCard>
             <FutureDirectionCard title="General Object Detection" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}>
              Integrate into standard detectors (like YOLO or Faster R-CNN) to improve feature maps and boost performance on small or complex objects.
            </FutureDirectionCard>
        </div>
      </div>
    </div>
  );
};

export default ExtensionsPage;
