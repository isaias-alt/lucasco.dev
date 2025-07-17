import { size, contentType, generateHomeImage } from "../og/generateImage";

export const dynamic = "force-static";
export const alt = "Lucas Casco - Software Developer";
export { size, contentType };

export default async function Image() {
  return generateHomeImage();
}
