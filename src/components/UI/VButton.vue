<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'v-button'
}
</script>

<style>
.btn {
    padding: 10px 15px;
    margin: 5px;
    background: none;
    font-size: 12pt;
    border-radius: 5px;
}
.btn:hover{
  background:#008CBA;
  color:#fff;
  transition: all 200ms ease;
}
</style>