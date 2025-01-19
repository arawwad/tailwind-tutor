export function CardsBasic() {
  return (
    <div className="max-w-sm mx-auto bg-white p-4 rounded-lg shadow-md">
      <h2
        data-tooltip-id="hints"
        data-tooltip-content="text-xl font-bold text-gray-800"
        className="text-xl font-bold text-gray-800"
      >
        Basic Card
      </h2>
      <p
        data-tooltip-id="hints"
        data-tooltip-content="mt-2 text-gray-600"
        className="mt-2 text-gray-600"
      >
        This is a simple card with a description and a button.
      </p>
      <button
        data-tooltip-content="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        data-tooltip-id="hints"
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Learn More
      </button>
    </div>
  );
}

export const initalCode = `<div class="max-w-sm mx-auto bg-white p-4 rounded-lg shadow-md">
  <h2 class="">Basic Card</h2>
  <p class="">This is a simple card with a description and a button.</p>
  <button class="">Learn More</button>
</div>
`;
