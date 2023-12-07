<template>
    <div class="projects_c">
        <h3>Projects</h3>
        <ul class="menu">
            <li>Front end</li>
            <li>Full Stack</li>
        </ul>

    </div>
</template>

<script setup>

</script>

<style scoped>
.projects_c{
    width: 100%;
    height: 400px;
    background-color: rgb(2, 87, 126);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.menu{
    display: flex;
    gap: 30px;
    font-size: 28px;
    font-family: Arial, Helvetica, sans-serif;
    list-style-type: none;
    justify-content: center;
    border-radius: 8px;
    border: 2px solid rgb(225, 225, 225);
    padding: 10px;
    margin-top: 0px;
    width: 300px;
    color: white;
}
.menu li:hover{
    text-decoration: underline;
    cursor: pointer;
}
h3{
    font-size: 45px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(226, 226, 226);
    margin:30px ;
}
</style>