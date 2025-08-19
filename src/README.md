# Maedric Frontend - Project Structure

This document describes the restructured Maedric frontend project following the established project guidelines.

## Folder Structure

```
src/
├── app/
│   └── (routes)/
│       ├── page.tsx                 # Main homepage
│       └── sections/                # Page sections
│           ├── HeroSection.tsx
│           ├── JewelleryTypeSection.tsx
│           ├── CollectionsSection.tsx
│           ├── FeaturedCardsSection.tsx
│           ├── PopularProductsSection.tsx
│           ├── CTASection.tsx
│           ├── ProcessSection.tsx
│           ├── ExperiencesSection.tsx
│           ├── LetsBeginSection.tsx
│           ├── StayConnectedSection.tsx
│           └── NewsletterSection.tsx
├── components/
│   ├── ui/                          # Reusable UI components
│   │   ├── Button.tsx
│   │   └── EditText.tsx
│   └── layout/                      # Layout components
│       ├── Header.tsx
│       └── Footer.tsx
├── hooks/                           # Custom React hooks
│   ├── useNewsletter.ts
│   └── useCategorySelection.ts
├── utils/                           # Utility functions and constants
│   ├── constants.ts
│   └── helpers.ts
└── styles/                          # Global styles
    ├── index.css
    └── tailwind.css
```

## Key Changes Made

### 1. **Component Restructuring**

- Moved `Header` and `Footer` from `components/common/` to `components/layout/`
- Broke down the monolithic `page.tsx` into smaller, maintainable section components
- Each section is now a separate component with single responsibility

### 2. **Data Management**

- Created `utils/constants.ts` to centralize static data
- Moved jewellery categories, collections, products, and process steps data to constants
- Updated all section components to use centralized data

### 3. **Custom Hooks**

- `useNewsletter`: Manages newsletter subscription state and logic
- `useCategorySelection`: Handles category selection in the "Let's Begin" section
- Both hooks follow React best practices and are reusable

### 4. **Utility Functions**

- `formatPrice`: Formats prices with currency
- `truncateText`: Truncates long text
- `generateSlug`: Creates URL-friendly slugs
- `validateEmail`: Validates email format
- `debounce`: Debounces function calls

### 5. **Code Quality Improvements**

- Removed duplicate data definitions
- Improved type safety with TypeScript interfaces
- Better separation of concerns
- More maintainable and testable code structure

## Benefits of New Structure

1. **Maintainability**: Each section is now a separate, focused component
2. **Reusability**: Components and hooks can be easily reused across the application
3. **Testability**: Smaller components are easier to test in isolation
4. **Performance**: Better code splitting and lazy loading opportunities
5. **Team Collaboration**: Multiple developers can work on different sections simultaneously
6. **Scalability**: Easy to add new sections or modify existing ones

## Usage Examples

### Using Constants

```tsx
import { JEWELLERYRY_CATEGORIES } from "@/utils/constants";

const MyComponent = () => {
  return (
    <div>
      {JEWELLERY_CATEGORIES.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))}
    </div>
  );
};
```

### Using Custom Hooks

```tsx
import { useNewsletter } from "@/hooks/useNewsletter";

const NewsletterForm = () => {
  const { email, setEmail, handleSubscribe, isSubscribing } = useNewsletter();
  // ... rest of component
};
```

### Using Utility Functions

```tsx
import { formatPrice, validateEmail } from "@/utils/helpers";

const price = formatPrice(1500); // "SGD 1,500.00"
const isValidEmail = validateEmail("user@example.com"); // true
```

## Next Steps

This restructuring provides a solid foundation for future development. Consider:

1. Adding more custom hooks for common functionality
2. Creating additional utility functions as needed
3. Implementing proper error boundaries
4. Adding unit tests for components and hooks
5. Setting up Storybook for component documentation
6. Implementing proper loading states and error handling

## Guidelines Compliance

This structure fully complies with the project guidelines:

- ✅ Follows the established folder structure
- ✅ Uses proper naming conventions
- ✅ Implements single responsibility principle
- ✅ Separates business logic from UI components
- ✅ Uses custom hooks for state management
- ✅ Centralizes data and utilities
- ✅ Maintains TypeScript type safety
