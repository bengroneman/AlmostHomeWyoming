<script>
import SecondaryBtn from "./global/SecondaryBtn.svelte";
export let story = {}
</script>
  <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
    {#if story.Image.data !== null}
      <img
        src={`https://admin.blueengineering.dev${story.Image.data.attributes.url}`}
        alt={story.Image.data.attributes.alternativeText}
        class="absolute inset-0 -z-10 h-full w-full object-cover"
      >
    {:else}
      <div class="h-full bg-gradient-to-r from-purple-800 to-t-teal p-6 rounded">
      </div>
    {/if}
    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

    <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
<!--      <time datetime="2020-03-16" class="mr-8">Mar 16, 2020</time>-->
      <div class="-ml-4 flex items-center gap-x-4">
        <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
          <circle cx="1" cy="1" r="1" />
        </svg>
      </div>
    </div>
    <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
      <a href={"/stories/" + story.Slug}>
        <span class="absolute inset-0"></span>
        {story.Title}
      </a>
    </h3>
      <h4 class="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{story.Description}</h4>
  </article>
