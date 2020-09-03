<template>
  <div >
    <app-stock  v-for="stock in stocks" :key="stock" :stock="stock" ></app-stock>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from './stocks'
export default {
 
  data () {
    return {
    
    }
  },
  computed:{
 ...mapGetters({
   stocks:'stockPortfolio'
 })
  },
  components:{
   appStock:Stock
  }
}
</script>

<style>


</style>
