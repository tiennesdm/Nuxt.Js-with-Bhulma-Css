<template>
  <div>
    <Navbar />
    <div>
      <Section />
    </div>
    <Footer />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navbar from '~/components/Navbar.vue'
import Section from '~/components/Section.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Logo,
    Section,
    Navbar,
    Footer
  }
}
</script>

<style>
</style>
