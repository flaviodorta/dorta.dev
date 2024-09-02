'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useEventListener } from 'usehooks-ts';

type SidebarActiveContextType = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  addRefs: (el: HTMLElement) => void;
  offsetTop: number[];
  setOffsetTop: Function;
  refs: HTMLElement[];
};

const SidebarActiveContext = createContext<SidebarActiveContextType>({
  selected: '',
  setSelected: () => {},
  addRefs: () => {},
  offsetTop: [],
  setOffsetTop: () => {},
  refs: [],
});

const SidebarActiveProvider = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState('');

  // ajeitar depois o offsetTop para o scroll dos elementos
  const [offsetTop, setOffsetTop] = useState([]);

  const refs = useRef<HTMLElement[]>([]);
  const addRefs = (el: HTMLElement) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  const options = {
    threshold: 0.4,
  };

  const cb = (entries: any[]) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting)
        if (entry.target.id !== 'home') setSelected(entry.target.id);
    });
  };

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const cb = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id !== 'home') {
            setSelected(entry.target.id);
          }
        });
      };
      observer.current = new IntersectionObserver(cb, options);
      refs.current.forEach((section) => observer.current?.observe(section));
    }

    return () => observer.current?.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (!selected && observer.current) {
      refs.current.forEach((section) => observer.current!.observe(section));
    } else {
      observer.current?.disconnect();
    }
  }, [selected]);

  // mudar o sidebar link durante o scroll
  useEventListener('scroll', () => {
    const scrollY = window.scrollY;

    refs.current.forEach((el, idx) => {
      if (
        idx !== 3 &&
        el &&
        scrollY >= el?.offsetTop - 400 &&
        scrollY <= el?.offsetTop + el?.offsetHeight
      ) {
        setSelected(el.id);
      }

      if (scrollY > 3500) setSelected(refs.current[3].id);
    });

    if (scrollY === 0) setSelected('home');
  });

  return (
    <SidebarActiveContext.Provider
      value={{
        selected,
        setSelected,
        addRefs,
        setOffsetTop,
        offsetTop,
        refs: refs.current,
      }}
    >
      {children}
    </SidebarActiveContext.Provider>
  );
};

export default SidebarActiveProvider;

export const useSidebarActive = () => useContext(SidebarActiveContext);
