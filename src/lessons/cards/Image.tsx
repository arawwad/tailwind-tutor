import { classNameWithTooltip } from '../../utils';

function CardImage() {
  return (
    <div
      {...classNameWithTooltip(
        'max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden'
      )}
    >
      <img
        src="https://placehold.co/400x200"
        alt="Card Image"
        {...classNameWithTooltip('w-full h-40 object-cover')}
      />
      <div {...classNameWithTooltip('p-4')}>
        <h2 {...classNameWithTooltip('text-lg font-bold text-gray-800')}>
          Card with Image
        </h2>
        <p {...classNameWithTooltip('mt-2 text-gray-600')}>
          This card has an image and content below it.
        </p>
        <button
          {...classNameWithTooltip(
            'mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
          )}
        >
          View More
        </button>
      </div>
    </div>
  );
}

export default CardImage;

export const initialCode = `
<div class="">
  <img src="https://placehold.co/400x200" alt="Card Image" class="">
  <div class="">
    <h2 class="">Card with Image</h2>
    <p class="">This card has an image and content below it.</p>
    <button class="">View More</button>
  </div>
</div>

`;
