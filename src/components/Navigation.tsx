import { lazy, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router';

type RouteConfig = {
  subLesson: string;
  path: string;
  Component: React.LazyExoticComponent<React.FC>;
  initialCode: Promise<string>;
};

const lessons = import.meta.glob<{ initialCode: string; default: React.FC }>(
  '../lessons/**/*.tsx'
);

export const routes = Object.entries(lessons).reduce(
  (allRoutes, [filePath, file]) => {
    const Component = lazy(lessons[filePath]);
    const path = filePath
      .replace('../lessons/', '')
      .replace(/\.tsx$/, '')
      .toLocaleLowerCase();
    const [lesson, subLesson] = path.split('/');

    allRoutes[lesson] ||= [];
    allRoutes[lesson].push({
      Component,
      subLesson,
      path,
      initialCode: file().then(({ initialCode }) => initialCode),
    });

    return allRoutes;
  },
  {} as Record<string, RouteConfig[]>
);

export function Navigation() {
  const { pathname } = useLocation();
  const currentLesson = useMemo(
    () => routes[pathname.split('/')[1] ?? []],
    [pathname]
  );

  return (
    <nav className="space-y-6 mb-10">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Navigation</h2>
        <div className="mt-2 flex space-x-4 overflow-x-auto scrollbar-hide">
          {Object.keys(routes).map((lesson) => (
            <NavLink
              to={`/${lesson.toLocaleLowerCase()}`}
              key={lesson}
              className={({
                isActive,
              }) => `border border-blue-500 text-blue-500 hover:bg-blue-500
          hover:text-white px-4 py-2 rounded capitalize ${
            isActive ? 'bg-blue-500 text-white' : ''
          }`}
            >
              {lesson}
            </NavLink>
          ))}
        </div>
        <div className="mt-2 flex space-x-4 overflow-x-auto scrollbar-hide">
          {currentLesson?.map(({ subLesson, path }) => (
            <NavLink
              className={({ isActive }) =>
                `border border-blue-500 text-blue-500 hover:bg-blue-500
          hover:text-white px-4 py-2 rounded capitalize ${
            isActive ? 'bg-blue-500 text-white' : ''
          }`
              }
              to={path}
              key={subLesson}
            >
              {subLesson}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
