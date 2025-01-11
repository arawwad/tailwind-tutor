import html2canvas from 'html2canvas';
import pixelmatch from 'pixelmatch';

export interface InitialData {
  width: number;
  height: number;
  baseImage: Uint8ClampedArray;
  diffImage: Uint8ClampedArray;
}

export async function initialize(): Promise<InitialData> {
  const target = document.getElementById('target')!;
  const canvas1 = await html2canvas(target);
  const { height, width } = canvas1;
  const img1 = canvas1.getContext('2d')!.getImageData(0, 0, width, height);

  const diffCanvas = document.createElement('canvas');
  diffCanvas.setAttribute('willReadFrequently', 'true');
  document.body.appendChild(diffCanvas);

  diffCanvas.width = width;
  diffCanvas.height = height;
  const diffContext = diffCanvas.getContext('2d')!;
  const diffImageData = diffContext.createImageData(width, height);

  return { width, height, baseImage: img1.data, diffImage: diffImageData.data };
}

export async function testPassed({
  width,
  height,
  baseImage,
  diffImage,
}: InitialData) {
  const div2 = document.getElementById('preview')!;
  const canvas2 = await html2canvas(div2);
  const img2 = canvas2.getContext('2d')!.getImageData(0, 0, width, height);

  // Compare the two images using pixelmatch
  const numDiffPixels = pixelmatch(
    baseImage,
    img2.data,
    diffImage,
    width,
    height,
    { threshold: 0.1 }
  );

  return numDiffPixels === 0;
}
