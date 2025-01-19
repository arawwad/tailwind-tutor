import { useEffect } from 'react';

export function Target({
  children,
  setCode,
  initialCode,
}: Readonly<{
  children: React.ReactNode;
  setCode: (code: string) => void;
  initialCode: Promise<string>;
}>) {
  useEffect(() => {
    initialCode.then((code) => {
      setCode(code);
    });
  }, []);
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Target</h2>
      <div
        id="target"
        className=" bg-white border border-gray-300 rounded-md px-2 py-4"
      >
        {children}
      </div>
    </div>
  );
}
