<template>
    <div class="container_presentation">
        <div class="photo_text_c">
    <img src="" alt=""> 
    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi enim, aperiam aliquid consequatur necessitatibus porro repellat eos qui voluptatibus repellendus a vel pariatur itaque. Beatae, cumque assumenda. Tempora, dolores!</p>
        </div>
    <div class="btns_c">
        <button>Hire me</button>
        <button>Download CV</button>
    </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container_presentation{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 450px;
    background-color: rgb(63, 63, 63);
    justify-content: space-around;
}
img{
    background-color: white;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    margin-left: 30px;
}
.text{
    width: 600px;
    height: 300px;
    font-size: 28px;
    color: white;
    display: flex;
    align-items: center;
}
.photo_text_c{
    display: flex;
    align-items: center;
    width: 100%;
    height: 65%;
    justify-content: space-between;
    }
button{
    width: 150px;
    height: 50px;
    border-radius: 19px;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    cursor: pointer;
}
button:hover{
    background-color: transparent;
    border: 2px solid white;
    color: white;
    transition: .3s all ease-in;
}
.btns_c{
    display: flex;
    gap: 20px;
}
</style>