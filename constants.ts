
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nebula Pro 16 Laptop',
    category: 'Laptops',
    price: 2499,
    description: 'High-performance workstation for creators and engineers.',
    image: 'https://picsum.photos/seed/laptop1/600/400',
    rating: 4.8,
    specs: { processor: 'M3 Pro', ram: '32GB', storage: '1TB SSD' },
    isNew: true
  },
  {
    id: '2',
    name: 'Titan X Phone',
    category: 'Phones',
    price: 1099,
    description: 'Flagship smartphone with an revolutionary camera system.',
    image: 'https://picsum.photos/seed/phone1/600/400',
    rating: 4.9,
    specs: { display: '6.7" OLED', battery: '5000mAh', camera: '200MP' }
  },
  {
    id: '3',
    name: 'SonicWave ANC Headphones',
    category: 'Audio',
    price: 349,
    description: 'Pure silence. Pure sound. Industry-leading noise cancellation.',
    image: 'https://picsum.photos/seed/audio1/600/400',
    rating: 4.7,
    specs: { battery: '40hrs', connectivity: 'BT 5.3', driver: '40mm' }
  },
  {
    id: '4',
    name: 'Apex G1 Gaming Mouse',
    category: 'Gaming',
    price: 129,
    description: 'Ultralight gaming mouse with 26k DPI sensor.',
    image: 'https://picsum.photos/seed/mouse1/600/400',
    rating: 4.6,
    specs: { weight: '58g', polling: '8000Hz', sensor: 'Optical' }
  },
  {
    id: '5',
    name: 'AeroTab S Tablet',
    category: 'Phones',
    price: 799,
    description: 'The ultimate canvas for your digital masterpieces.',
    image: 'https://picsum.photos/seed/tablet1/600/400',
    rating: 4.5,
    specs: { display: '12.4" AMOLED', storage: '256GB', stylus: 'Included' }
  },
  {
    id: '6',
    name: 'Zenith Smart Watch',
    category: 'Accessories',
    price: 399,
    description: 'Keep track of your health and stay connected 24/7.',
    image: 'https://picsum.photos/seed/watch1/600/400',
    rating: 4.4,
    specs: { sensors: 'ECG, SPO2', battery: '3 Days', water: '5ATM' },
    isNew: true
  },
  {
    id: '7',
    name: 'StreamCast Mic Pro',
    category: 'Audio',
    price: 199,
    description: 'Studio-quality audio for streamers and podcasters.',
    image: 'https://picsum.photos/seed/mic1/600/400',
    rating: 4.8,
    specs: { pattern: 'Cardioid', bitrate: '24-bit', port: 'USB-C' }
  },
  {
    id: '8',
    name: 'UltraWide Curved 34"',
    category: 'Gaming',
    price: 899,
    description: 'Immersive ultrawide display for work and play.',
    image: 'https://picsum.photos/seed/monitor1/600/400',
    rating: 4.7,
    specs: { resolution: '3440x1440', refresh: '175Hz', panel: 'QD-OLED' }
  }
];
