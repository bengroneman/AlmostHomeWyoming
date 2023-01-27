<script>
    export let headline = "headline";
    export let body = "body";
    export let image = "../images/pexels-photo-1.jpg";
</script>
<div class="relative px-6 lg:px-8">
  <div class="absolute inset-0 from-purple-600 to-blue-600 bg-blend-screen">
    <img
      class="h-full w-full object-cover"
      src={image}
      alt="People working on laptops"
    />
  </div>

  <div class="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">{headline}</h1>
      <h2 class="mt-6 text-2xl leading-8 text-t-orange">{body}</h2>
    </div>
  </div>
</div>
