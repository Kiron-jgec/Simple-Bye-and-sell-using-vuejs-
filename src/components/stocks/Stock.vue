<template>
  <div class="col-sm-6 col-md-4" >
  <div class='panel panel-success'>
    <div class="panel-heading">
      <h3 class="panel-title">{{stock.name}}
     <small>(price : {{stock.price}})</small>

      </h3>
    </div>
    <div class="panel-body">
      <div class="pull-left">
        <input type="number"
         name="" id=""
         class="form-control"
         placeholder="quantity"
         v-model="quantity"
         :class="{denger:insuficientFunds}"
          >
      </div>
      <div class="pull-right">
         <button 
         class="btn btn-success"
         @click="buyStock"
         :disabled="insuficientFunds || quantity <=0 || Number.isInteger(quantity)"
         >{{insuficientFunds ? 'insuficient Funds' :'Buy' }}
         </button>
      </div>
    </div>
    </div> 
  </div>
</template>

<script>
export default {
 
  data () {
    return {
      quantity:0
    
    }
  },
  props:['stock'],
  computed:{
    funds(){
return this.$store.getters.founds;
    },
 insuficientFunds(){
   return this.quantity*this.stock.price > this.funds
 }
  },
  methods:{
    buyStock(){
      const order ={
        stockId: this.stock.id,
        stockPrice: this.stock.price,
         quantity:this.quantity

      };
      
      this.$store.dispatch('buyStock',order);
      this.quantity=0;
    }
  }
}
</script>

<style scoped>
.denger{
  border:1px red solid;
}

</style>
