<header><a href="/"><h1>THE BACKROOMS</h1></a></header>

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
        background-color: #a2272787;
        padding: 2em;
        margin-top: 3em;
        margin-bottom: 3em;
        border-radius: 1em;
        width: 70em;
        height: fit-content;
        justify-content: space-between;
    }
</style>