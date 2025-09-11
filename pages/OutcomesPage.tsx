
import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { OUTCOMES_DATA } from '../constants';

const OutcomesPage: React.FC = () => {
  const { table1 } = OUTCOMES_DATA;
  return (
    <div className="space-y-8">
      <Header title="Experimental Outcomes" subtitle="Quantitative and qualitative results demonstrating GeleNet's state-of-the-art performance." />

      <Card>
        <h2 className="text-2xl font-bold mb-4">Datasets Used for Evaluation</h2>
        <p className="text-slate-600 mb-6">
          To ensure a fair and comprehensive evaluation, GeleNet was benchmarked against other methods on two publicly available and widely used datasets for Salient Object Detection in Optical Remote Sensing Images (ORSI-SOD).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img src="https://picsum.photos/seed/eorssd/500/300" alt="EORSSD Dataset Example" className="rounded-lg shadow-md w-full h-auto object-cover"/>
            <div>
              <h3 className="text-xl font-bold text-slate-800">EORSSD Dataset</h3>
              <p className="text-slate-600 mt-2">
                The Extended Optical Remote Sensing Saliency Detection (EORSSD) dataset features a wide variety of scenes with significant challenges, including objects of varying scales, complex backgrounds, and inconsistent lighting. It is designed to test a model's robustness and its ability to generalize across different environments.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <img src="https://picsum.photos/seed/orssd/500/300" alt="ORSSD Dataset Example" className="rounded-lg shadow-md w-full h-auto object-cover"/>
            <div>
              <h3 className="text-xl font-bold text-slate-800">ORSSD Dataset</h3>
              <p className="text-slate-600 mt-2">
                The Optical Remote Sensing Saliency Detection (ORSSD) dataset is another standard benchmark. It contains images with clear salient objects such as airplanes, ships, and buildings. This dataset is crucial for evaluating a model's fundamental ability to accurately locate and segment well-defined objects from their surroundings.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-2xl font-bold mb-4">Accuracy & Performance Metrics</h2>
        <p className="text-slate-600 mb-6">
          GeleNet's performance was rigorously evaluated against other state-of-the-art methods using standard industry metrics. The goal is to measure how accurately the model can identify and segment salient objects compared to human-annotated ground truth maps.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-100 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800">S-measure (Sa ↑)</h3>
            <p className="text-sm text-slate-600">Evaluates structural similarity, assessing both region-aware and object-aware accuracy. Higher is better.</p>
          </div>
          <div className="bg-slate-100 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800">Max F-measure (Fmax ↑)</h3>
            <p className="text-sm text-slate-600">The best F-score (a balance of precision and recall) across various thresholds. A measure of overall performance. Higher is better.</p>
          </div>
          <div className="bg-slate-100 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800">Max E-measure (Emax ↑)</h3>
            <p className="text-sm text-slate-600">Captures both image-level statistics and local pixel details for a comprehensive evaluation. Higher is better.</p>
          </div>
          <div className="bg-slate-100 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800">Mean Absolute Error (M ↓)</h3>
            <p className="text-sm text-slate-600">The average pixel-wise difference between the prediction and ground truth. Lower is better.</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2">Quantitative Comparison Table</h3>
        <p className="text-slate-600 mb-4">{table1.caption}</p>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                {table1.headers.map(header => (
                  <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {table1.rows.map((row) => (
                <tr key={row.method} className={row.highlight ? 'bg-indigo-100' : 'hover:bg-slate-50'}>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${row.highlight ? 'text-indigo-900' : 'text-slate-900'}`}>{row.method}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{row.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{(row.sa * 100).toFixed(2)}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{(row.fmax * 100).toFixed(2)}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{(row.emax * 100).toFixed(2)}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{row.m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <div className="flex">
                <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="ml-3">
                    <p className="text-sm text-green-700">
                    <strong>Key Takeaway:</strong> The results clearly show that the Transformer-based <strong className="font-semibold">GeleNet (Ours-PVT)</strong> model achieves superior performance, establishing a new state-of-the-art benchmark by outperforming all other methods across all key accuracy metrics.
                    </p>
                </div>
            </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-2xl font-bold mb-4">Visual Comparison</h2>
        <p className="text-slate-600 mb-6">
          Visual results highlight GeleNet's ability to handle challenging scenes, such as objects with various orientations, multiple objects, and fine structures. Our method consistently produces more accurate and complete saliency maps compared to other state-of-the-art methods.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
                <img src="https://picsum.photos/seed/img1/300/300" alt="Original Image 1" className="rounded-lg shadow-md w-full h-auto object-cover"/>
                <p className="text-center text-sm font-semibold">Input ORSI</p>
            </div>
            <div className="space-y-2">
                <img src="https://picsum.photos/seed/gt1/300/300?grayscale" alt="Ground Truth 1" className="rounded-lg shadow-md w-full h-auto object-cover"/>
                <p className="text-center text-sm font-semibold">Ground Truth</p>
            </div>
            <div className="space-y-2">
                <img src="https://picsum.photos/seed/other1/300/300?grayscale" alt="Other Method 1" className="rounded-lg shadow-md w-full h-auto object-cover"/>
                <p className="text-center text-sm font-semibold">Other Methods</p>
            </div>
            <div className="space-y-2">
                <img src="https://picsum.photos/seed/gelenet1/300/300?grayscale" alt="GeleNet Result 1" className="rounded-lg shadow-md w-full h-auto object-cover border-4 border-indigo-500"/>
                <p className="text-center text-sm font-bold text-indigo-600">GeleNet (Ours)</p>
            </div>
        </div>
      </Card>
    </div>
  );
};

export default OutcomesPage;
