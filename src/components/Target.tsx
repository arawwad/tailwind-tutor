export function Target({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Target</h2>
      <div id="target" className=" bg-white border border-gray-200 rounded-md">
        {children}
      </div>
    </div>
  );
}
