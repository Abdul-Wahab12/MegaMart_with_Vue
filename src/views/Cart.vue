<template>
    <div>
        <h3>Cart</h3>
        <div class="cartWrapper">
            <div v-for="product in products" :key="product.id" class="cartCard">
                <img :src="product.image" alt="">
                <h5>{{ product.title }}</h5>
                <h5>{{ product.price }}</h5>
                <button class="btn" @click="handleRemove(product.id)">Remove</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
//get products from store
const products = computed(() => store.state.items);

// Dispatch remove cart action
const handleRemove = (productId) => {
    store.dispatch('removeFromCart', productId);
}

</script>

<style>

</style>