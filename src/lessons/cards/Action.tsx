import { classNameWithTooltip } from '../../utils';

export default function () {
  return (
    <div
      {...classNameWithTooltip(
        'max-w-sm bg-white border border-gray-200 rounded-lg shadow'
      )}
    >
      <div {...classNameWithTooltip('p-4')}>
        <h3 {...classNameWithTooltip('text-lg font-bold')}>
          Card with Actions
        </h3>
        <p {...classNameWithTooltip('mt-2 text-sm text-gray-600')}>
          This card includes buttons for actions.
        </p>
      </div>
      <div
        {...classNameWithTooltip('flex space-x-2 border-t border-gray-200 p-4')}
      >
        <button
          {...classNameWithTooltip(
            'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
          )}
        >
          Approve
        </button>
        <button
          {...classNameWithTooltip(
            'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
          )}
        >
          Reject
        </button>
      </div>
    </div>
  );
}

export const initialCode = `<div class="">
  <div class="">
    <h3 class="">Card with Actions</h3>
    <p class="">
      This card includes buttons for actions.
    </p>
  </div>
  <div class="">
    <button class="">
      Approve
    </button>
    <button class="">
      Reject
    </button>
  </div>
</div>`;
