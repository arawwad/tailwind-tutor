function CardPricing() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 text-center">
      <h2
        data-tooltip-content="text-2xl font-bold text-gray-800"
        data-tooltip-id="hints"
        className="text-2xl font-bold text-gray-800"
      >
        Pro Plan
      </h2>
      <p
        data-tooltip-content="text-gray-600 mt-2"
        data-tooltip-id="hints"
        className="text-gray-600 mt-2"
      >
        $29/month
      </p>
      <ul
        data-tooltip-content="mt-4 text-gray-600 space-y-2"
        data-tooltip-id="hints"
        className="mt-4 text-gray-600 space-y-2"
      >
        <li>✔ 10 Projects</li>
        <li>✔ 24/7 Support</li>
        <li>✔ Unlimited Storage</li>
      </ul>
      <button
        data-tooltip-content="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        data-tooltip-id="hints"
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Subscribe
      </button>
    </div>
  );
}

export default CardPricing;

export const initialCode = `<div class="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 text-center">
  <h2 class="">Pro Plan</h2>
  <p class="">$29/month</p>
  <ul class="">
    <li>✔ 10 Projects</li>
    <li>✔ 24/7 Support</li>
    <li>✔ Unlimited Storage</li>
  </ul>
  <button class="">Subscribe</button>
</div>
`;
