<template>
    <div class="contactme_c">
        <form action="">
            <input type="email" placeholder="nombre@email.com" >
            <input type="text" id="subject" placeholder="Subject">
            <input type="text" id="message" placeholder="message">
            <button>Send</button>
        </form>

    </div>
</template>

<script setup>

</script>

<style scoped>
.contactme_c{
width: 100%;
height: 400px;
background-color: rgb(34, 34, 34);
}
form{
    width: 700px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    margin-left: 30px;

}
input, button{
    border-radius: 8px;
    width: 90%;
    height: 40px;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
}
input{
    padding-left: 15px;
}
input:focus{
    outline: none;
    background-color: rgb(245, 245, 245);
}
#message{
    height: 90px;
}
button{
    width: 93%;
   background-color: rgb(4, 97, 140);
    color: white;
}
button:hover{
       background-color: rgb(46, 101, 126);
}
</style>