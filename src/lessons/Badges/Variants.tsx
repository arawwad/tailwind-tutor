import { classNameWithTooltip } from '../../utils';

export default function () {
  return (
    <div className="grid  gap-4 py-4 items-start justify-items-start">
      <span
        {...classNameWithTooltip(
          'inline-block px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded-full'
        )}
      >
        Basic
      </span>

      <span
        {...classNameWithTooltip(
          'inline-block px-3 py-1 text-xs font-medium text-blue-500 border border-blue-500 rounded-full'
        )}
      >
        Outline
      </span>

      <span
        {...classNameWithTooltip(
          'inline-flex items-center px-3 py-1 text-xs font-medium text-white bg-green-500 rounded-full'
        )}
      >
        <svg
          {...classNameWithTooltip('w-4 h-4 mr-1')}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        Success
      </span>

      <span
        {...classNameWithTooltip(
          'inline-block px-4 py-1 text-sm font-medium text-white bg-purple-500 rounded-full'
        )}
      >
        Pill Badge
      </span>

      <div {...classNameWithTooltip('flex space-x-2')}>
        <span
          {...classNameWithTooltip(
            'inline-block px-3 py-1 text-xs font-medium text-white bg-green-500 rounded-full'
          )}
        >
          Success
        </span>
        <span
          {...classNameWithTooltip(
            'inline-block px-3 py-1 text-xs font-medium text-white bg-yellow-500 rounded-full'
          )}
        >
          Warning
        </span>
        <span
          {...classNameWithTooltip(
            'inline-block px-3 py-1 text-xs font-medium text-white bg-red-500 rounded-full'
          )}
        >
          Error
        </span>
      </div>

      <div {...classNameWithTooltip('flex items-center space-x-2')}>
        <span {...classNameWithTooltip('relative flex items-center')}>
          <span
            {...classNameWithTooltip(
              'inline-block w-3 h-3 bg-green-500 rounded-full'
            )}
          ></span>
          <span {...classNameWithTooltip('ml-2 text-sm text-gray-600')}>
            Online
          </span>
        </span>
        <span {...classNameWithTooltip('relative flex items-center')}>
          <span
            {...classNameWithTooltip(
              'inline-block w-3 h-3 bg-red-500 rounded-full'
            )}
          ></span>
          <span {...classNameWithTooltip('ml-2 text-sm text-gray-600')}>
            Offline
          </span>
        </span>
      </div>

      <span
        {...classNameWithTooltip(
          'inline-block px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
        )}
      >
        Gradient
      </span>

      <div
        {...classNameWithTooltip(
          'inline-flex items-center px-3 py-1 text-xs font-medium text-white bg-gray-500 rounded-full'
        )}
      >
        Removable
        <button
          {...classNameWithTooltip('ml-2 text-white hover:text-gray-200')}
        >
          <svg
            {...classNameWithTooltip('w-3 h-3')}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export const initialCode = `
<div class="grid  gap-4 py-4 items-start justify-items-start">
<span class="">
  Basic
</span>

<span class="">
  Outline
</span>

<span class="">
  <svg class="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
  </svg>
  Success
</span>

<span class="">
  Pill Badge
</span>

<div class="">
  <span class="">
    Success
  </span>
  <span class="">
    Warning
  </span>
  <span class="">
    Error
  </span>
</div>

<div class="">
  <span class="">
    <span class=""></span>
    <span class="">Online</span>
  </span>
  <span class="">
    <span class=""></span>
    <span class="">Offline</span>
  </span>
</div>

<span class="">
  Gradient
</span>

<div class="">
  Removable
  <button class="">
    <svg class="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</div>

  </div>
`;
