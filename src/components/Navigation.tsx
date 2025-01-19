import { lazy, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router';

type RouteConfig = {
  subLesson: string;
  path: string;
  Component: React.LazyExoticComponent<React.FC>;
};

const lessons = import.meta.glob('../lessons/**/*.tsx');

export const routes = Object.keys(lessons).reduce((allRoutes, filePath) => {
  const Component = lazy(
    lessons[filePath] as () => Promise<{ default: React.FC }>
  );
  const cleanPath = filePath.replace('../lessons/', '').replace(/\.tsx$/, '');
  const [lesson, subLesson] = cleanPath.split('/');

  allRoutes[lesson] ||= [];
  allRoutes[lesson].push({
    Component,
    subLesson,
    path: cleanPath.toLocaleLowerCase(),
  });

  return allRoutes;
}, {} as Record<string, RouteConfig[]>);

const activeLessonMap = Object.fromEntries(
  Object.values(routes).flatMap((item) => item.map(({ path }) => [path, item]))
);

console.log(activeLessonMap);

export function Navigation() {
  const [currentLesson, setCurrentLesson] = useState<RouteConfig[]>();
  const { pathname } = useLocation();

  console.log(activeLessonMap, pathname);

  useEffect(() => {
    // @ts-ignore
    setCurrentLesson(activeLessonMap[pathname]);
  }, [pathname]);

  return (
    <nav className="space-y-6 mb-10">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Navigation</h2>
        <div className="mt-2 flex space-x-4 overflow-x-auto scrollbar-hide">
          {Object.entries(routes).map(([lesson, subLessons]) => (
            <button
              onClick={() => setCurrentLesson(subLessons)}
              key={lesson}
              className={`border border-blue-500 text-blue-500 hover:bg-blue-500
          hover:text-white px-4 py-2 rounded ${
            currentLesson === subLessons ? 'bg-blue-500 text-white' : ''
          }`}
            >
              {lesson}
            </button>
          ))}
        </div>
        <div className="mt-2 flex space-x-4 overflow-x-auto scrollbar-hide">
          {currentLesson?.map(({ subLesson, path }) => (
            <NavLink
              className={({ isActive }) =>
                `border border-blue-500 text-blue-500 hover:bg-blue-500
          hover:text-white px-4 py-2 rounded ${
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
