<script lang="ts">
  import type { Note } from '$lib/types';

  let notes:Note[] = [
    {
      id: "1",
      folder_id: "1",
      content: `**Lorem ipsum dolor sit amet,** consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
    },
    {
      id: "2",
      folder_id: "1",
      content: 'Content 2 – itsasdkfj askdlfjadksf k asdfkjadsfj \n ## asdfaksdfjlk \nasldkfjasldkfjkljlkajsdfklsadf',
    },
    {
      id: "3",
      folder_id: "1",
      content: 'Content 3',
    },
  ];
  
  let selectedNoteId:string = "2";

  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
  
  function selectNote(note:Note) {
    selectedNoteId = note.id;
    dispatch('selectNote', { note });
  }
</script>

<aside class={`max-w-xs border-r border-gray-300 overflow-y-scroll h-svh`}>
  <div class="px-8 py-4 border-b border-gray-300">
    <div class="uppercase text-gray-400">Folder name</div>
  </div>
  <div class="flex flex-col gap-0.5 px-4 py-2">
    {#each notes as note}
      <div 
      on:click={() => selectNote(note)} 
      on:keydown={(e) => selectNote(note)}
      role="checkbox" 
      tabindex="0"
      aria-checked="true"
      class={`${selectedNoteId === note.id ? 'bg-gray-100 text-gray-500 hover:bg-gray-200' : 'hover:bg-gray-100 text-gray-400'} px-5 py-4 cursor-pointer h-28 overflow-hidden rounded text-ellipsis focus:outline-none`}
      >
        {note.content.slice(0, 85)}{note.content.length > 85 ? '...' : ''}
      </div>
    {/each}
  </div>
</aside>

