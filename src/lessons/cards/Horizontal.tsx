export default function () {
  return (
    <div
      data-tooltip-id="hints"
      data-tooltip-content="flex max-w-lg bg-white border border-gray-200 rounded-lg shadow"
      className="flex max-w-lg bg-white border border-gray-200 rounded-lg shadow"
    >
      <img
        data-tooltip-content="w-32 h-full object-cover rounded-l-lg"
        data-tooltip-id="hints"
        src="https://placehold.co/150"
        alt="Card image"
        className="w-32 h-full object-cover rounded-l-lg"
      />
      <div data-tooltip-id="hints" data-tooltip-content="p-4" className="p-4">
        <h3
          data-tooltip-id="hints"
          data-tooltip-content="text-lg font-bold"
          className="text-lg font-bold"
        >
          Horizontal Card
        </h3>
        <p
          data-tooltip-content="mt-2 text-sm text-gray-600"
          data-tooltip-id="hints"
          className="mt-2 text-sm text-gray-600"
        >
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
