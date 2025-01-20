export default function () {
  return (
    <div
      data-tooltip-id="hints"
      data-tooltip-content="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
    >
      <div data-tooltip-id="hints" data-tooltip-content="p-4" className="p-4">
        <h3
          data-tooltip-id="hints"
          data-tooltip-content="text-lg font-bold"
          className="text-lg font-bold"
        >
          Card with Actions
        </h3>
        <p
          data-tooltip-id="hints"
          data-tooltip-content="mt-2 text-sm text-gray-600"
          className="mt-2 text-sm text-gray-600"
        >
          This card includes buttons for actions.
        </p>
      </div>
      <div
        data-tooltip-id="hints"
        data-tooltip-content="flex space-x-2 border-t border-gray-200 p-4"
        className="flex space-x-2 border-t border-gray-200 p-4"
      >
        <button
          data-tooltip-id="hints"
          data-tooltip-content="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Approve
        </button>
        <button
          data-tooltip-id="hints"
          data-tooltip-content="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
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
