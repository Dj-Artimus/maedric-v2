/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 12-08-2025 - 04-09-2025
 *
 * 📌 Description:
 *   Custom hook for managing jewelry category selection state
 *   with type safety and controlled state updates.
 * --------------------------------------------------------
 */

import { useState } from 'react';

/**
 * Available jewelry category types
 */
export type CategoryType = 'Bridal' | 'Boutique' | 'Gemstone';

/**
 * useCategorySelection Hook
 *
 * Manages the selected jewelry category state with TypeScript
 * type safety and controlled state updates.
 *
 * @param {CategoryType} initialCategory - Initial selected category
 * @returns {Object} Category selection state and handlers
 *
 * @example
 * const { selectedCategory, setSelectedCategory } = useCategorySelection('Bridal');
 */
export const useCategorySelection = (initialCategory: CategoryType = 'Bridal') => {
  // ⚙️ States
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(initialCategory);

  return {
    selectedCategory,
    setSelectedCategory,
  };
};

/**
 * 📌 Notes:
 * - Implements TypeScript type safety
 * - Provides controlled state updates
 * - Supports default category
 */
