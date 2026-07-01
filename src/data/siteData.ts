export const CAR_BRANDS = [
  { name: 'TOYOTA', country: 'JAPAN' },
  { name: 'HONDA', country: 'JAPAN' },
  { name: 'MAZDA', country: 'JAPAN' },
  { name: 'MITSUBISHI', country: 'JAPAN' },
  { name: 'NISSAN', country: 'JAPAN' },
  { name: 'SUZUKI', country: 'JAPAN' },
  { name: 'ISUZU', country: 'JAPAN' },
  { name: 'BMW', country: 'GERMANY' },
  { name: 'CHANGAN', country: 'CHINA' },
  { name: 'GWM', country: 'CHINA' },
  { name: 'CHEVROLET', country: 'USA' },
  { name: 'FORD', country: 'USA' },
  { name: 'BYD', country: 'CHINA' },
]

export const AFTERMARKET_BRANDS = [
  { name: 'SUMO', color: '#DC1E2D' },
  { name: 'TYG', color: '#1A5276' },
  { name: 'TYC', color: '#C0392B' },
  { name: 'DEPO', color: '#2C3E50' },
  { name: 'DLAA', color: '#E67E22' },
  { name: 'DENSO', color: '#E74C3C' },
  { name: 'COOL GEAR', color: '#3498DB' },
]

export const MAIN_PRODUCTS = [
  {
    title: 'แผงรังผึ้งเเอร์',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=500&fit=crop',
  },
  {
    title: 'หม้อน้ำ',
    image: 'https://images.unsplash.com/photo-1619642751034-765df0367e84?w=400&h=500&fit=crop',
  },
  {
    title: 'อินเตอร์คูลเลอร์',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=500&fit=crop',
  },
]

// NOTE: สินค้า (SumoPage catalog) now loads from Supabase — see src/lib/supabase.ts

export const MAP_LOCATION = {
  lat: 13.7822936,
  lng: 100.4544734,
  address: '36 ซ. บรมราชชนนี 53 ตลิ่งชัน กรุงเทพฯ 10170',
  name: 'RKS Autopart',
}

export const CONTACT = {
  phones: ['02-621-1297', '02-621-1488'],
  line: '@rksautoparts',
  facebook: 'RKS autoparts',
  email: 'rksautopart@gmail.com',
}