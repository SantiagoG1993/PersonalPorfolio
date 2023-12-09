<template>
    <div class="about_c">
        <h2>About me</h2>
    <p class="text_about">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, natus. Dolorem quidem maiores dolores, hic laudantium cumque nihil perferendis saepe, soluta repellat praesentium, ratione tenetur quas odio modi illo sequi.</p>   
    </div>
</template>

<script setup>

</script>


<style scoped>
*{
    margin: 0px!important;
    padding: 0px!important;
}
.about_c{
    width: 95%;
    border-radius: 45px;
    height: 300px;
    margin-bottom: 26px!important;
    margin-top: 26px!important;
    background-color: #212121;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 2px 4px 13px 0px rgba(0,0,0,0.75);
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
    font-family: 'Jaldi', sans-serif;
    font-size: 45px;
color: rgb(234, 234, 234);
    text-align: center;
    position: relative;
    top: 20px;

}
.text_about{
    font-size: 28px;
    font-family: Arial, Helvetica, sans-serif;
    width: 90%;
    padding: 40px;
    border-radius: 8px;
    align-self: center;
    font-family: 'Jaldi', sans-serif;
    letter-spacing: 2px;
    color: white;
    margin-top: 20px!important;
}
</style>