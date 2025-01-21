import { classNameWithTooltip } from '../../utils';

export function CardsBasic() {
  return (
    <div
      {...classNameWithTooltip(
        'max-w-sm mx-auto bg-white p-4 rounded-lg shadow-md'
      )}
    >
      <h2 {...classNameWithTooltip('text-xl font-bold text-gray-800')}>
        Basic Card
      </h2>
      <p {...classNameWithTooltip('mt-2 text-gray-600')}>
        This is a simple card with a description and a button.
      </p>
      <button
        {...classNameWithTooltip(
          'mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
        )}
      >
        Learn More
      </button>
    </div>
  );
}

export const initialCode = `<div class="">
  <h2 class="">Basic Card</h2>
  <p class="">This is a simple card with a description and a button.</p>
  <button class="">Learn More</button>
</div>
`;

export default CardsBasic;
