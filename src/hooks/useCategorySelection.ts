import { useState } from 'react';

export type CategoryType = 'Bridal' | 'Boutique' | 'Gemstone';

export const useCategorySelection = (initialCategory: CategoryType = 'Bridal') => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(initialCategory);

  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category);
    // Here you could add additional logic like analytics tracking
    console.log('Category changed to:', category);
  };

  return {
    selectedCategory,
    handleCategoryChange
  };
};
