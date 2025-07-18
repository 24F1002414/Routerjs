import Home from './components/Home.js'
import Profile from './components/Profile.js'
import Dashboard from './components/Dashboard.js'
import Payments from './components/Payment.js'
import NotFound from './components/notfound.js'

const routes = [
{path: '/home', name:"home", component: Home},
{ 
    path: '/profile/:user',
    component: Profile,
    name: 'profile',
    children:[
      {  path: "dashboard",
        name: 'dash',
        component: Dashboard
      },
      {
        path: "payments",
        name: 'pay',
        component: Payments
      }
    ]
},
  {
    path: '*',component: NotFound
  }
]

const router = new VueRouter({
    routes: routes
})


const app = new Vue({
    el: "#app",
    router: router,
    data:{
      user: 'user123'
    },
    methods:{
      dash:function(){
          this.$router.push({name:'dash',params:{user:this.user}})

      },
      pay: function(){
          this.$router.push({name:'pay',params:{user: this.user},query:{type:"admin"}})
      },
      goHome: function(){
        this.$router.push({path:'/home',query:{team:'titan'}})
      },
      goback:function(){
        this.$router.go(-1)
      }
    }
})


