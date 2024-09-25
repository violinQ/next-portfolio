import { useEffect, useState } from 'react';

/**
 * Hook to track the scroll progress of the page
 * @returns The scroll progress in percentage
 */
export function useScrollProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100,
        );
      }
    };

    // bind event
    window.addEventListener('scroll', updateScrollCompletion);
    // unbind event
    return () => window.removeEventListener('scroll', updateScrollCompletion);
  }, []);

  return completion;
}
