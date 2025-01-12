export function Target({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 my-4">Target</h1>
      <div
        className="border border-black rounded"
        id="target"
        style={{ width: 500, height: 500 }}
      >
        {children}
      </div>
    </div>
  );
}
