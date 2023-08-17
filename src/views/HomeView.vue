<template>
  <div>
    <h2 class="heading">Welcome to Mega Mart Store</h2>
    <section>
      <h3>Results</h3>
      <Products />
    </section>
  </div>
</template>

<script>
import Products from '@/components/Products.vue';


export default {
  name: 'HomeView',
  components: {
    Products
  },
  
}
</script>
