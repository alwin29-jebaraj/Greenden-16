/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const PLANTS = [
  {
    id: 'p1',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    price: 45,
    image: 'https://images.unsplash.com/photo-1545241047-15995164d23e?auto=format&fit=crop&w=800&q=80',
    category: 'easy-care',
    difficulty: 'Easy',
    sunlight: 'Bright, indirect light',
    watering: 'Every 1-2 weeks. Allow soil to dry out between waterings.',
    size: 'Large',
    description: 'Iconic and dramatic, the Swiss Cheese Plant is famous for its natural leaf fenestrations. It is an incredibly fast-growing and striking addition to any modern indoor landscape.',
    careTips: [
      'Wipe leaves weekly with a damp cloth to remove dust and maximize photosynthesis.',
      'Provide a moss pole or trellis as it grows to support its climbing nature.',
      'Rotate 90 degrees every month to ensure even and balanced growth.'
    ],
    isPopular: true
  },
  {
    id: 'p2',
    name: 'Snake Plant (Laurentii)',
    scientificName: 'Sansevieria trifasciata',
    price: 28,
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=800&q=80',
    category: 'low-light',
    difficulty: 'Easy',
    sunlight: 'Low to bright indirect light; very tolerant of poor light conditions',
    watering: 'Every 3-4 weeks. Allow soil to dry completely; extremely drought-tolerant.',
    size: 'Medium',
    description: 'Virtually indestructible, the Snake Plant boasts stiff, sword-like green leaves with vibrant yellow edges. It acts as an excellent natural air purifier, particularly active at night.',
    careTips: [
      'When in doubt, do not water! Overwatering is the only way to harm this resilient plant.',
      'Keep in a container with excellent drainage to prevent soggy roots.',
      'Thrives in standard indoor humidity; no misting or extra humidity needed.'
    ],
    isPopular: true
  },
  {
    id: 'p3',
    name: 'Calathea Orbifolia',
    scientificName: 'Goeppertia orbifolia',
    price: 38,
    image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=800&q=80',
    category: 'pet-friendly',
    difficulty: 'Medium',
    sunlight: 'Medium indirect light; avoid direct sun as it burns the round foliage',
    watering: 'Weekly. Keep soil consistently moist but never waterlogged.',
    size: 'Medium',
    description: 'A botanical masterpiece featuring oversized, circular leaves striped with silver-green bands. This stunning prayer plant moves its leaves up at night and opens them during the day.',
    careTips: [
      'Requires high humidity; mist daily, use a pebble tray, or place next to a humidifier.',
      'Use filtered, distilled, or rainwater to prevent brown leaf edges caused by tap water minerals.',
      'Keep away from drafty windows, air vents, or direct air conditioning.'
    ]
  },
  {
    id: 'p4',
    name: 'Fiddle Leaf Fig',
    scientificName: 'Ficus lyrata',
    price: 65,
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&w=800&q=80',
    category: 'air-purifying',
    difficulty: 'Expert',
    sunlight: 'Bright, consistent, indirect sunlight',
    watering: 'Every 1-2 weeks. Water thoroughly when the top 2 inches of soil feel dry.',
    size: 'Large',
    description: 'The ultimate statement piece for interior design. With its large, glossy, violin-shaped leaves and tall woody trunk, it is a magnificent choice for brightly lit living rooms.',
    careTips: [
      'Extremely sensitive to being moved; choose a perfect bright spot and keep it there.',
      'Shake the trunk gently for a few seconds weekly to simulate wind and strengthen its structure.',
      'Water thoroughly until water runs out the drainage hole, then empty the tray.'
    ],
    isPopular: true
  },
  {
    id: 'p5',
    name: 'ZZ Plant',
    scientificName: 'Zamioculcas zamiifolia',
    price: 32,
    image: 'https://images.unsplash.com/photo-1632207691143-643c2a9a93c2?auto=format&fit=crop&w=800&q=80',
    category: 'low-light',
    difficulty: 'Easy',
    sunlight: 'Thrives in low to medium indirect light; can tolerate artificial office lighting',
    watering: 'Every 3-4 weeks. Allow soil to dry out completely before watering again.',
    size: 'Medium',
    description: 'With its shiny, compound leaves that look polished and deep green, the ZZ plant is a perfect companion for dark corners or busy offices where plant maintenance is minimal.',
    careTips: [
      'Does not require misting; handles dry indoor air beautifully.',
      'Use a well-draining potting mix combined with perlite for optimal root health.',
      'Fertilize only once or twice a year during spring or summer.'
    ]
  },
  {
    id: 'p6',
    name: 'Peace Lily',
    scientificName: 'Spathiphyllum',
    price: 24,
    image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=800&q=80',
    category: 'air-purifying',
    difficulty: 'Easy',
    sunlight: 'Low to medium indirect light; can handle shade but blooms better with medium light',
    watering: 'Weekly. Water immediately when the leaves start to droop slightly.',
    size: 'Medium',
    description: 'An elegant plant featuring dark green glossy leaves and beautiful hooded white blossoms. Known as one of NASA’s top air-filtering plants for removing chemical toxins.',
    careTips: [
      'Will "dramatically" droop when thirsty, but perks up within hours of receiving water.',
      'Keep away from direct sunlight to avoid scorching the delicate white spathes.',
      'Prune dead flowers at the base of the stem to encourage brand new blooms.'
    ]
  },
  {
    id: 'p7',
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    price: 19,
    image: 'https://images.unsplash.com/photo-1596547613758-9128de16104c?auto=format&fit=crop&w=800&q=80',
    category: 'easy-care',
    difficulty: 'Easy',
    sunlight: 'Bright, direct sunlight',
    watering: 'Every 3 weeks. Let soil dry out fully; succulent leaves store significant water.',
    size: 'Small',
    description: 'A beautiful succulent prized for its therapeutic soothing gel found inside its fleshy spikes. Adds a clean geometric architectural element to window sills and sunny desks.',
    careTips: [
      'Ensure it is housed in a heavy terra cotta pot to prevent tipping and encourage drainage.',
      'Avoid standing water in the rosette center to prevent rot.',
      'Harvest mature outer leaves first by cutting close to the base of the soil.'
    ]
  },
  {
    id: 'p8',
    name: 'Bird’s Nest Fern',
    scientificName: 'Asplenium nidus',
    price: 26,
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80',
    category: 'pet-friendly',
    difficulty: 'Medium',
    sunlight: 'Medium indirect light; thrives in humid environments',
    watering: 'Weekly. Keep the soil evenly moist, watering around the edge of the pot.',
    size: 'Small',
    description: 'Unlike traditional delicate ferns, this variety features solid, ripple-edged apple-green fronds that emerge from a central nest-like rosette. Totally pet-friendly and tropical.',
    careTips: [
      'Never pour water directly into the center "nest" rosette, as it easily induces crown rot.',
      'Thrives wonderfully in bathrooms due to the elevated humidity of showers.',
      'Use a peat-rich, organic potting soil mix that retains moisture while draining excess water.'
    ]
  },
  {
    id: 'p9',
    name: 'Golden Pothos',
    scientificName: 'Epipremnum aureum',
    price: 22,
    image: 'https://images.unsplash.com/photo-1598880940375-6a4dfc2b81b3?auto=format&fit=crop&w=800&q=80',
    category: 'easy-care',
    difficulty: 'Easy',
    sunlight: 'Low to bright indirect light; extremely adaptable',
    watering: 'Every 1-2 weeks. Let the top half of soil dry out completely.',
    size: 'Small',
    description: 'The golden child of indoor vine plants. It produces gorgeous trailing vines with heart-shaped leaves variegated in splashes of yellow and gold. Looks incredible cascading from bookshelves.',
    careTips: [
      'Trim the trailing vines occasionally to encourage fuller, bushier foliage at the top.',
      'Cuttings can be easily propagated in water to grow new separate baby plants.',
      'Variegation will become more pronounced and bright in better indirect light.'
    ],
    isPopular: true
  },
  {
    id: 'p10',
    name: 'Pink Princess Philodendron',
    scientificName: 'Philodendron erubescens',
    price: 85,
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80',
    category: 'rare',
    difficulty: 'Medium',
    sunlight: 'Bright indirect light; crucial to maintain its signature variegation',
    watering: 'Every 1-2 weeks. Water when the top 50% of soil is dry.',
    size: 'Medium',
    description: 'A collector’s dream plant. This rare philodendron features dramatic dark green leaves speckled and splashed with vibrant, highly sought-after bubblegum pink variegation.',
    careTips: [
      'Place in a spot with high indirect light to prevent the pink areas from fading or turning green.',
      'Keep the humidity above 50% to ensure new leaves emerge smoothly without tearing.',
      'Support with a climbing stake to allow leaves to mature to their maximum size.'
    ],
    isPopular: true
  }
];

export const FEATURES = [
  {
    title: 'Guaranteed Healthy Arrival',
    description: 'Every plant is hand-selected, pampered, and meticulously packaged so it arrives at your doorstep in pristine condition.',
    icon: 'Sprout'
  },
  {
    title: 'Tailored Lifetime Guidance',
    description: 'Gain access to detailed digital plant care guides and connect directly with our botanical team for expert guidance.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Eco-Friendly Packing',
    description: 'We believe in green living. That is why 100% of our packing materials are biodegradable, recyclable, and plastic-free.',
    icon: 'Sun'
  }
];

export const FAQS = [
  {
    question: 'How do you ship live plants safely?',
    answer: 'We have developed a custom plant packaging system that secures both the pot and the foliage. The soil is bound gently with coconut-fiber wrap to prevent spills, and the plant is suspended inside a heavy-duty, breathable cardboard crate that prevents bruising. We ship only during mild temperatures, and include heat packs in winter if needed.'
  },
  {
    question: 'What if my plant arrives damaged or dies?',
    answer: 'We want you to love your plants! We offer a 30-Day Customer Guarantee. If your plant arrives damaged or displays signs of severe decline within the first 30 days, simply send a photo to our support team and we will issue a free replacement or a full refund immediately.'
  },
  {
    question: 'Are your plants safe for cats and dogs?',
    answer: 'Many of our plants, such as the Bird’s Nest Fern, Calathea Orbifolia, and Parlor Palms are completely non-toxic and pet-safe. However, some popular plants (like Philodendrons and Monstera) can be mild irritants if chewed. We label all our products clearly, and you can filter our catalog specifically by the "Pet Friendly" category to browse safely.'
  },
  {
    question: 'Can you help me diagnose my sick plant?',
    answer: 'Absolutely! Our botanical team loves troubleshooting. If you notice yellow leaves, drooping, or strange spots, head over to our Contact page and send us a message. You can include details about your light levels and watering schedule, and we will diagnose your plant and prescribe a custom care plan.'
  }
];
