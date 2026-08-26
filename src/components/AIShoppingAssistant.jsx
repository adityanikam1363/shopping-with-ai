import React, { useState } from 'react';
import { Bot, User, Star, Plus, Check, Sparkles, AlertCircle, PackageX, Tag, Trophy } from 'lucide-react';

export default function AIShoppingAssistant({ onAddToCart, addedItems }) {
  const [activeQuery, setActiveQuery] = useState("I need a smartwatch for fitness under ₹5,000.");
  const [customInput, setCustomInput] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [appliedVouchers, setAppliedVouchers] = useState({});

  const categoryChips = [
    { label: '🏆 Best Products', query: 'Show me the best top rated products' },
    { label: '📱 5G Phones (Cover/Charger Bundle)', query: 'Looking for 5G smartphones' },
    { label: '💻 Laptops (Stand/Sleeve Bundle)', query: 'Do you have laptops?' },
    { label: '🏋️ Gym Gear (Gloves/Shaker Bundle)', query: 'Show me gym workout gear' },
    { label: '👟 Shoes (Socks Bundle)', query: 'Show me running shoes' },
    { label: '⌚ Smartwatches', query: 'Show me smartwatches' },
    { label: '🎧 Earbuds', query: 'Workout earbuds' },
  ];

  const fullCatalog = [
    // 🏋️ GYM ITEMS (5)
    {
      id: 'prod-gym-1',
      name: 'FlexGym Adjustable Dumbbells Set',
      keywords: ['gym', 'dumbbells', 'weights', 'workout', 'fitness', 'home gym', 'exercise'],
      priceNum: 2999,
      price: '₹2,999',
      originalPrice: '₹4,500',
      rating: 4.9,
      reviews: 430,
      match: '96% AI Match',
      desc: 'Quick-adjust steel dumbbells 2.5kg-24kg with non-slip grip.',
      imageUrl: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=80',
      badge: 'Home Gym Essential',
    },
    {
      id: 'prod-gym-2',
      name: 'ProGrip Resistance Bands Set',
      keywords: ['gym', 'bands', 'resistance', 'workout', 'fitness', 'exercise'],
      priceNum: 1299,
      price: '₹1,299',
      originalPrice: '₹1,999',
      rating: 4.7,
      reviews: 310,
      match: '91% AI Match',
      desc: '5 level heavy-duty latex bands with door anchor & handles.',
      imageUrl: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&auto=format&fit=crop&q=80',
      badge: 'Portable Gym',
    },
    {
      id: 'prod-gym-3',
      name: 'HeavyDuty Power Kettlebell 16kg',
      keywords: ['gym', 'kettlebell', 'weights', 'workout', 'crossfit', 'fitness'],
      priceNum: 1999,
      price: '₹1,999',
      originalPrice: '₹2,799',
      rating: 4.8,
      reviews: 215,
      match: '93% AI Match',
      desc: 'Solid cast iron kettlebell for explosive strength training.',
      imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=80',
      badge: 'Cast Iron',
    },
    {
      id: 'prod-gym-4',
      name: 'UltraCushion Non-Slip Yoga Mat',
      keywords: ['gym', 'mat', 'yoga', 'workout', 'fitness', 'stretching'],
      priceNum: 899,
      price: '₹899',
      originalPrice: '₹1,499',
      rating: 4.8,
      reviews: 580,
      match: '89% AI Match',
      desc: '6mm extra thick eco-friendly TPE mat with alignment lines.',
      imageUrl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&auto=format&fit=crop&q=80',
      badge: 'Eco Friendly',
    },
    {
      id: 'prod-gym-5',
      name: 'SpeedRope Pro Jump Rope',
      keywords: ['gym', 'rope', 'jump', 'cardio', 'workout', 'fitness', 'skipping'],
      priceNum: 599,
      price: '₹599',
      originalPrice: '₹999',
      rating: 4.9,
      reviews: 640,
      match: '94% AI Match',
      desc: 'High speed ball-bearing steel wire rope for fast cardio burn.',
      imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80',
      badge: 'High Speed',
    },

    // 💻 LAPTOPS (5)
    {
      id: 'prod-laptop-1',
      name: 'ProBook M1 AI Laptop',
      keywords: ['laptop', 'laptops', 'computer', 'notebook', 'macbook', 'pc', 'probook'],
      priceNum: 48999,
      price: '₹48,999',
      originalPrice: '₹59,999',
      rating: 4.8,
      reviews: 620,
      match: '93% AI Match',
      desc: '14" Retina display, NPU AI Engine, 16GB RAM, 512GB SSD.',
      imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80',
      badge: 'Core AI Edition',
    },
    {
      id: 'prod-laptop-2',
      name: 'Zenith SlimBook 14 Ultra',
      keywords: ['laptop', 'laptops', 'notebook', 'ultrabook', 'computer'],
      priceNum: 34999,
      price: '₹34,999',
      originalPrice: '₹42,999',
      rating: 4.7,
      reviews: 340,
      match: '90% AI Match',
      desc: 'Intel i5 12th Gen, 8GB RAM, 512GB NVMe SSD, lightweight 1.2kg.',
      imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80',
      badge: 'Ultra Slim',
    },
    {
      id: 'prod-laptop-3',
      name: 'Apex Gaming Rig G15',
      keywords: ['laptop', 'laptops', 'gaming', 'computer', 'rtx', 'pc'],
      priceNum: 68999,
      price: '₹68,999',
      originalPrice: '₹84,999',
      rating: 4.9,
      reviews: 810,
      match: '97% AI Match',
      desc: 'Ryzen 7 7800H, RTX 4060 GPU, 165Hz Display, 1TB SSD.',
      imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=80',
      badge: 'RTX 4060 Gaming',
    },
    {
      id: 'prod-laptop-4',
      name: 'FlexBook 360 Convertible',
      keywords: ['laptop', 'laptops', 'touchscreen', '2in1', 'convertible'],
      priceNum: 42999,
      price: '₹42,999',
      originalPrice: '₹51,999',
      rating: 4.6,
      reviews: 290,
      match: '88% AI Match',
      desc: '13.3" FHD Touchscreen, 360 degree hinge, Stylus Pen included.',
      imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80',
      badge: 'Touch 360°',
    },
    {
      id: 'prod-laptop-5',
      name: 'LiteBook Student Edition',
      keywords: ['laptop', 'laptops', 'student', 'budget', 'computer'],
      priceNum: 24999,
      price: '₹24,999',
      originalPrice: '₹29,999',
      rating: 4.5,
      reviews: 420,
      match: '86% AI Match',
      desc: '15.6" FHD display, Celeron N5100, 8GB RAM, 256GB SSD.',
      imageUrl: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=80',
      badge: 'Budget Choice',
    },

    // 📱 PHONES (5)
    {
      id: 'prod-phone-1',
      name: 'Apex 5G Ultra Smartphone',
      keywords: ['phone', 'phones', 'smartphone', 'mobile', 'android', '5g'],
      priceNum: 21999,
      price: '₹21,999',
      originalPrice: '₹26,999',
      rating: 4.9,
      reviews: 780,
      match: '95% AI Match',
      desc: '6.7" 120Hz AMOLED, 108MP AI Camera, 5000mAh & 67W fast charge.',
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80',
      badge: '5G Flagship',
    },
    {
      id: 'prod-phone-2',
      name: 'PixelPro 5G Speed',
      keywords: ['phone', 'phones', 'smartphone', 'mobile', '5g', 'camera'],
      priceNum: 32999,
      price: '₹32,999',
      originalPrice: '₹39,999',
      rating: 4.8,
      reviews: 540,
      match: '92% AI Match',
      desc: 'Snapdragon 8 Gen 2, 50MP Sony OIS Camera, IP68 Waterproof.',
      imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80',
      badge: 'OIS Camera',
    },
    {
      id: 'prod-phone-3',
      name: 'Nova Lite 5G Smartphone',
      keywords: ['phone', 'phones', 'smartphone', 'mobile', 'budget 5g'],
      priceNum: 14999,
      price: '₹14,999',
      originalPrice: '₹18,999',
      rating: 4.6,
      reviews: 620,
      match: '89% AI Match',
      desc: '6.5" 90Hz Display, Dimensity 6020 5G, 50MP Dual Cam, 5000mAh.',
      imageUrl: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&auto=format&fit=crop&q=80',
      badge: 'Best Value 5G',
    },
    {
      id: 'prod-phone-4',
      name: 'Vanguard Max 5G Flagship',
      keywords: ['phone', 'phones', 'smartphone', 'mobile', 'premium 5g'],
      priceNum: 44999,
      price: '₹44,999',
      originalPrice: '₹52,999',
      rating: 4.9,
      reviews: 310,
      match: '96% AI Match',
      desc: 'Curved Quad HD+ AMOLED, 200MP Ultra Cam, Wireless Charging.',
      imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80',
      badge: '200MP Camera',
    },
    {
      id: 'prod-phone-5',
      name: 'Pulse Phone 4G Basic',
      keywords: ['phone', 'phones', 'smartphone', 'mobile', 'budget'],
      priceNum: 8499,
      price: '₹8,499',
      originalPrice: '₹10,999',
      rating: 4.4,
      reviews: 490,
      match: '85% AI Match',
      desc: '6.5" HD+ screen, 13MP Dual camera, 5000mAh long battery life.',
      imageUrl: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&auto=format&fit=crop&q=80',
      badge: 'Under ₹10k',
    },

    // 👟 SHOES & FOOTWEAR (5)
    {
      id: 'prod-shoes-1',
      name: 'AeroRun Pro Running Shoes',
      keywords: ['shoes', 'running', 'sneakers', 'footwear', 'running shoes'],
      priceNum: 4200,
      price: '₹4,200',
      originalPrice: '₹5,499',
      rating: 4.9,
      reviews: 284,
      match: '92% AI Match',
      desc: 'Responsive foam cushioning, breathable mesh & ultra grip sole.',
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
      badge: 'Marathon Grade',
    },
    {
      id: 'prod-shoes-2',
      name: 'FlexStride Gym Training Shoes',
      keywords: ['shoes', 'gym', 'training', 'sneakers', 'workout shoes'],
      priceNum: 2799,
      price: '₹2,799',
      originalPrice: '₹3,699',
      rating: 4.7,
      reviews: 350,
      match: '90% AI Match',
      desc: 'Flat stability base for heavy squats & cross training drills.',
      imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80',
      badge: 'Gym Training',
    },
    {
      id: 'prod-shoes-3',
      name: 'Marathon Cushion Sneakers',
      keywords: ['shoes', 'sneakers', 'running', 'cushion', 'sports shoes'],
      priceNum: 3499,
      price: '₹3,499',
      originalPrice: '₹4,299',
      rating: 4.8,
      reviews: 410,
      match: '94% AI Match',
      desc: 'Dual-density air cushion midsole for high impact shock absorption.',
      imageUrl: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=80',
      badge: 'Air Cushion',
    },
    {
      id: 'prod-shoes-4',
      name: 'SprintPro Trail Runners',
      keywords: ['shoes', 'trail', 'outdoor', 'running', 'hiking shoes'],
      priceNum: 4999,
      price: '₹4,999',
      originalPrice: '₹6,499',
      rating: 4.9,
      reviews: 190,
      match: '95% AI Match',
      desc: 'Waterproof Gore-Tex upper with rugged Vibram mountain lugs.',
      imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=80',
      badge: 'All-Terrain Trail',
    },
    {
      id: 'prod-shoes-5',
      name: 'LiteStep Daily Trainers',
      keywords: ['shoes', 'daily', 'walking', 'sneakers', 'budget shoes'],
      priceNum: 1999,
      price: '₹1,999',
      originalPrice: '₹2,699',
      rating: 4.5,
      reviews: 520,
      match: '87% AI Match',
      desc: 'Featherlight slip-on knit upper for casual daily walks.',
      imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=80',
      badge: 'Featherlight',
    },

    // ⌚ SMARTWATCHES (5)
    {
      id: 'prod-watch-1',
      name: 'FitPro Smartwatch',
      keywords: ['smartwatch', 'watch', 'fitness', 'tracker', 'pulse'],
      priceNum: 3999,
      price: '₹3,999',
      originalPrice: '₹4,999',
      rating: 4.9,
      reviews: 328,
      match: '94% AI Match',
      desc: 'Heart rate, SpO2, GPS tracking & 10-day battery life.',
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
      badge: 'Bestseller',
    },
    {
      id: 'prod-watch-2',
      name: 'PulseTrack Fitness Band',
      keywords: ['smartwatch', 'band', 'fitness', 'tracker', 'swim'],
      priceNum: 2499,
      price: '₹2,499',
      originalPrice: '₹3,299',
      rating: 4.7,
      reviews: 215,
      match: '89% AI Match',
      desc: 'Ultra lightweight, active swim tracking & sleep analytics.',
      imageUrl: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&auto=format&fit=crop&q=80',
      badge: 'Under ₹3k',
    },
    {
      id: 'prod-watch-3',
      name: 'AeroFit Pro Watch',
      keywords: ['smartwatch', 'watch', 'amoled', 'calling', 'pro'],
      priceNum: 4499,
      price: '₹4,499',
      originalPrice: '₹5,999',
      rating: 4.8,
      reviews: 412,
      match: '91% AI Match',
      desc: 'AMOLED display, Bluetooth calling & 100+ sports modes.',
      imageUrl: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80',
      badge: 'Premium AMOLED',
    },
    {
      id: 'prod-watch-4',
      name: 'Titanium Ultra Sports Watch',
      keywords: ['smartwatch', 'watch', 'titanium', 'rugged', 'gps'],
      priceNum: 8999,
      price: '₹8,999',
      originalPrice: '₹11,999',
      rating: 4.9,
      reviews: 180,
      match: '96% AI Match',
      desc: 'Aerospace titanium casing, Dual frequency GPS, 100m water resistant.',
      imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=80',
      badge: 'Titanium Rugged',
    },
    {
      id: 'prod-watch-5',
      name: 'Vibe Active Band',
      keywords: ['smartwatch', 'band', 'budget', 'tracker'],
      priceNum: 1899,
      price: '₹1,899',
      originalPrice: '₹2,499',
      rating: 4.5,
      reviews: 380,
      match: '86% AI Match',
      desc: 'Vibrant color display, 14 sport modes, female cycle tracking.',
      imageUrl: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600&auto=format&fit=crop&q=80',
      badge: 'Budget Tracker',
    },

    // 🎧 EARBUDS & AUDIO (5)
    {
      id: 'prod-audio-1',
      name: 'AeroPods Pro Earbuds',
      keywords: ['earbuds', 'headphones', 'audio', 'sound', 'noise', 'canceling', 'workout'],
      priceNum: 3299,
      price: '₹3,299',
      originalPrice: '₹4,499',
      rating: 4.9,
      reviews: 512,
      match: '95% AI Match',
      desc: 'Active noise cancellation, IPX7 sweatproof & 30h battery.',
      imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80',
      badge: 'Noise Canceling',
    },
    {
      id: 'prod-audio-2',
      name: 'SoundMax ANC Over-Ear Headphones',
      keywords: ['earbuds', 'headphones', 'headphone', 'audio', 'anc', 'over ear'],
      priceNum: 5499,
      price: '₹5,499',
      originalPrice: '₹7,999',
      rating: 4.8,
      reviews: 390,
      match: '93% AI Match',
      desc: '40mm Titanium drivers, 40dB Hybrid ANC, 50h playback.',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
      badge: 'Studio ANC',
    },
    {
      id: 'prod-audio-3',
      name: 'FitBeats Sports Wireless Earbuds',
      keywords: ['earbuds', 'headphones', 'sports', 'earhook', 'audio'],
      priceNum: 1799,
      price: '₹1,799',
      originalPrice: '₹2,499',
      rating: 4.7,
      reviews: 420,
      match: '90% AI Match',
      desc: 'Secure fit earhooks, IPX8 waterproof for intense gym workouts.',
      imageUrl: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&auto=format&fit=crop&q=80',
      badge: 'Secure Earhook',
    },
    {
      id: 'prod-audio-4',
      name: 'BassPro Magnetic Neckband',
      keywords: ['earbuds', 'headphones', 'neckband', 'bluetooth', 'audio'],
      priceNum: 1199,
      price: '₹1,199',
      originalPrice: '₹1,799',
      rating: 4.5,
      reviews: 610,
      match: '87% AI Match',
      desc: 'Dual magnetic earbuds, deep bass boost, 25h continuous battery.',
      imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80',
      badge: 'Deep Bass',
    },
    {
      id: 'prod-audio-5',
      name: 'StudioClear Pro TWS Earbuds',
      keywords: ['earbuds', 'headphones', 'tws', 'audio', 'clear calls'],
      priceNum: 4299,
      price: '₹4,299',
      originalPrice: '₹5,499',
      rating: 4.9,
      reviews: 270,
      match: '96% AI Match',
      desc: 'Quad mic ENC noise cancellation for crystal clear voice calls.',
      imageUrl: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&auto=format&fit=crop&q=80',
      badge: 'Quad Mic ENC',
    },
  ];

  // Dynamic Cross-Sell Bundles based on active category intent
  const dynamicBundles = {
    phone: {
      id: 'bundle-phone',
      name: 'Apex 5G Phone + 65W Fast Charger & Armor Case',
      badge: 'Complete Phone Protection Setup',
      desc: 'Bundled with 94% co-purchase rate for new 5G phone buyers.',
      price: '₹23,299',
      originalPrice: '₹25,949',
      savings: 'Save ₹650',
      imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80',
    },
    laptop: {
      id: 'bundle-laptop',
      name: 'ProBook AI Laptop + Ergo Stand & Leather Sleeve',
      badge: 'Complete Workstation Setup',
      desc: 'Bundled based on 91% student & professional co-purchase rate.',
      price: '₹50,799',
      originalPrice: '₹53,999',
      savings: 'Save ₹1,200',
      imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80',
    },
    gym: {
      id: 'bundle-gym',
      name: 'Dumbbells Set + Workout Grip Gloves & Shaker Bottle',
      badge: 'Complete Home Gym Setup',
      desc: 'Bundled with 89% home workout co-purchase probability.',
      price: '₹3,499',
      originalPrice: '₹4,299',
      savings: 'Save ₹400',
      imageUrl: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=80',
    },
    shoes: {
      id: 'bundle-shoes',
      name: 'AeroRun Pro Shoes + Performance Socks (3-Pack)',
      badge: 'Complete Marathon Setup',
      desc: 'Bundled with 92% runner co-purchase probability.',
      price: '₹4,649',
      originalPrice: '₹5,199',
      savings: 'Save ₹350',
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
    },
    earbuds: {
      id: 'bundle-audio',
      name: 'AeroPods Pro + Protective Silicone Case & Carabiner',
      badge: 'Complete Audio Protection Setup',
      desc: 'Bundled with 88% audio accessory co-purchase probability.',
      price: '₹3,499',
      originalPrice: '₹3,999',
      savings: 'Save ₹300',
      imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80',
    },
    watch: {
      id: 'bundle-watch',
      name: 'FitPro Smartwatch + Sports Silicone Band',
      badge: 'Complete Fitness Setup',
      desc: 'Bundled based on 87% customer co-purchase probability.',
      price: '₹4,249',
      originalPrice: '₹4,699',
      savings: 'Save ₹450',
      imageUrl: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600&auto=format&fit=crop&q=80',
    },
  };

  // Select appropriate AI Suggestion Bundle based on user query
  const getActiveBundle = (query) => {
    const qLower = query.toLowerCase();
    if (qLower.includes('phone') || qLower.includes('mobile')) return dynamicBundles.phone;
    if (qLower.includes('laptop') || qLower.includes('computer') || qLower.includes('pc')) return dynamicBundles.laptop;
    if (qLower.includes('gym') || qLower.includes('weight') || qLower.includes('dumbbell')) return dynamicBundles.gym;
    if (qLower.includes('shoe') || qLower.includes('sneaker') || qLower.includes('running')) return dynamicBundles.shoes;
    if (qLower.includes('earbud') || qLower.includes('headphone') || qLower.includes('audio')) return dynamicBundles.earbuds;
    return dynamicBundles.watch;
  };

  const activeBundle = getActiveBundle(activeQuery);

  // Helper to extract numeric budget from query string
  const parseBudgetFromQuery = (query) => {
    const match = query.match(/(?:under|below|budget|less than|₹|\b)(\d[\d,]*)/i);
    if (match && match[1]) {
      const num = parseInt(match[1].replace(/,/g, ''), 10);
      if (num >= 500 && num <= 200000) return num;
    }
    return null;
  };

  const userBudget = parseBudgetFromQuery(activeQuery);

  // Search logic
  const searchCatalog = (query) => {
    const qLower = query.toLowerCase();
    const isBestQuery = qLower.includes('best') || qLower.includes('top') || qLower.includes('rating') || qLower.includes('highest');

    // 1. Find category matches
    let categoryMatches = fullCatalog.filter((item) => {
      return item.keywords.some((kw) => qLower.includes(kw)) || item.name.toLowerCase().includes(qLower);
    });

    // If query asks for generic "best products" without a specific category, take top items across all categories
    if (categoryMatches.length === 0 && isBestQuery) {
      categoryMatches = [...fullCatalog];
    } else if (categoryMatches.length === 0) {
      return { type: 'NOT_FOUND', products: [], budget: userBudget, isBest: false };
    }

    // Always sort by highest customer rating descending if "best" or "top rating" is requested!
    if (isBestQuery) {
      categoryMatches.sort((a, b) => b.rating - a.rating);
    }

    // 2. Check if user requested a budget and all matching products exceed it
    if (userBudget) {
      const withinBudget = categoryMatches.filter((item) => item.priceNum <= userBudget);

      if (withinBudget.length === 0) {
        return {
          type: 'EXCEEDS_BUDGET',
          products: categoryMatches,
          budget: userBudget,
          minPrice: Math.min(...categoryMatches.map((p) => p.priceNum)),
          isBest: isBestQuery,
        };
      }

      return { type: 'MATCHED', products: withinBudget, budget: userBudget, isBest: isBestQuery };
    }

    return { type: 'MATCHED', products: categoryMatches, budget: userBudget, isBest: isBestQuery };
  };

  const searchResult = searchCatalog(activeQuery);

  const handleQuerySelect = (q) => {
    setActiveQuery(q);
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 350);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    setActiveQuery(customInput);
    setCustomInput("");
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 350);
  };

  const handleApplyVoucher = (itemId, voucherAmount) => {
    setAppliedVouchers((prev) => ({ ...prev, [itemId]: voucherAmount }));
  };

  return (
    <section id="ai-agent" className="py-20 bg-white border-y border-[#DDE9E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#DDE9E5]">
            <Bot className="w-4 h-4 text-[#0F766E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
              Interactive AI Sales Agent (Dynamic Category Bundles)
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A27] tracking-tight">
            Meet Your AI Sales Agent.
          </h2>
          <p className="text-base sm:text-lg text-[#64746F]">
            AI suggestions change dynamically per product (e.g. Phones → Cover/Charger, Laptops → Stand/Sleeve, Gym → Gloves/Shaker).
          </p>
        </div>

        {/* Large Chatbot Card Container */}
        <div className="max-w-5xl mx-auto bg-[#F5F7F2] rounded-3xl border border-[#DDE9E5] shadow-xl p-6 sm:p-8 space-y-8">
          
          {/* Chat Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DDE9E5]">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F766E] flex items-center justify-center text-[#A7F3D0]">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#102A27]">AI Commerce Assistant</h3>
                <div className="flex items-center space-x-2 text-xs text-[#0F766E] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse"></span>
                  <span>Dynamic Cross-Sell Engine &bull; 30 Products</span>
                </div>
              </div>
            </div>

            {/* Quick Category Chips */}
            <div className="flex flex-wrap gap-1.5">
              {categoryChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuerySelect(chip.query)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                    activeQuery.toLowerCase().includes(chip.query.toLowerCase().split(' ')[2] || 'best')
                      ? 'bg-[#0F766E] text-white border-[#0F766E] font-semibold shadow-xs'
                      : 'bg-white text-[#102A27] border-[#DDE9E5] hover:border-[#14B8A6]'
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dialogue Container */}
          <div className="space-y-6">
            
            {/* Customer Bubble */}
            <div className="flex items-start space-x-3 max-w-2xl">
              <div className="w-8 h-8 rounded-full bg-white border border-[#DDE9E5] flex items-center justify-center text-[#64746F] shrink-0">
                <User className="w-4 h-4" />
              </div>
              <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-[#DDE9E5] shadow-xs space-y-1">
                <span className="text-[11px] font-bold text-[#64746F] uppercase tracking-wider block">Customer</span>
                <p className="text-sm font-semibold text-[#102A27]">
                  "{activeQuery}"
                </p>
              </div>
            </div>

            {/* AI Agent Response Bubble */}
            <div className="flex items-start space-x-3 max-w-3xl ml-auto justify-end">
              <div className={`p-4.5 rounded-2xl rounded-tr-none text-white shadow-md space-y-1 w-full sm:w-auto ${
                searchResult.type === 'EXCEEDS_BUDGET'
                  ? 'bg-gradient-to-r from-red-700 to-amber-700'
                  : searchResult.type === 'NOT_FOUND'
                  ? 'bg-gradient-to-r from-amber-700 to-amber-600'
                  : 'bg-gradient-to-r from-[#0F766E] to-[#14B8A6]'
              }`}>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11px] font-bold text-[#A7F3D0] uppercase tracking-wider block">
                    {searchResult.isBest
                      ? 'AI Agent — Rating Sorted'
                      : searchResult.type === 'EXCEEDS_BUDGET'
                      ? 'AI Agent — Budget Warning'
                      : searchResult.type === 'NOT_FOUND'
                      ? 'AI Agent — Catalog Alert'
                      : 'AI Sales Agent'}
                  </span>
                  <span className="text-[10px] bg-black/20 text-[#A7F3D0] px-2 py-0.5 rounded font-mono">
                    0.09s intent parse
                  </span>
                </div>
                
                <p className="text-sm font-medium text-white">
                  {searchResult.isBest ? (
                    `I sorted our store items by highest customer rating (Top Rated: ⭐ ${searchResult.products[0]?.rating || '4.9'}/5).`
                  ) : searchResult.type === 'EXCEEDS_BUDGET' ? (
                    <>
                      "This product is not available under your budget of ₹{searchResult.budget.toLocaleString('en-IN')}. Current item starts at ₹{searchResult.minPrice.toLocaleString('en-IN')}."
                    </>
                  ) : searchResult.type === 'NOT_FOUND' ? (
                    `I searched our merchant catalog for "${activeQuery}", but no matching products were found in current inventory.`
                  ) : (
                    `I found ${searchResult.products.length} options matching your request within budget.`
                  )}
                </p>
              </div>

              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 ${
                searchResult.type === 'EXCEEDS_BUDGET'
                  ? 'bg-red-700'
                  : searchResult.type === 'NOT_FOUND'
                  ? 'bg-amber-600'
                  : 'bg-[#0F766E]'
              }`}>
                <Bot className="w-4 h-4" />
              </div>
            </div>

          </div>

          {/* Interactive Custom Input Bar */}
          <form onSubmit={handleCustomSubmit} className="flex gap-2 pt-2">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Type request (e.g. 'best phone', 'gym dumbbells', 'laptops under 40000')..."
              className="flex-1 bg-white border border-[#DDE9E5] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0F766E] text-[#102A27]"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#0F766E] hover:bg-[#14B8A6] text-white text-sm font-bold rounded-xl transition-all flex items-center space-x-1.5"
            >
              <span>Ask AI</span>
              <Sparkles className="w-4 h-4 text-[#A7F3D0]" />
            </button>
          </form>

          {/* Results Area */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F766E] flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {searchResult.isBest ? 'Highest Customer Rated Matches (Sorted Descending)' : 'AI Catalog Search Results'}
                </span>
              </h4>
              <span className="text-xs text-[#64746F]">
                {searchResult.products.length} {searchResult.products.length === 1 ? 'Item' : 'Items'} Evaluated
              </span>
            </div>

            {isSearching ? (
              <div className="py-12 text-center space-y-3 bg-white rounded-2xl border border-[#DDE9E5]">
                <div className="w-8 h-8 border-4 border-[#0F766E] border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-sm font-semibold text-[#0F766E]">AI Agent is searching and computing cross-sell bundles...</p>
              </div>
            ) : searchResult.type === 'EXCEEDS_BUDGET' ? (
              
              /* BUDGET EXCEEDED ALERT CARD */
              <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-red-200 shadow-sm space-y-6">
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#DDE9E5]">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center shrink-0">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold text-[#102A27]">Product Not Available Under Your Budget</h4>
                      <p className="text-xs text-red-600 font-bold mt-0.5">
                        Requested Budget: ₹{searchResult.budget.toLocaleString('en-IN')} &bull; Nearest Available: ₹{searchResult.minPrice.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold px-3 py-1 bg-red-50 text-red-700 border border-red-200 rounded-full">
                    Exceeds by ₹{(searchResult.minPrice - searchResult.budget).toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Display Product Card with Budget Flag */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  {searchResult.products.map((item) => {
                    const diff = item.priceNum - searchResult.budget;
                    const voucher = appliedVouchers[item.id];
                    const finalPriceNum = voucher ? item.priceNum - voucher : item.priceNum;
                    const finalPriceStr = `₹${finalPriceNum.toLocaleString('en-IN')}`;
                    const isAdded = addedItems.includes(item.id);

                    return (
                      <div
                        key={item.id}
                        className="bg-[#F5F7F2] rounded-2xl p-5 border border-[#DDE9E5] space-y-4 relative overflow-hidden"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-24 h-24 rounded-xl bg-white border border-[#DDE9E5] overflow-hidden shrink-0 shadow-xs">
                            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                          </div>

                          <div className="space-y-1">
                            <h4 className="font-bold text-base text-[#102A27]">{item.name}</h4>
                            <p className="text-xs text-[#64746F] line-clamp-2">{item.desc}</p>
                            
                            <div className="pt-1 flex items-center space-x-2">
                              <span className="text-lg font-extrabold text-[#102A27]">{finalPriceStr}</span>
                              {voucher ? (
                                <span className="text-xs font-bold text-[#0F766E] bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0]">
                                  Voucher Applied (-₹{voucher})
                                </span>
                              ) : (
                                <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                                  +₹{diff} Over Budget
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* AI Resolution Options */}
                        <div className="pt-3 border-t border-[#DDE9E5] flex flex-col sm:flex-row items-center justify-between gap-2">
                          {!voucher ? (
                            <button
                              onClick={() => handleApplyVoucher(item.id, diff)}
                              className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-[#0F766E] to-[#14B8A6] text-white text-xs font-bold rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center space-x-1.5"
                            >
                              <Tag className="w-3.5 h-3.5 text-[#A7F3D0]" />
                              <span>Apply AI ₹{diff} Instant Voucher</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => onAddToCart({ ...item, price: finalPriceStr })}
                              disabled={isAdded}
                              className="w-full sm:w-auto px-5 py-2 bg-[#0F766E] text-white text-xs font-bold rounded-xl shadow-xs flex items-center justify-center space-x-1.5"
                            >
                              {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                              <span>{isAdded ? 'Added to Cart' : 'Buy at Budget Price'}</span>
                            </button>
                          )}

                          <button
                            onClick={() => handleQuerySelect("Show me gym workout gear under ₹3,000.")}
                            className="text-xs font-semibold text-[#0F766E] hover:underline"
                          >
                            View Items Under ₹3,000 →
                          </button>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>

            ) : searchResult.type === 'NOT_FOUND' ? (
              
              /* PRODUCT NOT FOUND ERROR CARD */
              <div className="bg-white rounded-2xl p-8 border-2 border-amber-200 shadow-sm space-y-6 text-center">
                <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mx-auto">
                  <PackageX className="w-7 h-7" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <h4 className="text-xl font-extrabold text-[#102A27]">Product Not Found</h4>
                  <p className="text-xs text-[#64746F] leading-relaxed">
                    Sorry, we currently do not have matching products for <strong className="text-amber-800">"{activeQuery}"</strong> in our store inventory.
                  </p>
                </div>

                <div className="p-4 bg-[#F5F7F2] rounded-xl border border-[#DDE9E5] text-left text-xs max-w-lg mx-auto space-y-2">
                  <div className="flex items-center space-x-1.5 font-bold text-[#0F766E]">
                    <Sparkles className="w-4 h-4" />
                    <span>AI Assistant Recommendation:</span>
                  </div>
                  <p className="text-[#64746F]">
                    Try searching for available store categories (5+ items per category):
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {categoryChips.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuerySelect(chip.query)}
                        className="px-3 py-1 bg-white border border-[#DDE9E5] hover:border-[#0F766E] rounded-lg text-xs font-semibold text-[#102A27]"
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

            ) : (

              /* MATCHED PRODUCTS GRID */
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {searchResult.products.map((item, idx) => {
                  const isAdded = addedItems.includes(item.id);
                  const isTopRanked = searchResult.isBest && idx === 0;

                  return (
                    <div
                      key={item.id}
                      className={`bg-white rounded-2xl p-4 sm:p-5 border transition-all flex flex-col justify-between group overflow-hidden ${
                        isTopRanked
                          ? 'border-2 border-[#0F766E] shadow-md ring-2 ring-[#0F766E]/10'
                          : 'border-[#DDE9E5] hover:border-[#14B8A6] shadow-xs'
                      }`}
                    >
                      <div>
                        {/* Rating Rank Badge */}
                        <div className="flex items-center justify-between mb-3">
                          {isTopRanked ? (
                            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-extrabold bg-[#0F766E] text-white shadow-xs">
                              <Trophy className="w-3.5 h-3.5 text-[#A7F3D0]" />
                              <span>#1 Top Rated Match</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-extrabold bg-[#ECFDF5] text-[#0F766E] border border-[#A7F3D0]">
                              ✦ {item.match}
                            </span>
                          )}

                          <div className="flex items-center space-x-1 text-xs font-bold text-[#102A27] bg-[#ECFDF5] px-2 py-0.5 rounded-full border border-[#DDE9E5]">
                            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                            <span className="font-extrabold text-[#0F766E]">{item.rating}</span>
                            <span className="text-[#64746F] font-normal">({item.reviews})</span>
                          </div>
                        </div>

                        {/* Product Photo Container */}
                        <div className="w-full h-44 rounded-xl bg-white border border-[#DDE9E5] overflow-hidden mb-4 relative group-hover:scale-[1.02] transition-transform">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-full object-cover object-center"
                          />
                          <span className="absolute bottom-2 left-2 text-[10px] font-bold bg-[#102A27]/80 backdrop-blur-xs text-white px-2 py-0.5 rounded">
                            {item.badge}
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <h4 className="font-bold text-base text-[#102A27]">{item.name}</h4>
                        <p className="text-xs text-[#64746F] mt-1 leading-relaxed line-clamp-2">
                          {item.desc}
                        </p>
                      </div>

                      {/* Price & Action */}
                      <div className="mt-4 pt-4 border-t border-[#DDE9E5] flex items-center justify-between">
                        <div>
                          <div className="text-lg font-extrabold text-[#102A27]">{item.price}</div>
                          <div className="text-xs text-[#64746F] line-through">{item.originalPrice}</div>
                        </div>

                        <button
                          onClick={() => onAddToCart(item)}
                          disabled={isAdded}
                          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                            isAdded
                              ? 'bg-[#ECFDF5] text-[#0F766E] border border-[#14B8A6]'
                              : 'bg-[#0F766E] hover:bg-[#14B8A6] text-white shadow-xs'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#0F766E]" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add to Cart</span>
                            </>
                          )}
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* DYNAMIC AI CROSS-SELL BUNDLE SUGGESTION CARD */}
          {searchResult.type === 'MATCHED' && activeBundle && (
            <div className="bg-gradient-to-r from-[#ECFDF5] to-white p-6 rounded-2xl border border-[#14B8A6]/40 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A7F3D0]/30 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-xl bg-white border border-[#DDE9E5] overflow-hidden shrink-0 shadow-xs">
                    <img
                      src={activeBundle.imageUrl}
                      alt={activeBundle.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-[#0F766E] text-[#A7F3D0]">
                        AI Suggestion
                      </span>
                      <span className="text-xs font-bold text-[#0F766E]">{activeBundle.badge}</span>
                    </div>
                    <h4 className="text-lg font-extrabold text-[#102A27]">
                      {activeBundle.name}
                    </h4>
                    <p className="text-xs text-[#64746F]">
                      {activeBundle.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 self-end sm:self-center shrink-0">
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#0F766E] bg-white px-2 py-0.5 rounded border border-[#DDE9E5]">
                      {activeBundle.savings}
                    </div>
                    <div className="text-base font-extrabold text-[#102A27] mt-0.5">{activeBundle.price}</div>
                  </div>

                  <button
                    onClick={() => onAddToCart(activeBundle)}
                    className="px-5 py-3 bg-gradient-to-r from-[#0F766E] to-[#14B8A6] text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center space-x-1.5 shrink-0"
                  >
                    <Plus className="w-4 h-4 text-[#A7F3D0]" />
                    <span>Add Bundle</span>
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
