<template>
  <div id="homeComponent" >
    <h1>This is your trade place</h1>
    <h6>You may save and lode your data</h6>
    <h6>click on 'End Day'to begin a new day  </h6>
    <hr>
    <h2>Your Funds: {{ funds | currency }}</h2>
  </div>
</template>

<script>
export default {
 
  data () {
    return {
    
    }
  },
  computed:{
    funds(){
      return this.$store.getters.founds;
    }
  }
}
</script>

<style  scoped>
#homeComponent
{
width: 90%;
margin-left: 5%;
}
</style>



