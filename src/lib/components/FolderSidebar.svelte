<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Folder } from "$lib/types";

  let folders:Folder[] = [
    {
      id: "1",
      name: "Home"
    },
    {
      id: "2",
      name: "Work"
    }
  ]

  let selectedFolderId:string = "1";
	const dispatch = createEventDispatcher();
  function selectFolder(folder:Folder) {
    selectedFolderId = folder.id;
    dispatch('selectFolder', { folder });
  }
</script>

<aside class={`w-[250px] pt-12 border-r border-gray-300 bg-gray-100 overflow-y-scroll h-svh`}>
  <div class="flex flex-col gap-0.5 px-2 py-2">
    {#each folders as folder}
      <div
      on:click={() => selectFolder(folder)} 
      on:keydown={(e) => selectFolder(folder)}
      role="checkbox" 
      tabindex="0"
      aria-checked="true"
      class={`${selectedFolderId === folder.id ? "bg-teal-600 text-white hover:bg-teal-700" : "hover:bg-gray-200"} px-3 py-1 rounded w-full hover:cursor-pointer`}
      >
      {folder.name}
      </div>
    {/each}
  </div>
</aside>