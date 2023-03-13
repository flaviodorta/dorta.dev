import gsap from 'gsap';
import { atom } from 'recoil';

export const transition = atom({
  key: 'transition',
  default: false,
});

export const animation = atom({
  key: 'animation',
  default: false,
});

export const homeTimeline = atom<GSAPTimeline>({
  key: 'home-timeline',
  default: gsap.timeline(),
});
