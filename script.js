import Home from './components/Home.js'
import Profile from './components/Profile.js'
import Dashboard from './components/Dashboard.js'
import Payments from './components/Payment.js'

const routes = [
{path: '/home', component: Home},
{ 
    path: '/profile/:user',
    component: Profile,
    children:[
      {  path: "dashboard",
        component: Dashboard
      },
      {
        path: "payments",
        component: Payments
      }
    ]
} 
]

const router = new VueRouter({
    routes: routes
})


const app = new Vue({
    el: "#app",
    router: router
})


