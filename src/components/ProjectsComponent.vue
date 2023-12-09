<template>
    <div class="projects_c">
        <ul class="menu">
            <li @click="option='projects' " >Projects</li>|
            <li @click="option='education'">Education</li>|
            <li @click="option='skills'">Skills</li>
        </ul>
        <div v-if="option == 'projects'" class="container projects ">
            <div class="project_card">

            </div>
            <div class="project_card">

            </div>
            <div class="project_card">

            </div>
        </div>
        <div v-if="option == 'education'" class="container education">
            <p>education</p>
        </div>
        <div v-if="option == 'skills'" class="container skills">
            <p>skills</p>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const option = ref('projects')

</script>

<style scoped>
.container{
    width: 90%;
    height: 70%;

}
.projects_c{
    width: 95%;
    height: 500px;
    background-color: #1C1C1C;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 45px;
}
.menu{
    margin-top: 20px;
    font-family: 'Inter', sans-serif;
    font-style: italic;
    font-size: 20px;
    display: flex;
    list-style-type: none;
    gap: 10px;
    color: rgb(192, 192, 192);
}
.menu li:hover{
    color: grey;
    cursor: pointer;
}
.projects{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}
.project_card{
    border: 1px solid white;
    width: 320px;
    height: 320px;
}
</style>