<template>
    <h1>Pokemon Page</h1>
    <h2>{{ id }}</h2>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
</template>

<script>
export default {
    props:{
        id:{
            type: Number,
            required: true
        }
    },
    data() {
        return {
            pokemon: null
          //  id: this.$route.params.id
        }
    },
    created() {
       // const { id } = this.$route.params
        // console.log(id)

        this.getPokemon()
    },
    methods: {
        async getPokemon(){
            /*const pokemon =  await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.id }`).then(r=> r.json())
            console.log(pokemon)*/
            try{
                const pokemon =  await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.id }`).then(r=> r.json())
            console.log(pokemon)
            this.pokemon = pokemon
            }catch(e){
                console.log(e)
                this.$router.push('/')
            }
            
        }
    },
    watch: {
        id(){
            this.getPokemon()
        }
    }
}

</script>