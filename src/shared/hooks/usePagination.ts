import { useState } from 'react';

export const usePagination = (totalPages: number, visiblePages: number = 5) => {
  const [active, setActive] = useState<number>(1);

  const next = () => setActive(Math.min(active + 1, totalPages));
  const prev = () => setActive(Math.max(active - 1, 1));

  const startPage = Math.floor((active - 1) / visiblePages) * visiblePages + 1;
  const endPage = Math.min(startPage + visiblePages - 1, totalPages);

  return { active, startPage, endPage, next, prev, setActive };
};
