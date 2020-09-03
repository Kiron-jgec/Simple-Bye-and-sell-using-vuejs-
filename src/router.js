
import Home from './components/home.vue';
import portfillo from './components/protfillo/protfillio.vue';
import Stocks from './components/stocks/stocks.vue';

export const routes = [
   
    { path: '/', component:Home },
    { path:'/protfillo',component:portfillo},
    { path:'/stocks',component:Stocks}
   
]