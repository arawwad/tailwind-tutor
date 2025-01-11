import type { ReactNode } from 'react';

export function Title({ children }: Readonly<{ children: ReactNode }>) {
  return <h1 className="text-4xl font-bold text-gray-800 my-4">{children}</h1>;
}
