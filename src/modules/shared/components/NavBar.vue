<template>
    <div>
    <router-link to="/">Pokemon List </router-link>
    <router-link to="/id">Pokemom por id</router-link>
    <router-link to="/about"> About</router-link>
    </div>
    
</template>

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
