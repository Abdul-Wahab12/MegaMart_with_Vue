<template>
    <div class="productsWrapper">
        <div class="card" v-for="product in products" :key="product.id">
            <img :src="product.image" alt="">
            <h4>{{ product.title }}</h4>
            <h5>${{ product.price }}</h5>
            <StarRating class="stars" v-model:rating="product.rating.rate" :max-rating="5" active-color="#fdb44b"
                :star-size="20" :show-rating="false" />
            <button class="btn btn-add" @click="handleAddToCart(product)">Add to cart</button>
        </div>
    </div>
</template>

<script setup>
import StarRating from 'vue-star-rating';
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const products = ref([]);

const fetchProducts = async() => {
    try{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        products.value = data;
    } catch(error) {
        console.error('Error fetching products:', error);
    }
};

onMounted(fetchProducts);

const handleAddToCart = (product) => {
    store.dispatch('addToCart', product);
};


// export default {
//     components: {
//         StarRating
//     },
//     data() {
//         return {
//             products: [],
//         };
//     },
//     // computed: {
//     //     ...mapActions(['addToCart']),
//     // },
//     methods: {
//         async fetchProducts() {
//             try {
//                 const res = await fetch("https://fakestoreapi.com/products");
//                 const data = await res.json();
//                 this.products = data;
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//             }
//         },
//         handleAdd(product) {
//             // store product in Vuex store
//             this.$store.dispatch('addToCart', product);
//         },
//     },
//     mounted() {
//         this.fetchProducts();
        
//     }
// };
</script>

<style>
.stars {
    align-items: center;
    justify-content: center;
}
</style>