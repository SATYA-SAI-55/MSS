
import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

const UsesPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <Header 
        title="Practical Applications" 
        subtitle="How GeleNet's technology translates to real-world impact across various critical domains." 
      />

      <Card>
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Why Salient Object Detection in ORSIs Matters</h2>
                <p className="text-slate-600 leading-relaxed">
                Optical Remote Sensing Images (ORSIs) provide a bird's-eye view of our planet, capturing vast amounts of data. Automatically identifying the most important objects—or 'salient' objects—within these complex scenes is crucial. This capability powers automated systems that can analyze geographical data faster and more accurately than humans, leading to breakthroughs in environmental monitoring, urban planning, disaster response, and defense. GeleNet provides the high-fidelity detection needed to make these applications reliable and effective.
                </p>
            </div>
            <div className="md:w-1/3 w-full h-48 md:h-full bg-slate-200 rounded-xl">
                 <img src="https://picsum.photos/seed/uses-main/400/300" alt="Earth Observation" className="w-full h-full object-cover rounded-xl"/>
            </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="border-t-4 border-green-500">
          <h3 className="text-xl font-bold mb-2">Environmental & Agricultural Monitoring</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li><strong>Precision Agriculture:</strong> Identifying specific crop areas for monitoring health and yield.</li>
            <li><strong>Deforestation Tracking:</strong> Automatically detecting areas of illegal logging or land clearing.</li>
            <li><strong>Water Resource Management:</strong> Mapping rivers, lakes, and reservoirs to monitor changes over time.</li>
            <li><strong>Wildlife Conservation:</strong> Locating and tracking animal habitats from satellite imagery.</li>
          </ul>
        </Card>
        <Card className="border-t-4 border-cyan-500">
          <h3 className="text-xl font-bold mb-2">Urban Planning & Infrastructure</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li><strong>Urban Sprawl Analysis:</strong> Monitoring the growth of cities and informal settlements.</li>
            <li><strong>Infrastructure Mapping:</strong> Automatically identifying roads, bridges, and buildings for GIS databases.</li>
            <li><strong>Resource Exploration:</strong> Locating potential sites for mining or renewable energy installations.</li>
          </ul>
        </Card>
        <Card className="border-t-4 border-red-500">
          <h3 className="text-xl font-bold mb-2">Disaster & Emergency Response</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li><strong>Damage Assessment:</strong> Rapidly identifying collapsed buildings or flooded areas after a disaster.</li>
            <li><strong>Search and Rescue:</strong> Locating stranded vehicles or signs of human activity in remote areas.</li>
            <li><strong>Wildfire Monitoring:</strong> Tracking the perimeter and spread of forest fires.</li>
          </ul>
        </Card>
        <Card className="border-t-4 border-gray-600 lg:col-span-3">
          <h3 className="text-xl font-bold mb-2">Maritime & Military Surveillance</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li><strong>Maritime Security:</strong> Detecting ships and vessels to combat illegal fishing and piracy.</li>
            <li><strong>Reconnaissance:</strong> Identifying aircraft, vehicles, and strategic structures in defense contexts.</li>
            <li><strong>Border Control:</strong> Monitoring activity along national borders to enhance security.</li>
          </ul>
        </Card>
      </div>

    </div>
  );
};

export default UsesPage;
