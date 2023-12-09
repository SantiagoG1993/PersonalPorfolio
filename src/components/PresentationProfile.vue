<template>
    <div class="container_presentation">
        <div class="photo_text_c">
    <img id="p_photo" src="../assets/imgprof.jpg" alt=""> 
    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi enim, aperiam aliquid consequatur necessitatibus porro repellat</p>
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
    width: 95%;
    height: 500px;
    border-radius: 45px;
    background-color: #2E2E2E;
    justify-content: space-around;
    position: relative;
    box-shadow: 2px 4px 13px 0px rgba(0,0,0,0.75);
    animation: fadeIn;
    animation-duration: 1.5s;

}
#p_photo{
    width: 380px;
    height: 380px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    top: 70px;
     box-shadow: 2px 4px 13px 0px rgba(0,0,0,0.75);
    left: 20%;
}
.text{
    width: 40%;
    height: 150px;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    background-color: #191919;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 2px 4px 13px 0px rgba(0,0,0,0.75);
    position: absolute;
    left: 45%;
    top: 210px;
    font-family: 'Inter', sans-serif;
    font-style: italic;
    letter-spacing: 3px;
    line-height:35px;

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
    height:80px;
    position: absolute;
    top: 70px;
    border-radius: 8px;
    border: none;
     font-family: 'Inter', sans-serif;
     font-style: italic;
     font-weight: bold;
    font-size: 1.4em;
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