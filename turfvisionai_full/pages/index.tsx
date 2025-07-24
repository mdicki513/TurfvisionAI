
import Head from 'next/head';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

const MapWithDraw = dynamic(() => import('../components/Map'), { ssr: false });
const LeadForm = dynamic(() => import('../components/LeadForm'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>TurfVision AI</title>
      </Head>
      <div style={{ height: '70vh' }}>
        <MapWithDraw />
      </div>
      <div style={{ padding: '1rem' }}>
        <LeadForm />
      </div>
    </div>
  );
}
