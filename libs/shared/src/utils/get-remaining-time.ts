export const getRemainingTime = (start: number, current: number, interval: number) => interval - ((current - start) % interval);
