<script>
    import { darkMode } from "$lib/stores/themeStore";
    $: document.body.classList.toggle('dark', darkMode);
</script>

<header style="background-color: {$darkMode ? "#f2f2f2" : "#a22727"};">
    <a href="/"><h1>THE BACKROOMS</h1></a>
    <button on:click={() => darkMode != darkMode}>{($darkMode ? "Dark mode" : "Light mode")}</button>
</header>

<main>
    <div class="mainContainer">
        <slot/>
    </div>
</main>

<footer></footer>

<style>
    header{height: 8vh;background-color: #a22727;display: flex;justify-content: center;align-items: center;}
    footer{height: 2vh;background-color: #a22727;}
    main{
        min-height: 90vh;
        display: flex;
        justify-content: center;
    }
    .mainContainer{
        display: flex;
        flex-direction: row;
        background-color: #b3aa887c;
        padding: 2em;
        margin-top: 3em;
        margin-bottom: 3em;
        border-radius: 1em;
        width: 70em;
        height: fit-content;
        justify-content: space-between;
    }
</style>