
import Head from 'next/head';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

const MapWithDraw = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {
  return (
    <div style={{ padding: '0', margin: '0', height: '100vh', width: '100vw' }}>
      <Head>
        <title>TurfVision AI Map</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css"
        />
      </Head>
      <MapWithDraw />
    </div>
  );
}
