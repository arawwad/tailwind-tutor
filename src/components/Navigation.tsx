export function Navigation() {
  return (
    <nav className="space-y-6 mb-10">
      <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-blue-700">Lesson 1</h2>
        <div className="mt-2 flex space-x-4 overflow-x-auto scrollbar-hide">
          <a
            href="#"
            className="flex-shrink-0 text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition shadow"
          >
            Sub-lesson 1.1
          </a>
          <a
            href="#"
            className="flex-shrink-0 text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition shadow"
          >
            Sub-lesson 1.2
          </a>
          <a
            href="#"
            className="flex-shrink-0 text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition shadow"
          >
            Sub-lesson 1.3
          </a>
        </div>
      </div>
    </nav>
  );
}
