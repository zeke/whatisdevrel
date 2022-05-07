export default function Header() {
  return (
    <header className="relative px-4 pb-10 sm:px-6 md:grid md:min-h-screen md:place-items-center ">
      <div className="mx-auto max-w-max">
        <div data-test-id="website-name" className="w-full ">
          <span className="text-5xl font-extrabold tracking-tighter text-gray-900 dark:text-white sm:text-8xl">
            whatisdevrel
          </span>
          <span className="text-3xl font-semibold tracking-tight text-blue-500 sm:text-5xl">
            .com
          </span>
        </div>
        <div className="mt-4 mb-8">
          <h1
            data-test-id="website-slogan"
            className="py-3 px-8 text-2xl font-normal text-gray-800 dark:text-gray-300 italic"
          >
            All you need to know about{" "}
            <span className="text-blue-500">DevRel</span> and how to get into
            it.
          </h1>
        </div>
      </div>
      <a
        title="Go to DevRel at a glance"
        href="#devrel-at-a-glance"
        aria-hidden="true"
        className="absolute left-1/2 bottom-2 scroll-smooth hidden -ml-4 lg:block"
      >
        <svg
          className="h-14 w-14 animate-pulse text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </a>
    </header>
  );
}
