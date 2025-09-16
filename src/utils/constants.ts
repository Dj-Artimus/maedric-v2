export interface JewelleryItem {
  id: string;
  name: string;
  image: string;
  category?: string;
}

export interface CollectionItem {
  id: string;
  name: string;
  image: string;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

// Jewellery categories data
export const JEWELLERY_CATEGORIES: JewelleryItem[] = [
  { id: '1', name: 'Rings', image: '/images/jewelleryTypeRing.png' },
  { id: '2', name: 'Earrings', image: '/images/jewelleryTypeEarrings.png' },
  { id: '3', name: 'Necklace', image: '/images/jewelleryTypeNecklace.png' },
  { id: '4', name: 'Bracelet', image: '/images/jewelleryTypeBracelet.png' },
  { id: '5', name: 'Brooch', image: '/images/jewelleryTypeBrooch.png' }
];

// Collections data
export const COLLECTIONS: CollectionItem[] = [
  { id: '1', name: 'Collection 1', image: '/images/collection1.png' },
  { id: '2', name: 'Collection 2', image: '/images/collection2.png' },
  { id: '3', name: 'Collection 3', image: '/images/collection3.png' },
  { id: '4', name: 'Collection 4', image: '/images/collection4.png' }
];

// Popular products data
export const POPULAR_PRODUCTS: ProductItem[] = [
  { id: '1', name: 'Product Name', description: 'This 0.90ct Pigeonblood Red Ruby ring has a spread of diamonds that enhances its firey nature, creating a ring that echoes the feel of a blazing sun.', image: '/images/popularJewellery1.png' },
  { id: '2', name: 'Product Name', description: 'This 2.44ct Zambian Emerald ring is a real blingy showstopper to take to weddings or fancy events. The large diamonds complement the Emerald for a stunning package.', image: '/images/popularJewellery2.png' },
  { id: '3', name: 'Product Name', description: 'This natural fancy yellow unheated Sapphire ring makes a good piece to wear on a dinner night out with friends. The stones excellent proportions and cut gives it a great luster.', image: '/images/popularJewellery3.png' },
  { id: '4', name: 'Product Name', description: 'This flower design silver and CZ ring makes a lovely piece for daily wear', image: '/images/popularJewellery4.png' }
];

// Process steps data
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '1',
    title: 'Meet & Greet',
    description: 'We begin with a warm conversation over coffee or tea to learn about you, your story, and what you envision for your piece. We will discuss your preferences, budget, and materials.'
  },
  {
    number: '2',
    title: 'Sketch and Prototyping',
    description: 'Before our design consultation, you may bring a written description, a sketch, or an image. We will start with rough sketches to establish a design, followed by refinement through your feedback.'
  },
  {
    number: '3',
    title: 'Brass Tacks and Deposit',
    description: 'We will create an overview of timing milestones for your piece\'s timely arrival. Depending on complexity, a deposit of 50%—70% is required to commence the 3d modelling process.'
  },
  {
    number: '4',
    title: 'Refinement & Approval',
    description: 'During the refinement process, you will routinely receive 3d renders and a realistic resin model of your design to confirm fit and sizing as we refine your piece.',
  },
  {
    number: '5',
    title: 'Creation & Polishing',
    description: 'The creation process lasts over 4 to 8 weeks, with regular updates like process photos included. Note that complex designs may take longer.'
  },
  {
    number: '6',
    title: 'Completion & Delivery',
    description: 'Maedric will deliver your bespoke piece with care, along with instructions on how to care for your piece and any certification if applicable.'
  }
];
