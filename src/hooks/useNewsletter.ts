import { validateEmail } from '@/utils/helpers';
import { useState } from 'react';

export const useNewsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
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
    } finally {
      setIsSubscribing(false);
    }
  };

  const resetMessage = () => {
    setMessage('');
  };

  return {
    email,
    setEmail,
    isSubscribing,
    message,
    handleSubscribe,
    resetMessage
  };
};
