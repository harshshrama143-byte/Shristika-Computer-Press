import { ServiceItem, ServiceCategory } from '../types';

export const SERVICE_CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'All Services' },
  { id: 'business', label: 'Business' },
  { id: 'advertising', label: 'Advertisement' },
  { id: 'school_office', label: 'School & Office' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'photo', label: 'Photo' },
  { id: 'custom', label: 'Custom' },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    number: '01',
    id: 'visiting-card',
    title: 'Visiting Card',
    category: 'business',
    categoryLabel: 'Business',
    shortDesc: 'Premium visiting cards with luxury paper stocks, velvet lamination, metallic foils, and spot UV finishing.',
    fullDesc: 'Make an unforgettable professional statement with our executive visiting card printing. Crafted on 300 to 400 GSM heavy art boards with ultra-sharp digital & offset precision. Choose from standard matte, high-gloss, soft-touch velvet lamination, gold/silver foil stamping, and embossed textures.',
    suitableFor: [
      'Business Owners & Entrepreneurs',
      'Corporate Executives & Consultants',
      'Doctors, Advocates & Professionals',
      'Retail Stores & Real Estate Agents'
    ],
    customizations: [
      'Standard (3.5 x 2.0 in) & Square Cards',
      'Single & Both Side High-Res Color Print',
      'Spot UV Gloss & Raised Embossing',
      'Gold, Silver & Copper Hot Foil Stamping',
      'Rounded Corners & Die-Cut Shapes'
    ],
    features: [
      '300 to 400 GSM Premium Cardstock',
      'Matte / Gloss / Velvet Touch Finish',
      'Spot UV & Metallic Hot Foil Available',
      'Single & Both Side Printing Options',
      'Custom Graphic Layout & Typesetting'
    ],
    popular: true,
    standardTurnaround: 'Same Day to 24 Hours',
    specifications: '3.5 x 2.0 in | 350-400 GSM Heavy Art Board',
    iconName: 'CreditCard',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '02',
    id: 'pvc-id-card',
    title: 'PVC ID Card',
    category: 'school_office',
    categoryLabel: 'School & Office',
    shortDesc: 'High-definition waterproof thermal fused PVC identification cards for organizations and institutions.',
    fullDesc: 'Durable, scratch-proof, and non-fading PVC identity cards printed with high-resolution direct-to-card thermal fusion. Ideal for schools, colleges, coaching institutes, corporate staff, and membership programs. Includes QR codes, barcodes, and matching printed lanyards.',
    suitableFor: [
      'Schools, Colleges & Universities',
      'Corporate Offices & Factories',
      'Hospitals, Clinics & Security Staff',
      'Gyms, Clubs & Membership Programs'
    ],
    customizations: [
      'Standard CR80 (85.6 x 54 mm) Dimensions',
      'Dynamic QR Code & Barcode Integration',
      'Custom Woven / Screen-Printed Lanyards',
      'Hard Acrylic Holders & Soft Pouches',
      'RFID & Proximity Smart Chips'
    ],
    features: [
      'HD Direct Sublimation Print Quality',
      '100% Waterproof & Tear-Proof Core',
      'Sharp Barcode & QR Code Scanning',
      'Custom Lanyard Ribbon & Yoyo Clips',
      'Available in Single & Bulk Batches'
    ],
    popular: true,
    standardTurnaround: '12 to 24 Hours (Bulk Ready)',
    specifications: 'CR80 (85.6 x 54 mm) | 30 mil (0.76mm) Pure PVC',
    iconName: 'ShieldCheck',
    imageUrl: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '03',
    id: 'sticker-printing',
    title: 'Sticker Printing',
    category: 'advertising',
    categoryLabel: 'Advertisement',
    shortDesc: 'Custom die-cut stickers and product packaging labels in waterproof vinyl and paper finishes.',
    fullDesc: 'Boost your product branding with custom-shaped sticker and label printing. From food packaging and jar labels to waterproof vinyl branding decals and warranty void seals. Precision cut in round, square, or custom contour shapes.',
    suitableFor: [
      'Food, Bakery & Beverage Packaging',
      'Cosmetics, Bottles & Candle Jars',
      'Brand Merchandising & Giveaways',
      'Barcode, MRP & Shipping Address Labels'
    ],
    customizations: [
      'Custom Kiss-Cut Sheets & Individual Die-Cut',
      'Glossy Vinyl, Matte Vinyl & Transparent Clear',
      'Gold Foil, Silver Chrome & Kraft Paper Base',
      'Waterproof, Oil-Resistant & Freezer-Safe',
      'Any Custom Dimension from 1 inch to 12 inches'
    ],
    features: [
      'Waterproof Heavy-Duty Vinyl & Chroma Paper',
      'Laser Precision Contour Die-Cutting',
      'Gloss, Matte or Clear Transparent Finish',
      'Industrial Strength Adhesive Backing',
      'Roll or Individual Sheet Formats'
    ],
    popular: true,
    standardTurnaround: '24 to 48 Hours',
    specifications: 'Custom Die-Cut Shapes | Waterproof Vinyl / Kraft / Foil',
    iconName: 'Tag',
    imageUrl: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '04',
    id: 'banner-flex',
    title: 'Banner & Flex Printing',
    category: 'advertising',
    categoryLabel: 'Advertisement',
    shortDesc: 'High-impact outdoor banners, star flex, backlit glow-sign boards, and roll-up standees.',
    fullDesc: 'Command maximum visual attention with large-format banner and flex printing. Printed with heavy-duty UV and weather-resistant eco-solvent inks on high-density star flex, normal flex, and backlit media. Perfect for shop frontages, grand openings, and political or event campaigns.',
    suitableFor: [
      'Shop Frontages & Business Showrooms',
      'Event Backdrops & Stage Displays',
      'Promotional Roll-up Standees',
      'Roadside Hoardings & Direction Signs'
    ],
    customizations: [
      'Normal Flex, Star Flex & Backlit Substrates',
      'Custom Dimensions from 2x3 ft up to 50x20 ft',
      'Reinforced Hemming & Heavy Metal Eyelets',
      'Aluminium Roll-Up Standee Hardware',
      'Front-lit & Back-lit Glow Sign Compatible'
    ],
    features: [
      'Vibrant Colors with UV-Resistant Inks',
      'Heavy-Duty Rain & Sun Weatherproof Media',
      'Durable Brass Eyelets & Corner Hemming',
      'Roll-Up Standees with Portable Carry Bags',
      'Ultra High DPI Large-Format Clarity'
    ],
    popular: true,
    standardTurnaround: 'Same Day / 2 to 6 Hours',
    specifications: 'Custom Widths & Heights | 280-440 GSM Star Flex',
    iconName: 'Layers',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '05',
    id: 'wedding-card',
    title: 'Wedding Card',
    category: 'wedding',
    categoryLabel: 'Wedding',
    shortDesc: 'Exquisite wedding invitation suites featuring royal textures, gold foil stamping, and laser-cut artistry.',
    fullDesc: 'Celebrate your sacred union with majestic wedding cards. We offer traditional Indian royal motifs, modern floral designs, laser-cut gatefold envelopes, hot gold/copper foil stamping, and personalized inserts in Hindi, English, and regional languages.',
    suitableFor: [
      'Traditional & Modern Wedding Celebrations',
      'Engagement Ceremonies (Ring Ceremony)',
      'Sangeet, Haldi & Reception Functions',
      'Save-The-Date & Anniversary Milestones'
    ],
    customizations: [
      'Single, Two-Fold & Box Style Invitation Suites',
      'Metallic, Shimmer, Handmade & Velvet Boards',
      'Intricate Laser-Cut Outer Jackets',
      'Real Gold, Copper & Silver Hot Foil Emboss',
      'Matching RSVP, Program Inserts & Sweet Box Labels'
    ],
    features: [
      '250 to 600 GSM Luxurious Shimmer & Velvet Stocks',
      'Authentic Gold Foil Stamping & Embossing',
      'Laser-Cut Detailed Jackets & Envelopes',
      'Bilingual & Multi-Language Typesetting',
      'Free Digital Proofing Before Final Production'
    ],
    popular: true,
    standardTurnaround: '2 to 4 Days (Proofing within 24h)',
    specifications: 'Custom Sizes | 300-600 GSM Metallic & Handcrafted Board',
    iconName: 'HeartHandshake',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '06',
    id: 'photo-frame',
    title: 'Photo Frame',
    category: 'photo',
    categoryLabel: 'Photo',
    shortDesc: 'Customized wooden, acrylic, and collage photo frames with non-fading archival prints.',
    fullDesc: 'Transform your cherished family, wedding, and milestone memories into gallery-quality wall art. Choose from contemporary sleek wood frames, minimalist floating acrylic panels, multi-photo collage mosaics, and canvas wraps with crystal-clear protective glass.',
    suitableFor: [
      'Wedding & Family Portrait Keepsakes',
      'Birthday, Anniversary & Housewarming Gifts',
      'Office Reception & Corporate Decor',
      'Baby Milestones & Graduation Portraits'
    ],
    customizations: [
      'Wooden (Teak/Walnut/White/Black) & Acrylic Finishes',
      'Custom Multi-Photo Collage Design Service',
      'Non-Reflective Matte Glass or Acrylic Glass',
      'Tabletop Easel Backing & Wall Hanging Hardware',
      'Sizes: 6x8, 8x10, 8x12, 12x18, 16x24, 20x30 inches'
    ],
    features: [
      'Solid Moisture-Resistant Frame Mouldings',
      'HD Studio Archival Photo Print Included',
      'Color Retouching & Red-Eye Correction',
      'Secure Wall Hanging Hooks & Table Stands',
      'Shock-Proof Protective Packaging'
    ],
    popular: true,
    standardTurnaround: '24 to 48 Hours',
    specifications: '6x8 in to 24x36 in | Solid Synthetic / Wood / Acrylic',
    iconName: 'Image',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '07',
    id: 'photo-printing',
    title: 'Photo Printing',
    category: 'photo',
    categoryLabel: 'Photo',
    shortDesc: 'Studio-grade photo printing on genuine archival papers with true-to-life color reproduction.',
    fullDesc: 'Experience breathtaking photographic prints with deep contrast, vivid highlights, and accurate skin tones. Printed on premium 260-300 GSM photo papers utilizing high-density 8-color and 12-color archival pigment printers.',
    suitableFor: [
      'Photographers & Studio Portfolios',
      'Family Albums & Vacation Photo Prints',
      'Exhibition & Gallery Wall Displays',
      'Personal Scrapbooking & Memorabilia'
    ],
    customizations: [
      'Glossy, Satin Luster & Velvet Fine Art Matte',
      'Sizes: 4x6, 5x7, 6x8, 8x10, 8x12, 12x18, 20x30 in',
      'Bordered or Borderless Edge-to-Edge Print',
      'Professional Lighting & Contrast Correction',
      'Protective UV Lamination Coat'
    ],
    features: [
      'Studio Quality 2400+ DPI Precision',
      'Fade-Proof Pigment Inks for Decades',
      'Glossy, Luster & Velvet Matte Paper Choices',
      'Accurate CMYK & RGB Color Calibration',
      'Instant Printing Available on Spot'
    ],
    popular: false,
    standardTurnaround: 'Instant (15 mins) to 2 Hours',
    specifications: '4x6 in up to 24x36 in | 260-300 GSM Archival Photo Paper',
    iconName: 'Camera',
    imageUrl: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '08',
    id: 'passport-photo',
    title: 'Passport Size Photo',
    category: 'photo',
    categoryLabel: 'Photo',
    shortDesc: 'Instant official passport, visa, and document photos compliant with government standards.',
    fullDesc: 'Get fast, professionally cropped passport and visa photos meeting strict biometric requirements for Indian passports, international visas, government exams, and identity cards. Includes background replacement and digital soft copies.',
    suitableFor: [
      'Indian Passport, PAN Card & Driving License',
      'US, Schengen, Canada & Gulf Visa Applications',
      'Government Job & Competitive Exam Forms',
      'School, College & University Admissions'
    ],
    customizations: [
      'White, Light Blue, Light Grey or Red Backgrounds',
      'Standard 35x45 mm, 2x2 inch & Stamp Sizes',
      'Sets of 8, 16, 32, or 48 Photos on High-Gloss Paper',
      'Instant Soft Copy Sent to WhatsApp or Email',
      'Quick Blemish & Lighting Touch-Up'
    ],
    features: [
      'Ready in 5 to 10 Minutes on the Spot',
      'Strict Biometric 70-80% Face Ratio Compliance',
      'Seamless Background Replacement',
      'High-Gloss Non-Smudge Photo Paper',
      'Includes Digital HD Copy on Request'
    ],
    popular: false,
    standardTurnaround: '5 to 10 Minutes',
    specifications: '35x45 mm / 2x2 in / Stamp Size | 280 GSM Glossy Paper',
    iconName: 'UserCheck',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '09',
    id: 'invitation-card',
    title: 'Invitation Card',
    category: 'wedding',
    categoryLabel: 'Wedding',
    shortDesc: 'Custom invitation cards for birthdays, housewarmings, ceremonies, and corporate events.',
    fullDesc: 'Design custom-themed invitations for every life celebration. From Griha Pravesh (Housewarming), Mundan, Annaprashan, and Birthday Bashes to Corporate Anniversaries and School Annual Days. Complete with custom printed matching envelopes.',
    suitableFor: [
      'Griha Pravesh & Housewarming Celebrations',
      'Kids & Adult Birthday Parties',
      'Thread & Traditional Religious Ceremonies',
      'Corporate Gatherings & Inaugurations'
    ],
    customizations: [
      'Theme-Matched Graphic Designs',
      'Single-Sided, Double-Sided or Foldable Cards',
      'Gloss, Matte, Texture & Linen Card Stocks',
      'Custom Printed Outer Envelopes',
      'Bilingual Text Layouts & Custom Fonts'
    ],
    features: [
      'Creative Theme Graphic Customization',
      'Premium 300 GSM Textured & Matte Boards',
      'Printed Matching Envelopes',
      'Speedy Digital Proofing & Revisions',
      'Small & Bulk Quantities Available'
    ],
    popular: false,
    standardTurnaround: '24 to 48 Hours',
    specifications: '5x7 in / 4x6 in / Folded Formats | 300 GSM Art Card',
    iconName: 'Mail',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '10',
    id: 'pamphlet-flyer',
    title: 'Pamphlet & Flyer',
    category: 'advertising',
    categoryLabel: 'Advertisement',
    shortDesc: 'Promotional flyers, brochures, and marketing handouts for businesses and institutes.',
    fullDesc: 'Reach customers at scale with crisp, vibrant promotional flyers and pamphlets. High-speed digital and offset printing on art paper or maplitho paper. Ideal for coaching institutes, restaurants, retail sales, healthcare centers, and local marketing.',
    suitableFor: [
      'Coaching Centers, Schools & Tutors',
      'Restaurants, Cafes & Food Delivery Menus',
      'Retail Stores, Showrooms & Seasonal Sales',
      'Real Estate, Clinics & Financial Services'
    ],
    customizations: [
      'A4, A5, A6 & Custom Dimensions',
      'Single-Sided, Both-Sided, Bi-Fold & Tri-Fold Brochures',
      'Paper: 70-90 GSM Maplitho or 100-170 GSM Art Paper',
      'Full Color (CMYK) or Single-Color Economical Offset',
      'Professional Layout & Copy Setting Assistance'
    ],
    features: [
      'Ultra Sharp Typography & Visuals',
      'Cost-Effective Large-Batch Bulk Printing',
      'Choice of Lightweight Handouts or Gloss Art Papers',
      'Bi-fold, Tri-fold & Multi-Panel Folding',
      'Fast Digital Short-Runs & Large Offset Runs'
    ],
    popular: true,
    standardTurnaround: '24 Hours (Digital) / 2-3 Days (Bulk Offset)',
    specifications: 'A4, A5, A6 | 80 GSM Maplitho to 170 GSM Gloss Art',
    iconName: 'FileText',
    imageUrl: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '11',
    id: 'letterhead-envelope',
    title: 'Letterhead & Envelope',
    category: 'business',
    categoryLabel: 'Business',
    shortDesc: 'Corporate stationery, executive letterheads, and customized branded business envelopes.',
    fullDesc: 'Build trust with official branded corporate stationery. Our letterheads and envelopes are printed on smooth executive bond paper and premium textured stocks, ensuring smooth compatibility with office laser and inkjet printers.',
    suitableFor: [
      'Corporate Offices & Consultancies',
      'Law Firms, CA Practices & Medical Clinics',
      'Educational Institutions & Non-Profits',
      'Official Invoicing, Contracts & Proposals'
    ],
    customizations: [
      'A4 Letterheads on 100-120 GSM Executive Bond Paper',
      'Envelopes in DL (9x4 in), A4 Document Size & Custom Sizes',
      'Subtle Watermark & Numbering Options',
      'Full Color Logo Matching & Crisp Lines',
      'Windowed or Solid Executive Envelopes'
    ],
    features: [
      '100-120 GSM Smooth Executive Bond Paper',
      'Laser & Inkjet Printer Guaranteed Smooth Feed',
      'High-Adhesion Peel & Seal Envelopes',
      'Precise Corporate Brand Color Matching',
      'Available in 100 to 5000+ Quantity Batches'
    ],
    popular: false,
    standardTurnaround: '24 to 48 Hours',
    specifications: 'A4 Letterhead | DL & 9x4 Envelopes | 100-120 GSM Bond',
    iconName: 'Briefcase',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '12',
    id: 'certificate-printing',
    title: 'Certificate Printing',
    category: 'school_office',
    categoryLabel: 'School & Office',
    shortDesc: 'Prestigious award certificates, diplomas, and appreciation documents with security borders.',
    fullDesc: 'Honor achievement with distinguished certificate printing. Crafted on heavy ivory, royal linen, parchment, and metallic cardstocks with optional gold foil embossed seals, variable recipient name printing, and intricate anti-copy guilloche borders.',
    suitableFor: [
      'Schools, Colleges & Training Institutes',
      'Sports Tournaments & Athletic Competitions',
      'Corporate Employee Awards & Workshops',
      'Conferences, Seminars & NGO Recognitions'
    ],
    customizations: [
      'A4 & A3 Formats on 250-350 GSM Textured Stock',
      'Metallic Gold, Silver & Bronze Foil Embossed Seals',
      'Variable Data Printing (Names & Roll Numbers from Excel)',
      'Security Borders & Anti-Counterfeit Backgrounds',
      'Certificate Presentation Folders & Hard Covers'
    ],
    features: [
      'Heavyweight 250-350 GSM Linen / Ivory Stock',
      'Rich Foil Stamping & Embossing Seals',
      'Automated Variable Name Merging Support',
      'Smudge-Proof & Archival Grade Inks',
      'Protective Flat Packaging to Prevent Creasing'
    ],
    popular: false,
    standardTurnaround: '24 to 48 Hours',
    specifications: 'A4 / A3 | 300 GSM Royal Linen / Ivory Board',
    iconName: 'Award',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '13',
    id: 'school-office-id-cards',
    title: 'School & Office ID Card',
    category: 'school_office',
    categoryLabel: 'School & Office',
    shortDesc: 'End-to-end institutional ID card designing, student database processing, and bulk lanyard printing.',
    fullDesc: 'Comprehensive identification solutions for educational institutions and corporate enterprises. We handle large student and staff databases, photo processing, high-density PVC printing, custom woven lanyards with school logos, and durable clips.',
    suitableFor: [
      'Schools, High Schools & Colleges',
      'Coaching Centers & Competitive Institutes',
      'Corporate Campuses, Factories & Hospitals',
      'Transportation & Event Security Personnel'
    ],
    customizations: [
      'Complete Institution Database & Photo Processing',
      'Custom Multi-Color Woven / Sublimation Lanyards',
      'Color-Coded Badges for Different Classes or Departments',
      'Emergency Contact, Blood Group & Barcode Inclusion',
      'Protective Acrylic Sleeves & Retractable Reels'
    ],
    features: [
      'Bulk Student & Staff Database Handling',
      'Thermal Fused Scratch-Resistant PVC Cards',
      'Custom Printed Ribbon Lanyards with Safety Buckles',
      'Barcode, QR Code & Serial Number Integration',
      'Annual Institutional Re-order & Replacement Support'
    ],
    popular: false,
    standardTurnaround: '2 to 5 Days for Bulk Batches',
    specifications: 'CR80 PVC Cards with Customized Branded Lanyards',
    iconName: 'GraduationCap',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '14',
    id: 'custom-printing',
    title: 'Custom Printing',
    category: 'custom',
    categoryLabel: 'Custom',
    shortDesc: 'Custom print solutions including bill books, self-inking stamps, mugs, keychains, and marketing novelties.',
    fullDesc: 'Have a personalized or specialized printing requirement? We offer custom carbonless bill books, cash memos, polymer and self-inking rubber stamps, ceramic coffee mug sublimation, acrylic keychains, canopy tents, and branded promotional merchandise.',
    suitableFor: [
      'Retail Stores needing Bill Books & Cash Memos',
      'Doctors, CA & Offices needing Rubber Stamps',
      'Personalized Gifting for Birthdays & Anniversaries',
      'Exhibitions & Outdoor Promotional Canopies'
    ],
    customizations: [
      'Carbonless (NCR) Duplicate & Triplicate Bill Books',
      'Self-Inking & Wooden Handle Rubber Stamps',
      'Custom Mug Sublimation with Photos & Quotes',
      'Branded Keychains, Badges & Promotional Novelties',
      'Canopy Tents & Outdoor Promotional Kiosks'
    ],
    features: [
      'Tailored Completely to Your Exact Specifications',
      'Numbered Pages & Perforated Tear-Off Receipts',
      'Instant Self-Inking Rubber Stamps in Red/Blue/Black',
      'Dishwasher-Safe Sublimation Ceramics',
      'Consultation & Design Mockup Assistance'
    ],
    popular: false,
    standardTurnaround: '1 to 3 Days',
    specifications: 'Custom Built according to project requirements',
    iconName: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
  },
];
