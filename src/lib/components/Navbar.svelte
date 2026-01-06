<script lang="ts">
    import { page } from '$app/state';
    type item = {
        name: string;
        href: string
    }
    const items: item[] = [{name: "item1",href: "item1"}, {name: "item2",href: "item2"}, {name: "item3",href: "item3"}, {name: "item4",href: "item4"}];
    const title: item = {name:"Mutans", href:"/"}
    console.log(page.url.pathname)
</script>

<nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        
        <div class="flex-shrink-0">
          <a href={title.href} class="text-2xl font-bold text-blue-600">
            {title.name}
          </a>
        </div>

        <div class="flex space-x-8">
            {#each items as item}
                {#if "/" + item.href != page.url.pathname}
                            <a href={item.href} class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">{item.name}</a>
                {:else}
                      <a href={item.href} class="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">{item.name}</a>
                {/if}
            {/each}
        </div>
      </div>
    </div>
  </nav>