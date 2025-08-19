export interface JewelryItem {
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
  bgImage: string;
}

// Jewelry categories data
export const JEWELRY_CATEGORIES: JewelryItem[] = [
  { id: '1', name: 'Ring', image: '/images/img_image_7.png' },
  { id: '2', name: 'Earrings', image: '/images/img_image_4.png' },
  { id: '3', name: 'Necklace', image: '/images/img_image_5.png' },
  { id: '4', name: 'Bracelet', image: '/images/img_image_6.png' }
];

// Collections data
export const COLLECTIONS: CollectionItem[] = [
  { id: '1', name: 'Collection 1', image: '/images/img_image_13.png' },
  { id: '2', name: 'Collection 2', image: '/images/img_image_14.png' },
  { id: '3', name: 'Collection 3', image: '/images/img_image_15.png' },
  { id: '4', name: 'Collection 4', image: '/images/img_image_16.png' }
];

// Popular products data
export const POPULAR_PRODUCTS: ProductItem[] = [
  { id: '1', name: 'Product Name', description: 'Placeholder text goes here', image: '/images/img_image_22.png' },
  { id: '2', name: 'Product Name', description: 'Placeholder text goes here', image: '/images/img_image_23.png' },
  { id: '3', name: 'Product Name', description: 'Placeholder text goes here', image: '/images/img_image_24.png' },
  { id: '4', name: 'Product Name', description: 'Placeholder text goes here', image: '/images/img_image_25.png' }
];

// Process steps data
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '1',
    title: 'Meet & Greet',
    description: 'We begin with a warm conversation over coffee or tea to learn about you, your story, and what you envision for your piece. We will discuss your preferences, budget, and materials.',
    bgImage: '/images/img_vector_7.svg'
  },
  {
    number: '2',
    title: 'Sketch and Prototyping',
    description: 'Before our design consultation, you may bring a written description, a sketch, or an image. We will start with rough sketches to establish a design, followed by refinement through your feedback.',
    bgImage: '/images/img_vector_7_yellow_800.svg'
  },
  {
    number: '3',
    title: 'Brass Tacks and Deposit',
    description: 'We will create an overview of timing milestones for your piece\'s timely arrival. Depending on complexity, a deposit of 50%—70% is required to commence the 3d modelling process.',
    bgImage: '/images/img_vector_7.svg'
  },
  {
    number: '4',
    title: 'Refinement & Approval',
    description: 'During the refinement process, you will routinely receive 3d renders and a realistic resin model of your design to confirm fit and sizing as we refine your piece.',
    bgImage: '/images/img_vector_7_yellow_800.svg'
  },
  {
    number: '5',
    title: 'Creation & Polishing',
    description: 'The creation process lasts over 4 to 8 weeks, with regular updates like process photos included. Note that complex designs may take longer.',
    bgImage: '/images/img_vector_7.svg'
  },
  {
    number: '6',
    title: 'Completion & Delivery',
    description: 'Maedric will deliver your bespoke piece with care, along with instructions on how to care for your piece and any certification if applicable.',
    bgImage: '/images/img_vector_7_yellow_800.svg'
  }
];
