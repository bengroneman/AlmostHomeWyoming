<script>
  import logo from '../../images/almost_home_white.png';
  import PrimaryBtn from "./PrimaryBtn.svelte";
  let navItems = [
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

  let navToggled = false;
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
          </div>
        </div>
        <div class="md:flex md:space-x-10">
          {#each navItems as item}
            <a
              href={item.link}
              class="font-semibold text-white hover:text-sky-100 sm:text-sm md:text-lg tracking-wide"
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
  </div>
