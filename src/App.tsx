import { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';

// mockup data

const mockImagesAndLinks = [
  {
    href: 'https://vitejs.dev/',
    src: 'https://vitejs.dev/logo.svg',
    alt: 'Vite logo',
  },
  {
    href: 'https://reactjs.org/',
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    alt: 'React logo',
  },
  {
    href: 'https://www.typescriptlang.org/',
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    alt: 'TypeScript logo',
  },
  {
    href: 'https://tailwindcss.com/',
    src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    alt: 'Tailwind CSS logo',
  },
  {
    href: 'https://eslint.org/',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1920px-ESLint_logo.svg.png',
    alt: 'ESLint logo',
  },
  {
    href: 'https://prettier.io/',
    src: 'https://cdn.worldvectorlogo.com/logos/prettier-1.svg',
    alt: 'Prettier logo',
  },
];

const mockText = [
  'Rename `name` and `author` in `package.json`',
  'Change the `author name` in `LICENSE`',
  'Change the `title` in `index.html`',
  'Change the `favicon` in `public`',
  'Modify the `manifest` in `public`',
  'Change the `README`',
];

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-around bg-gradient-to-r from-gray-800 to-charcoal">
      <div className="flex flex-col items-center justify-center gap-20 lg:flex-row">
        <div className=" text-center text-white">
          <div className="mx-auto flex max-w-3xl flex-col gap-8 text-left">
            <h1 className="text-center text-4xl font-bold">
              <span>Jumpstart</span> your next&nbsp;
              <span className="bg-gradient-to-r from-skyblue to-violet-400 bg-clip-text text-transparent">
                React project
              </span>
            </h1>
            <p className="text-center text-sm text-gray-400 md:text-base">
              This template is built with Vite and includes essential tools like
              <br />
              TypeScript, Tailwind, ESLint, and Prettier to help you start
              coding with ease.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-6 justify-center gap-6 lg:grid-cols-3 lg:gap-8">
          {mockImagesAndLinks.map((item) => (
            <li key={item.alt} >
              <a
                className=""
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-12 w-12 lg:h-16 lg:w-16"
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="bd-gradient-to-r w-30 text-md bg-transparen rounded-lg border px-5 py-2.5 font-medium text-white hover:opacity-80 focus:outline-white lg:w-40"
        onClick={() => setCounter(counter + 1)}
      >
        Count is {counter}
      </button>
      <div className="prose-input:my-0 prose prose-sm prose-invert prose-p:my-0">
        <h2 className="mb-8 text-center">To clean up template:</h2>
        <ul className="list-none">
          {mockText.map((item) => (
            <li key={item} >
              <label className="prose flex items-center prose-invert">
                <input type="checkbox" className="mx-2 rounded-full" />
                <ReactMarkdown>{item}</ReactMarkdown>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
