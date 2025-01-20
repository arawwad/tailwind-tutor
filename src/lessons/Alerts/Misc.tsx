export default function () {
  return (
    <div className="max-w-md mx-auto space-y-4">
      <div
        data-tooltip-id="hints"
        data-tooltip-content="bg-blue-100 border border-blue-300 text-blue-800 p-4 rounded"
        className="bg-blue-100 border border-blue-300 text-blue-800 p-4 rounded"
      >
        Informational alert message.
      </div>

      <div
        data-tooltip-id="hints"
        data-tooltip-content="bg-green-100 border border-green-300 text-green-800 p-4 rounded"
        className="bg-green-100 border border-green-300 text-green-800 p-4 rounded"
      >
        Success! Your action was completed.
      </div>

      <div
        data-tooltip-content="bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded"
        data-tooltip-id="hints"
        className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded"
      >
        Warning! There might be an issue.
      </div>

      <div
        data-tooltip-content="max-w-md mx-auto bg-red-100 border border-red-300 text-red-800 p-4 rounded relative"
        data-tooltip-id="hints"
        className="max-w-md mx-auto bg-red-100 border border-red-300 text-red-800 p-4 rounded relative"
      >
        <span>This is a dismissible error alert.</span>
        <button
          data-tooltip-content="absolute top-2 right-2 text-red-800 hover:text-red-600"
          data-tooltip-id="hints"
          className="absolute top-2 right-2 text-red-800 hover:text-red-600"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export const initialCode = `
<div class="max-w-md mx-auto space-y-4">
      <div class="">
        Informational alert message.
      </div>

      <div class="">
        Success! Your action was completed.
      </div>

      <div class="">
        Warning! There might be an issue.
      </div>

      <div class="">
        <span>This is a dismissible error alert.</span>
        <button class="">
          &times;
        </button>
      </div>
    </div>
`;
