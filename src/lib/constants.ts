export const BLUR_FADE_DELAY = 0.04;

export function getBlurFadeDelay(baseDelay: number, index: number = 0): number {
  return BLUR_FADE_DELAY * baseDelay + index * 0.05;
}
