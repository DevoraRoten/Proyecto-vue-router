import {createRouter, createWebHashHistory} from 'vue-router'
//import ListPage from '@/modules/pokemons/pages/ListPage'
//import AboutPage from '@/modules/pokemons/pages/AboutPage'
//import PokemonPage from '@/modules/pokemons/pages/PokemonPage'
import NoPageFound from '@/modules/shared/pages/NoPageFound'

const routes = [
  {
    path: '/',
    redirect: '/pokemon'
  },
  {
        path: '/pokemon', 
        name: 'pokemon',
        component: ()=> import(/*webpackChunkName: "Pokemon Layout"*/'@/modules/pokemons/layout/PokemonLayout'), 
        children: [
           {
         path: 'home', 
         name: 'pokemon-home',
         component: ()=> import(/*webpackChunkName: "List Name"*/'@/modules/pokemons/pages/ListPage') 
        },
    {
         path: 'about', 
         name:'pokemon-about',
         component: ()=> import(/*webpackChunkName: "AboutPage"*/'@/modules/pokemons/pages/AboutPage') 
        },
    {
         path: ':id', 
         name: 'pokemon-id',
         component: ()=> import(/*webpackChunkName: "PokeId"*/'@/modules/pokemons/pages/PokemonPage') ,
         props: (route) =>{
          console.log(route)
          const id = Number(route.params.id)
          return isNaN(id)? {id: 1}: {id} 
         }
        },
        {
          path: '',
          redirect: {name: 'pokemon-about'}
        }

        ]
       },

       ///DBZ LAYOUT
       {
        path: '/dbz', 
        name:'dbz',
        component: ()=> import(/*webpackChunkName: "dbz-layout"*/'@/modules/dbz/layouts/DragonBallLayout'),
        children: [
          {
            path: 'characters', 
            name:'characters-dbz',
            //component: ()=> import(/*webpackChunkName: "dbz-characters"*/'@/modules/dbz/pages/Characters')
            component: ()=> import(/*webpackChunkName: "characters-dbz"*/'@/modules/dbz/pages/CharactersDbz') 
           },
           {
            path: 'about', 
            name:'about-dbz',
            component: ()=> import(/*webpackChunkName: "about-dbz"*/'@/modules/dbz/pages/AboutDbz') 
           },
           {
            path: '',
            redirect: {name: 'characters-dbz'}
           }
        ] 
       },

   
    {
         path: '/:patchMatch(.*)*', 
         component: NoPageFound 
         //redirect: '/'
        },
  ]
  
  const router =createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  export default router