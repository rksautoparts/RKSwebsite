import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps'
import { MAP_LOCATION } from '../data/siteData'
import './GoogleMap.css'

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''

export default function GoogleMap() {
  if (!API_KEY) {
    return (
      <div className="google-map google-map--fallback">
        <iframe
          title="RKS Autopart Location"
          src={`https://maps.google.com/maps?q=${MAP_LOCATION.lat},${MAP_LOCATION.lng}&z=16&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="google-map__fallback-note">
          <p>ตั้งค่า VITE_GOOGLE_MAPS_API_KEY ใน .env เพื่อใช้แผนที่แบบลากได้</p>
          <a
            href="https://maps.app.goo.gl/Jm58oFAShNQG67Ut7?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
          >
            เปิดใน Google Maps
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="google-map">
      <APIProvider apiKey={API_KEY}>
        <Map
          defaultCenter={{ lat: MAP_LOCATION.lat, lng: MAP_LOCATION.lng }}
          defaultZoom={16}
          gestureHandling="greedy"
          disableDefaultUI={false}
          mapId="rks-autopart-map"
          className="google-map__canvas"
        >
          <AdvancedMarker
            position={{ lat: MAP_LOCATION.lat, lng: MAP_LOCATION.lng }}
            title={MAP_LOCATION.name}
          />
        </Map>
      </APIProvider>
    </div>
  )
}
