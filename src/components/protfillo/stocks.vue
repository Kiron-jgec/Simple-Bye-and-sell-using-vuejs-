<template>
  <div class="col-sm-6 col-md-4" >
  <div class='panel panel-info'>
    <div class="panel-heading">
      <h3 class="panel-title">{{stock.name}}
     <small>(price : {{stock.price}} || Quentity:{{stock.quantity}})</small>

      </h3>
    </div>
    <div class="panel-body">
      <div class="pull-left">
        <input type="number"
         name="" id=""
         class="form-control"
         placeholder="quantity"
         v-model="quantity"
         :class="{denger:insufficentQuentity}"
          >
      </div>
      <div class="pull-right">
         <button 
         class="btn btn-success"
         @click="sellStock"
         :disabled="insufficentQuentity|| quantity <=0 || Number.isInteger(quantity)"
         >{{insufficentQuentity ?'Not enough stocks':'Sell'}}
         </button>
      </div>
    </div>
    </div> 
  </div>
</template>

<script>
import {mapActions}  from 'vuex';
export default {
 
  data () {
    return {
      quantity:0
    
    }
  },
  props:['stock'],
  computed:{
   insufficentQuentity(){
     return this.quantity > this.stock.quantity;
   }
  },
  methods:{
    ...mapActions(
      {
        placeSellorder:'sellStock'
      }
    ),
sellStock(){
const order ={
  stockId:this.stock.id,
  stockPrice:this.stock.price,
  quantity:this.quantity
};
this.placeSellorder(order);
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
