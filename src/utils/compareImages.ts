import html2canvas from 'html2canvas';
import pixelmatch from 'pixelmatch';
import { MutableRefObject } from 'react';

export async function percentMatching(
  initialDiff: MutableRefObject<null | number>
) {
  const target = document.getElementById('target')!;
  const canvas1 = await html2canvas(target);
  document.body.append(canvas1);
  const { width, height } = canvas1;
  canvas1.classList.add('hidden');

  const [diffCanvas, canvas2] = Array(2)
    .fill(0)
    .map(() => {
      const canvas = document.createElement('canvas');
      document.body.appendChild(canvas);
      canvas.setAttribute('willReadFrequently', 'true');
      canvas.classList.add('hidden');
      canvas.width = width;
      canvas.height = height;
      return canvas;
    });
  const img1 = canvas1.getContext('2d')!.getImageData(0, 0, width, height).data;

  const diffContext = diffCanvas.getContext('2d')!;
  const diffImageData = diffContext.createImageData(width, height);

  const div2 = document.getElementById('preview')!;
  await html2canvas(div2, { canvas: canvas2 });
  const img2 = canvas2.getContext('2d')!.getImageData(0, 0, width, height).data;

  // Compare the two images using pixelmatch
  const numDiffPixels = pixelmatch(
    img1,
    img2,
    diffImageData.data,
    width,
    height,
    {
      threshold: 0.1,
    }
  );

  if (initialDiff.current === null) {
    initialDiff.current = numDiffPixels;
  }

  [diffCanvas, canvas1, canvas2].forEach((canvas) => {
    document.body.removeChild(canvas);
  });

  return 100 * (1 - numDiffPixels / initialDiff.current);
}
