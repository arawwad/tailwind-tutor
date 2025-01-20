function CardImage() {
  return (
    <div
      data-tooltip-id="hints"
      data-tooltip-content="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden"
      className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        data-tooltip-id="hints"
        data-tooltip-content="w-full h-40 object-cover"
        src="https://placehold.co/400x200"
        alt="Card Image"
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2
          data-tooltip-content="text-lg font-bold text-gray-800"
          data-tooltip-id="hints"
          className="text-lg font-bold text-gray-800"
        >
          Card with Image
        </h2>
        <p
          data-tooltip-content="mt-2 text-gray-600"
          data-tooltip-id="hints"
          className="mt-2 text-gray-600"
        >
          This card has an image and content below it.
        </p>
        <button
          data-tooltip-id="hints"
          data-tooltip-content="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          View More
        </button>
      </div>
    </div>
  );
}

export default CardImage;

export const initialCode = `
<div class="">
  <img src="https://placehold.co/400x200" alt="Card Image" class="">
  <div class="">
    <h2 class="">Card with Image</h2>
    <p class="">This card has an image and content below it.</p>
    <button class="">View More</button>
  </div>
</div>

`;
