<template>
    <section>
        <h2 class="filter-header">Filter</h2>
        <div id="SearchFilter">
            <h3 class="genre-header">Genre</h3>
            <label class="checkbox-label">
                <input type="checkbox">
                <span class="checkbox-custom"></span>
                Adventure
            </label>
            <label class="checkbox-label">
                <input type="checkbox">
                <span class="checkbox-custom"></span>
                Platform
            </label>
            <label class="checkbox-label">
                <input type="checkbox">
                <span class="checkbox-custom"></span>
                Arcade
            </label>
            <h3 class="genre-header">Platform</h3>
            <label class="checkbox-label">
                <input type="checkbox">
                <span class="checkbox-custom"></span>
                Switch
            </label>
            <label class="checkbox-label">
                <input type="checkbox">
                <span class="checkbox-custom"></span>
                SNES
            </label>
            <label class="checkbox-label">
                <input type="checkbox">
                <span class="checkbox-custom"></span>
                Wii
            </label>
            <label class="checkbox-label">
                <input type="checkbox">
                <span class="checkbox-custom"></span>
                WiiU
            </label>
            <label class="checkbox-label">
                <input type="checkbox">
                <span class="checkbox-custom"></span>
                New Nintendo 3DS
            </label>
            <label class="checkbox-label">
                <input type="checkbox">
                <span class="checkbox-custom"></span>
                N64
            </label>
            <label class="checkbox-label">
                <input type="checkbox">
                <span class="checkbox-custom"></span>
                VC
            </label>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SearchFilter',
    props: ["games"]
}
</script>

<style scoped>
    #SearchFilter {
        background: #484848;
        padding: 10px 25px;
        color: #fff;
    }
    .filter-header {
        color: #EE1B15;
        font: bold 100% "Lora", serif;
        margin-top: 40px;
        margin-bottom: 10px;
    }
    .genre-header {
        color: #fff;
        font: bold 75% "Lora", serif;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .checkbox-label {
        display: block;
        position: relative;
        cursor: pointer;
        font-size: 60%;
        line-height: 24px;
        /* height: 24px;
        width: 24px; */
        clear: both;
        text-indent: 35px;
        margin: 10px 0 10px 10px;
    }
    .checkbox-label input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }
    .checkbox-label .checkbox-custom {
        position: absolute;
        top: 0;
        left: 0;
        height: 24px;
        width: 24px;
        background: #fff;
        transition: all 0.3s ease-out;
    }
    .checkbox-label .checkbox-custom:after {
        position: absolute;
        content: "";
        left: 12px;
        top: 12px;
        height: 0;
        width: 0;
        border: solid #484848;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(0deg) scale(0);
        -ms-transform: rotate(0deg) scale(0);
        transform: rotate(0deg) scale(0);
        opacity: 1;
        transition: all 0.3s ease-out;
    }
    .checkbox-label input:checked ~ .checkbox-custom {
        background: #fff;
        -webkit-transform: rotate(0deg) scale(1);
        -ms-transform: rotate(0deg) scale(1);
        transform: rotate(0deg) scale(1);
        opacity: 1;
        border: 2px solid #fff;
    }
    .checkbox-label input:checked ~ .checkbox-custom::after {
        -webkit-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
        opacity: 1;
        left: 8px;
        top: 3px;
        width: 6px;
        height: 12px;
        border: solid #484848;
        border-width: 0 2px 2px 0;
        background: transparent;
    }
</style>