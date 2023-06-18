export const isEven = (number: number) => number % 2 === 0;

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
