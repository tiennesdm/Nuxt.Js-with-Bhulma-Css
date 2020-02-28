<template>
  <div>
    <Navbar />
    <div class="container">
      <Login />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Login from '~/components/Login.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Login,

    Navbar,
    Footer
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
