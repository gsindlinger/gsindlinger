<script lang="ts">
	import { onMount } from "svelte";
    import { fly } from 'svelte/transition';
    export let title: string;

    
    let ready: Boolean = false;

    onMount(() => setTimeout(() => ready = true, 500));

    
</script>

<div class="w-full h-screen flex flex-col justify-center items-center space-y-4 bg-image-title bg-cover">
    <div>
        {#if ready}
        <div in:fly="{{ y: 200, duration: 1000 }}" class="flex space-x-20 h-full">
            <div class="flex flex-col justify-center items-center">
                <h1 class="font-main text-6xl">{title}</h1>
                <h4 class="font-second text-4xl space-x-4"><span>nlp</span><span>–</span><span>data science</span><span>–</span><span>software engineering</span></h4>    
            </div> 
            <div class="w-72 h-72 overflow-hidden relative rounded-full">
                <img src="src/lib/images/9-2F1A7637.jpg" alt="Johannes Gabriel Sindlinger" class="w-full h-full object-cover object-top transform scale-150 -translate-y-6 grayscale">
            </div>
        </div>
        {/if}
    </div>
    
</div>

<style lang="postcss">
.bg-image-title {
	background-image: linear-gradient(to top, rgba(245, 246, 252, 0.7), rgb(173, 166, 97)), 
	url('../images/bg-1.jpg');
}
</style>