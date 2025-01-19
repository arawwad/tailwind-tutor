import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router';

const navigationItems = {
  Buttons: [{ name: 'Misc', path: '/buttons' }],
  Cards: [{ name: 'Basic', path: '/cards-basic' }],
};

const activeLessonMap = Object.fromEntries(
  Object.values(navigationItems).flatMap((item) =>
    item.map(({ path }) => [path, item])
  )
);

export function Navigation() {
  const [currentLesson, setCurrentLesson] =
    useState<{ name: string; path: string }[]>();
  const { pathname } = useLocation();

  useEffect(() => {
    // @ts-ignore
    setCurrentLesson(activeLessonMap[pathname]);
  }, [pathname]);

  return (
    <nav className="space-y-6 mb-10">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Navigation</h2>
        <div className="mt-2 flex space-x-4 overflow-x-auto scrollbar-hide">
          {Object.entries(navigationItems).map(([lesson, subLessons]) => (
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
          {currentLesson?.map(({ name, path }) => (
            <NavLink
              className={({ isActive }) =>
                `border border-blue-500 text-blue-500 hover:bg-blue-500
          hover:text-white px-4 py-2 rounded ${
            isActive ? 'bg-blue-500 text-white' : ''
          }`
              }
              to={path}
              key={name}
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
