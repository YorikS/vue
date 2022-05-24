<template>
    <div class="tableItem">
          <div class="column" v-for="item in row" :key="item">{{ item }}</div>
          
    </div>
</template>

<script>
    export default {
        props: ['Item']
    }
</script>

<style scoped>
.tableItem{
  display: flex;
  width: 100%;
  margin-left: 20px;
}
.tableItem > div{
  
  font-size: 16px;
}
.column:first-child{
    padding-left: 25px;
    width: 12%;
}
.column:nth-child(2){
    width: 14%;
}
.column:nth-child(3){
    width: 14%;
}
.column:nth-child(4){
    width: 15%;
}
.column:nth-child(5){
    width: 14%;
}
.column:nth-child(6){
    width: 14%;
}
</style>