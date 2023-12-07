<template>
    <div class="container_presentation">
        <div class="photo_text_c">
    <img id="p_photo" src="../assets/imgprof.jpg" alt=""> 
    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi enim, aperiam aliquid consequatur necessitatibus porro repellat eos qui voluptatibus repellendus a vel pariatur itaque. Beatae, cumque assumenda. Tempora, dolores!</p>
        </div>
    <div class="btns_c">
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
    background-color: rgb(1, 67, 98);
    justify-content: space-around;

}
#p_photo{
    width: 320px;
    height: 320px;
    border-radius: 50%;
    margin-left: 30px;
    margin-top: 70px;
    object-fit: cover;
}
.text{
    width: 60%;
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
    width: 250px;
    height: 50px;
    border-radius: 8px;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid white;
    color: white;
}
button:hover{
    transition: .3s all ease-in;
      background-color: white;
      color: rgb(73, 73, 73);
}
.btns_c{
    display: flex;
    gap: 20px;
}
</style>