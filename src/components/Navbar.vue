<template>
    <div style="display: flex; align-items: center; justify-content: space-between;">
        <span class="logo">Mega Mart</span>
        <div>
            <router-link class="navLink" to="/">Home</router-link>
            <router-link class="navLink" to="/cart">Cart</router-link>
            <span class="cartCount">Cart items: {{cartItems.length}}</span>
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const cartItems = computed(() => store.state.items);
</script>

<style>

</style>