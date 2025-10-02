"use client"

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Use CDN-hosted marker images to avoid adding asset files
delete (L.Icon.Default as any).prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

export default function MapLeaflet({ lat = 40.7312, lon = -74.2319 }:{lat?:number, lon?:number}){
  useEffect(() => {
    // noop - ensures client-only rendering path
  }, [])

  return (
    <div className="rounded-lg overflow-hidden shadow border border-gray-200 mb-6">
      <MapContainer center={[lat, lon]} zoom={17} style={{ height: 480, width: '100%' }} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]}>
          <Popup>
            Oil R Us
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
