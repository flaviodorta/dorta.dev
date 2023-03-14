export const timeout = async (cb: () => void, delay: number) => {
  await new Promise(() => setTimeout(cb, delay));
};
