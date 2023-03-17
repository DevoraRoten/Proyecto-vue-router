import {createRouter, createWebHashHistory} from 'vue-router'
//import ListPage from '@/modules/pokemons/pages/ListPage'
//import AboutPage from '@/modules/pokemons/pages/AboutPage'
//import PokemonPage from '@/modules/pokemons/pages/PokemonPage'
import NoPageFound from '@/modules/shared/pages/NoPageFound'

const routes = [
    {
         path: '/', 
         component: ()=> import(/*webpackChunkName: "List Name"*/'@/modules/pokemons/pages/ListPage') 
        },
    {
         path: '/about', 
         component: ()=> import(/*webpackChunkName: "AboutPage"*/'@/modules/pokemons/pages/AboutPage') 
        },
    {
         path: '/:id', 
        // name: 'poklemon-id',
         component: ()=> import(/*webpackChunkName: "PokeId"*/'@/modules/pokemons/pages/PokemonPage') ,
         props: (route) =>{
          console.log(route)
          const id = Number(route.params.id)
          return isNaN(id)? {id: 1}: {id} 
         }
        },
    {
         path: '/:patchMatch(.*)*', 
         component: NoPageFound 
        },
  ]
  
  const router =createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  export default router