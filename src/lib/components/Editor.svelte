<script lang="ts">
  import { onMount, onDestroy, beforeUpdate } from 'svelte'
  import { Editor } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'

  let element:Element;
  let editor: Editor;
  export let content:string;
  function createEditor() {
    editor = new Editor({
      element: element,
      extensions: [
        StarterKit,
      ],
      content: content || '',
      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        editor = editor
      },
    })
  }
  onMount(createEditor)
  beforeUpdate(() => {
    if (editor) {
      editor.destroy()
    }
    createEditor()
  })

  onDestroy(() => {
    if (editor) {
      editor.destroy()
    }
  })
  function logNote(event:CustomEvent) {
    console.log(event.detail.note)
  }
</script>

<div bind:this={element} class="p-12 max-w-4xl"/>