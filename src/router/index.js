import {createRouter, createWebHistory} from 'vue-router'
import ExperiencesComponent from '../components/about me/ExperiencesComponent.vue'
import EducationComponent from '../components/about me/EducationComponent.vue'
import SkillsComponent from '../components/about me/SkillsComponent.vue'
import SocialComponent from '../components/about me/SocialComponent.vue'


const routes = [
            {
                path:'/experience',
                component:ExperiencesComponent
            },
            {
                path:'/education',
                component:EducationComponent
            },
            {
                path:'/skills',
                component:SkillsComponent
            },
            {
                path:'/social',
                component:SocialComponent
            }
        ]
    


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router