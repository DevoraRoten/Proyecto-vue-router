<template>
    <div>
    <!--<router-link :to="{name: 'home'}">Pokemon List </router-link>
    <router-link :to="{name: 'pokemon-id', params: {id:85}}">Pokemom por id</router-link>
    <router-link :to="{name: 'about'}"> About</router-link>-->
    <CustomLink 
        v-for="link in links" 
        :key="link.to"
        :link="link"/>
    </div>
    
</template>
<script>
import { defineAsyncComponent } from 'vue'
    export default {
        data() {
            return{
                links:[
                    {to: '{name: "pokemon-home"}', name: 'Pokemons' },
                    {to: '{name: "pokemon-id"}', name: 'Por Id', id:150 },
                    {to: '{name: "pokemon-about"}', name: 'About' },
                    {to: 'https://google.com', name: 'Google' }
                ]
            }
        },
        components: {
            CustomLink: defineAsyncComponent(()=>import ('./CustomLink'))
        }
    }
</script>

<style scoped>
div a{
    font-weight: bold;
    margin: 0 10px;
    color: #000;
}
div .router-link-exact-active {
    color: #42b983
}

</style>
