<script>
  import logo from '../../images/almost_home_white.png';
  import PrimaryBtn from "./PrimaryBtn.svelte";
  let navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Stories",
      link: "/stories",
    },
  ];
</script>
<div class="bg-t-teal shadow-md">
    <div class="max-w-7xl mx-auto p-6 sm:px-6">
      <nav
        class="relative flex items-center justify-between sm:h-10 md:justify-center"
        aria-label="Global"
      >
        <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="/">
              <span class="sr-only">Almost home</span>
              <img
                src={logo}
                class="h-8 w-auto sm:h-10"
                alt="logo - heart with a house in the center"
              />
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:flex md:space-x-10">
          {#each navItems as item}
            <a
              href={item.link}
              class="font-semibold text-white hover:text-sky-100 text-lg tracking-wide"
            >
              {item.name}
            </a>
          {/each}

        </div>
        <div class="justify-self-end flex items-center flex-1 md:absolute md:inset-y-0 md:right-0">
            <PrimaryBtn link="/donate/">Donate</PrimaryBtn>
          </div>
      </nav>
    </div>
    <div class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div class="px-5 pt-4 flex items-center justify-between">
          <div>
            <img
              class="h-8 w-auto"
              src={logo}
              alt="logo - heart with a house in the center"
            />
          </div>
          <div class="-mr-2">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="px-2 pt-2 pb-3">
          {#each navItems as item}
            <a
              href={item.link}
              class="font-semibold text-white hover:text-sky-100 text-lg tracking-wide"
            >
              {item.name}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
