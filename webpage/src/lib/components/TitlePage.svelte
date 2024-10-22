<script lang="ts">
	import { onMount } from "svelte";
    import { fly } from 'svelte/transition';
    import img from '$lib/images/9-2F1A7637.jpg';
    export let title: string;

    
    let ready: Boolean = false;

    onMount(() => setTimeout(() => ready = true, 500));

    
</script>

<div class="w-full h-screen flex flex-col justify-center items-center space-y-4 bg-image-title bg-cover">
    <div>
        {#if ready}
        <div in:fly="{{ y: 200, duration: 1000 }}" class="flex space-x-20 h-full">
            <div class="flex flex-col justify-center items-center">
                <h1 class="font-main text-6xl text-bright">{title}</h1>
                <h4 class="font-second text-4xl space-x-4 text-second"><span>nlp</span><span>–</span><span>data science</span><span>–</span><span>software engineering</span></h4>    
            </div> 
            <div class="w-72 h-72 overflow-hidden relative rounded-full">
                <img src={img} alt="Johannes Gabriel Sindlinger" class="w-full h-full object-cover object-top transform scale-150 -translate-y-6">
            </div>
        </div>
        {/if}
    </div>
    
</div>

<style lang="postcss">
.bg-image-title {
	background-image: linear-gradient(to bottom, #83859c, #c7d1d3b3), 
	url('../images/bg-1.jpg');
}
</style>