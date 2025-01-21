import { classNameWithTooltip } from '../../utils';

export default function () {
  return (
    <div className="max-w-md mx-auto space-y-4">
      <div
        {...classNameWithTooltip(
          'bg-blue-100 border border-blue-300 text-blue-800 p-4 rounded'
        )}
      >
        Informational alert message.
      </div>

      <div
        {...classNameWithTooltip(
          'bg-green-100 border border-green-300 text-green-800 p-4 rounded'
        )}
      >
        Success! Your action was completed.
      </div>

      <div
        {...classNameWithTooltip(
          'bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded'
        )}
      >
        Warning! There might be an issue.
      </div>

      <div
        {...classNameWithTooltip(
          'max-w-md mx-auto bg-red-100 border border-red-300 text-red-800 p-4 rounded relative'
        )}
      >
        <span>This is a dismissible error alert.</span>
        <button
          {...classNameWithTooltip(
            'absolute top-2 right-2 text-red-800 hover:text-red-600'
          )}
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
