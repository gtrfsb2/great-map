import { useState, useEffect } from 'react';
import { archiveData, ClusterData } from '../data/archiveData';

export interface TermData extends ClusterData {
  editingDescription?: string;
}

const STORAGE_KEY = 'archive-terms';

export function useTerms() {
  const [terms, setTerms] = useState<TermData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Загрузка из localStorage при монтировании
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setTerms(JSON.parse(saved));
      } catch {
        setTerms(archiveData);
      }
    } else {
      setTerms(archiveData);
    }
    setIsLoaded(true);
  }, []);

  // Сохранение в localStorage при изменении
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(terms));
    }
  }, [terms, isLoaded]);

  const updateTermDescription = (termId: string, newDescription: string) => {
    setTerms((prev) =>
      prev.map((term) =>
        term.id === termId ? { ...term, description: newDescription } : term
      )
    );
  };

  const updateTermTitle = (termId: string, newTitle: string) => {
    setTerms((prev) =>
      prev.map((term) =>
        term.id === termId ? { ...term, title: newTitle } : term
      )
    );
  };

  const updateItemDescription = (termId: string, itemId: string, newDescription: string) => {
    setTerms((prev) =>
      prev.map((term) =>
        term.id === termId
          ? {
              ...term,
              items: term.items.map((item) =>
                item.id === itemId ? { ...item, description: newDescription } : item
              ),
            }
          : term
      )
    );
  };

  const swapTerms = (index1: number, index2: number) => {
    if (index1 < 0 || index2 < 0 || index1 >= terms.length || index2 >= terms.length) {
      return;
    }
    const newTerms = [...terms];
    [newTerms[index1], newTerms[index2]] = [newTerms[index2], newTerms[index1]];
    setTerms(newTerms);
  };

  const moveTermUp = (termId: string) => {
    const index = terms.findIndex((t) => t.id === termId);
    if (index > 0) {
      swapTerms(index, index - 1);
    }
  };

  const moveTermDown = (termId: string) => {
    const index = terms.findIndex((t) => t.id === termId);
    if (index < terms.length - 1) {
      swapTerms(index, index + 1);
    }
  };

  const getTermById = (termId: string) => {
    return terms.find((t) => t.id === termId);
  };

  const getTermIndex = (termId: string) => {
    return terms.findIndex((t) => t.id === termId);
  };

  return {
    terms,
    isLoaded,
    updateTermDescription,
    updateTermTitle,
    updateItemDescription,
    moveTermUp,
    moveTermDown,
    getTermById,
    getTermIndex,
    swapTerms,
  };
}
