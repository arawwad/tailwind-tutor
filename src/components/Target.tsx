export function Target() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 my-4">Target</h1>
      <div
        className="border border-black rounded"
        id="target"
        style={{ width: 500, height: 500 }}
      >
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Click Me!
        </button>
      </div>
    </div>
  );
}
