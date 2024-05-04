<script lang="ts">
	import "./styles.css";
  import Editor from '../lib/components/Editor.svelte';
  import NotesSidebar from "../lib/components/NotesSidebar.svelte";
	import { marked } from 'marked';
  import FolderSidebar from "$lib/components/FolderSidebar.svelte";

	marked.use({ async: false });
	let content = marked.parse('**this should be bold** but not this bit');
	
	function handleSelectNote(e:CustomEvent) {
		console.log(e.detail.note);
		content = marked.parse(e.detail.note.content);
	}
	function handleSelectFolder(e:CustomEvent) {
		console.log(e.detail.note);
		content = marked.parse(e.detail.note.content);
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex">
	<FolderSidebar on:selectFolder={handleSelectFolder}/>
	<NotesSidebar on:selectNote={handleSelectNote}/>
	<Editor content={content}/>
</section>