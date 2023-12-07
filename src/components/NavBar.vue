<template>
    <nav class="navbar">
        <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <ul class="lang">
            <li><img class="ico" src="../assets/sp.png" alt=""></li>
            |
            <li><img class="ico" src="../assets/eng.png" alt=""></li>
        </ul>
        <h4 id="name">Santiago Gamarra <span id="fullstack">Desarrollador web Full Stack</span></h4>
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
    display: flex;
    align-items: center;
    gap: 20px;
}
#fullstack{
    font-size: 20px;
    color: grey;
}
.lang{
    font-size: 12px;
    display: flex;

}
.lang li{
    display: flex;
    gap: 6px;
    justify-content: center;
}
.ico{
    width: 16px;
}
</style>