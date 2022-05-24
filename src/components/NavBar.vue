<template>
<div class="container-fluid">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><v-button @click="$router.push('/')">На главную</v-button></a>
    <a class="navbar-brand" href="#"><v-button @click="$router.push('/drivers')">Сотрудники</v-button></a>
    <a class="navbar-brand" href="#"><v-button @click="$router.push('/cars')">Поставщики</v-button></a>
    <a class="navbar-brand" href="#"><v-button @click="$router.push('/orders')">Заказы</v-button></a>
    <a class="navbar-brand" href="#"><v-button @click="$router.push('/clients')">Клиенты</v-button></a>
    <a class="navbar-brand" href="#"><v-button @click="$emit('logOut', false)">Выход</v-button></a>
  </nav>
</div>
</template>

<script>
export default {
  name: "v-nav"
};
</script>

<style>
.container-fluid {
  padding:0px
}

</style>