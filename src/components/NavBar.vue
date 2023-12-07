<template>
    <nav class="navbar">
        <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <h4 id="name">Santiago Gamarra</h4>
    </nav>
</template>

<script setup>

</script>

<style scoped>

.navbar{
    width: 100%;
    height: 80px;
    user-select: none;
    background-color: rgb(238, 238, 238);
    display: flex;
    align-items: center;
    position: relative;
}
ul{
    display: flex;
    gap: 20px;
    list-style-type: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    color: rgb(78, 77, 77);
}
ul li:hover{
color: rgb(146, 146, 146);
cursor: pointer;
}
#name{
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    right:30px;
}
</style>