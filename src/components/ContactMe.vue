<template>
    <div class="contactme_c">   
        <div class="contact_form">
            <h1>CONTACT ME</h1>
        <form action="">
            <input type="email" placeholder="nombre@email.com" >
            <input type="text" id="subject" placeholder="Subject">
            <input type="text" id="message" placeholder="message">
            <button>Send</button>
        </form>
        </div>
        <div class="social_c">
            <h2>SOCIAL</h2>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-linkedin"></i>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>
*{
    margin: 0px!important;
    padding: 0px!important;
}
.contactme_c{
width: 100%;
height: 400px;
display: flex;
gap: 20px;
justify-content: space-around;
margin-top: 33px!important;
}
h1,h2{
    color: white;
    font-family: 'Jaldi', sans-serif;
    align-self: flex-start;
    margin-left: 50px!important;
}
.contact_form{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    border-radius: 45px 0px 0px 0px;
    background-color: rgb(34, 34, 34);
}
.social_c{
    width: 40%;
    height: 100%;
    background-color: rgb(34, 34, 34);
}
.fa-github, .fa-linkedin{
    font-size: 80px;
    color: white;
}
h2{
    font-size: 30px;
}
form{
    width: 100%;
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
    font-family: 'Inter', sans-serif;
    font-style: italic;
    cursor: pointer;
}
input{
    padding-left: 15px!important;
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
   background-color: #343635;
    color: white;
}
button:hover{
       background-color: rgb(46, 101, 126);
}
</style>