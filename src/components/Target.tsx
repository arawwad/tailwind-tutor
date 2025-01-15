export function Target({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Target</h2>
      <div id="target" className=" bg-white border border-gray-300 rounded-md">
        {children}
      </div>
    </div>
  );
}
