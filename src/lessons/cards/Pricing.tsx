import { classNameWithTooltip } from '../../utils';

function CardPricing() {
  return (
    <div
      {...classNameWithTooltip(
        'max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 text-center'
      )}
    >
      <h2 {...classNameWithTooltip('text-2xl font-bold text-gray-800')}>
        Pro Plan
      </h2>
      <p {...classNameWithTooltip('text-gray-600 mt-2')}>$29/month</p>
      <ul {...classNameWithTooltip('mt-4 text-gray-600 space-y-2')}>
        <li>✔ 10 Projects</li>
        <li>✔ 24/7 Support</li>
        <li>✔ Unlimited Storage</li>
      </ul>
      <button
        {...classNameWithTooltip(
          'mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
        )}
      >
        Subscribe
      </button>
    </div>
  );
}

export default CardPricing;

export const initialCode = `<div class="">
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
