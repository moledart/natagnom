import { useState } from 'react';
const links = [
  {
    title: 'Биография',
    link: '#about',
    active: false,
  },
  {
    title: 'Проекты',
    link: '#projects',
    active: false,
  },
  {
    title: 'Издательство',
    link: '',
    active: false,
  },
  {
    title: 'Типография',
    link: '#printshop',
    active: false,
  },
  {
    title: 'Отзывы',
    link: '',
    active: false,
  },
  {
    title: 'Контакты',
    link: '',
    active: false,
  },
];

export default function Navigation(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`${
        menuOpen && 'fixed w-full h-screen bg-zinc-50'
      } flex flex-col lg:flex-row justify-between p-5 lg:h-auto lg:px-10`}
    >
      <div className="flex justify-between items-center">
        <div className="font-semibold text-xl lg:tet-2xl uppercase">
          Наталья Кротова
        </div>
        <button
          className="border border-zinc-900 px-4 py-3 w-28 lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? 'Закрыть' : 'Меню'}
        </button>
      </div>
      <ul
        className={`${
          menuOpen
            ? 'flex flex-col flex-1 gap-4 items-end justify-center'
            : 'hidden'
        } lg:flex lg:flex-row lg:justify-end lg:gap-5`}
      >
        {links.map((link, index) => (
          <li className="flex items-center py-3" key={index}>
            <a
              href={link.link}
              className="font-medium lg:text-base text-lg text-zinc-700 hover:text-zinc-900"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
