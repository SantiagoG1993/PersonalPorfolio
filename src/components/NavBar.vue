<template>
    <nav class="navbar">
        <div class="upper-menu">
            <ul class="lang">
                <li>ENG</li>|
                <li>ESP</li>
            </ul>
            <div class="social">
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
            <ul class="menu">
                <li>ABOUT</li>|
                <li>PROJECTS</li>|
                <li>CONTACT</li>
            </ul>
        </div>
        <div id="name">
            <h4>Santiago Gamarra</h4> 
            <p>Full stack web developer</p>
        </div>
    </nav>
</template>

<script setup>

</script>

<style scoped>
*{
        margin: 0px!important;
}
.navbar{
    width: 95%;
    border-radius: 45px;
    height: 250px;
    user-select: none;
    background-color: rgb(36, 36, 36);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    position: relative;
    margin-bottom: 26px!important;
    box-shadow: 2px 4px 13px 0px rgba(0,0,0,0.75);
    animation: fadeIn;
    animation-duration: 1.5s;

}
.fa-github, .fa-linkedin{
    color: #E88700;
    font-size: 30px;
    margin-left: 20px!important;
    cursor: pointer;
}
.fa-github:hover, .fa-linkedin:hover{
   color: #ffffff; 
   transition: .2s all ease-in;
}
.upper-menu{
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 40px!important;
}
.menu{
    display: flex;
    position: absolute;
    right: 40px;
    gap: 8px;
    list-style-type: none;
    font-family: 'Inter', sans-serif;
    font-style: italic;
    font-size: 20px;
    color: rgb(210, 208, 208);
    
}
.menu li:hover{
color: rgb(146, 146, 146);
cursor: pointer;
}
#name{
    font-size: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: rgb(214, 213, 213);
    position: absolute;
    top: 55px;
width: auto;
}
#name h4{
    font-family: 'Jaldi', sans-serif;
    height: 70px;
}
#name p{
font-family: 'Kodchasan', sans-serif;
    font-size: 28px;
    color: grey;
    margin-top: 10px!important;
}
#fullstack{
    font-size: 20px;
    color: grey;
}
.lang{
    font-size: 18px;
    display: flex;
        color: rgb(210, 208, 208);
  font-family: 'Inter', sans-serif;
    font-style: italic;
        gap: 10px;

}
.lang li{
    display: flex;
    gap: 6px;
    justify-content: center;
    font-style: normal;
}
.ico{
    width: 16px;
}
</style>