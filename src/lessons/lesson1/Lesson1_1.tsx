import { Lesson } from '../types';
const buttons = [
  {
    className: 'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded',
    label: 'Primary',
  },
  {
    className: 'bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded',
    label: 'Secondary',
  },
  {
    className:
      'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded',
    label: 'Outlined',
  },
  {
    className:
      'bg-transparent text-blue-500 hover:bg-blue-100 px-4 py-2 rounded',
    label: 'Ghost',
  },
  {
    className: 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded',
    label: 'Success',
  },
  {
    className: 'bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded',
    label: 'Danger',
  },
  {
    className: 'bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded',
    label: 'Warning',
  },
  {
    className: 'bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed',
    label: 'Disabled',
    disabled: true,
  },
  {
    className:
      'bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full',
    label: 'Pill Button',
  },
  {
    className:
      'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-4 py-2 rounded',
    label: 'Gradient',
  },
  {
    className:
      'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-lg hover:shadow-xl',
    label: 'Shadow',
  },
  {
    className: 'bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded',
    label: 'Flat',
  },
  {
    className:
      'bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-inner hover:shadow-md',
    label: 'Neumorphic',
  },
  {
    className:
      'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transform active:translate-y-1',
    label: '3D Button',
  },
  {
    className: 'text-blue-500 hover:underline px-4 py-2',
    label: 'Text Button',
  },
  {
    className:
      'bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 text-sm rounded',
    label: 'Small Button',
  },
  {
    className:
      'bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg rounded',
    label: 'Large Button',
  },
  {
    className:
      'bg-blue-500 hover:bg-blue-600 text-white h-12 w-12 rounded-full flex items-center justify-center',
    label: 'A',
  },
  {
    className:
      'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded relative',
    label: (
      <>
        Notifications
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          5
        </span>
      </>
    ),
  },
  {
    className:
      'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-110',
    label: 'Animated Button',
  },
];

export const Lesson1_1: Lesson = () => (
  <div className="grid grid-cols-3 gap-4">
    {buttons.map((button, index) => (
      <button
        data-tooltip-id="hints"
        data-tooltip-content={button.className}
        key={index}
        className={button.className}
        disabled={button.disabled}
      >
        {button.label}
      </button>
    ))}
  </div>
);

Lesson1_1.initialCode = `<div class=" grid grid-cols-3 gap-4">
    <button class="">
      Primary
    </button>
    <button class="">
      Secondary
    </button>
    <button class="">
      Outlined
    </button>
    <button class="">
      Ghost
    </button>
    <button class="">
      Success
    </button>
    <button class="">
      Danger
    </button>
    <button class="">
      Warning
    </button>
    <button
      class=""
      disabled
    >
      Disabled
    </button>

    <button class="">
      Pill Button
    </button>
    <button class="">
      Gradient
    </button>
    <button class="">
      Shadow
    </button>
    <button class="">
      Flat
    </button>
    <button class="">
      Neumorphic
    </button>
    <button class="">
      3D Button
    </button>
    <button class="">
      Text Button
    </button>
    <button class="">
      Small Button
    </button>
    <button class="">
      Large Button
    </button>
    <button class="">
      A
    </button>
    <button class="">
      Notifications
      <span class="">
        5
      </span>
    </button>
    <button class="">
      Animated Button
    </button>
  </div>`;
