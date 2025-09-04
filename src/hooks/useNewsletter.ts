/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 12-08-2025 - 04-09-2025
 *
 * 📌 Description:
 *   Custom hook for handling newsletter subscription logic
 *   with form validation and submission state management.
 * --------------------------------------------------------
 */

import { validateEmail } from '@/utils/helpers';
import { useState } from 'react';

/**
 * useNewsletter Hook
 * 
 * Manages newsletter subscription form state and handling.
 * Includes email validation and subscription status.
 *
 * @returns {Object} Newsletter state and handlers
 * 
 * @example
 * const { email, setEmail, isSubscribing, message, handleSubscribe } = useNewsletter();
 */
export const useNewsletter = () => {
  // ⚙️ States
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [message, setMessage] = useState('');

  /**
   * Handles newsletter subscription form submission
   * @param {React.MouseEvent<HTMLAnchorElement>} e - Click event
   */
  const handleSubscribe = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent the default button behavior
    e.preventDefault();
    e.stopPropagation();

    if (!email || !validateEmail(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);
    setMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Subscribe with email:', email);
      setMessage('Thank you for subscribing to our newsletter!');
      setEmail('');
    } catch (error) {
      setMessage('Failed to subscribe. Please try again.');
      console.error('Error subscribing:', error);
    } finally {
      setIsSubscribing(false);
    }
  };

  return {
    email,
    setEmail,
    isSubscribing,
    message,
    handleSubscribe
  };
};

/**
 * 📌 Notes:
 * - Implements email validation
 * - Handles form submission state
 * - Provides feedback messages
 */
