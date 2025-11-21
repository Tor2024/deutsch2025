
'use client';

import { useState, useEffect, useCallback } from 'react';

type ProgressData = {
  [key: string]: number; // topicId: proficiency
};

const getInitialProgress = (): ProgressData => {
  if (typeof window === 'undefined') {
    return {};
  }
  try {
    const item = window.localStorage.getItem('userProgress');
    return item ? JSON.parse(item) : {};
  } catch (error) {
    console.error('Error reading from localStorage', error);
    return {};
  }
};

export function useUserProgress(topicId?: string) {
  const [progress, setProgress] = useState<ProgressData>(getInitialProgress);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleStorageChange = () => {
        setProgress(getInitialProgress());
      };
      window.addEventListener('storage', handleStorageChange);
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }
  }, []);

  const setTopicProficiency = useCallback((proficiency: number) => {
    if (topicId) {
        setProgress(currentProgress => {
            const newProgress = { ...currentProgress, [topicId]: Math.max(0, Math.min(100, proficiency)) };
            try {
                window.localStorage.setItem('userProgress', JSON.stringify(newProgress));
                // Dispatch a storage event to sync tabs
                window.dispatchEvent(new Event('storage'));
            } catch (error) {
                console.error('Error writing to localStorage', error);
            }
            return newProgress;
        });
    }
  }, [topicId]);
  
  const getTopicProficiency = useCallback((id: string) => {
    return progress[id] || 0;
  }, [progress]);

  const proficiency = topicId ? progress[topicId] || 0 : 0;

  return { progress, proficiency, setTopicProficiency, getTopicProficiency };
}
