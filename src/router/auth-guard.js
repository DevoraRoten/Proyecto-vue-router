
const isAuthenticatedGuard = async(to, from, next) =>{
    return new Promise( ()=> {
        const random= Math.random() * 100
   
        if( random > 50) {
          console.log('Autenticado - auth guard')
          next()
        }else {
          console.log(random, 'bloqueado po el beforeEach Guard - auth guard')
          next({name: 'pokemon-home'})
        }  
    })
}

export default isAuthenticatedGuard