import { classNameWithTooltip } from '../../utils';

export default function () {
  return (
    <div
      {...classNameWithTooltip(
        'flex max-w-lg bg-white border border-gray-200 rounded-lg shadow'
      )}
    >
      <img
        src="https://placehold.co/150"
        alt="Card image"
        {...classNameWithTooltip('w-32 h-full object-cover rounded-l-lg')}
      />
      <div data-tooltip-id="hints" data-tooltip-content="p-4" className="p-4">
        <h3 {...classNameWithTooltip('text-lg font-bold')}>Horizontal Card</h3>
        <p {...classNameWithTooltip('mt-2 text-sm text-gray-600')}>
          This card is laid out horizontally with an image on the left.
        </p>
      </div>
    </div>
  );
}

export const initialCode = `<div class="">
  <img
    src="https://placehold.co/150"
    alt="Card image"
    class=""
  />
  <div class="">
    <h3 class="">Horizontal Card</h3>
    <p class="">
      This card is laid out horizontally with an image on the left.
    </p>
  </div>
</div>`;
