export const wait = (milliseconds: number): unknown => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
