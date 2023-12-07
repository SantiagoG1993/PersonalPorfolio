<template>
    <div class="about_c">
        <h2>About me</h2>
    <p class="text_about">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, natus. Dolorem quidem maiores dolores, hic laudantium cumque nihil perferendis saepe, soluta repellat praesentium, ratione tenetur quas odio modi illo sequi.</p>   
    <ul class="menu_about">
        <router-link to="experience">Experience</router-link>
        <router-link to="education">Education</router-link>
        <router-link to="skills">Skills</router-link>
        <router-link to="social">Social</router-link>
    </ul>
    <router-view class="routerview" >

    </router-view>

    </div>
</template>

<script setup>

</script>


<style scoped>
.about_c{
    width: 100%;
    min-height: 600px;
    margin-top: 50px;
    background-color: rgb(233, 232, 232);
    display: flex;
    align-items: center;
    flex-direction: column;
}
.routerview{
    width: 100%;
    height: 550px;
    background-color: rgb(30, 30, 30);
}
.menu_about{
    display: flex;
    gap: 30px;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    list-style-type: none;
    border: 3px solid rgb(84, 83, 83);
    padding: 10px;
    width: 500px;
    border-radius: 8px;
    justify-content: center;
    
}
.menu_about:hover{
    background-color: rgb(227, 227, 227);
    transition: .3s all ease-in;
}
/* .menu_about li:hover{
    text-decoration: underline;
    cursor: pointer;
} */
h2{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 45px;
    color: rgb(64, 64, 64);
    text-align: center;
    position: relative;
    top: 50px;

}
.text_about{
    font-size: 28px;
    font-family: Arial, Helvetica, sans-serif;
    width: 90%;
    padding: 40px;
    border-radius: 8px;
    align-self: center;
    border: 2px solid grey;
}
</style>