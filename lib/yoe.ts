export const CAREER_START = new Date("2016-10-03");

export function yearsOfExperience(now: Date = new Date()): number {
  const ms = now.getTime() - CAREER_START.getTime();
  return Math.round(ms / (1000 * 60 * 60 * 24 * 365.25));
}
