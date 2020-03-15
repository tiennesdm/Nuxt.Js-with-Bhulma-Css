<template>
  <div>
    <Navbar />
    <div class="columns">
      <div class="column is-2">
        <Aside />
      </div>
      <div class="column is-10">
        <Section />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navbar from '~/components/Navbar.vue'
import Section from '~/components/Section.vue'
import Footer from '~/components/Footer.vue'
import Aside from '~/components/Aside.vue'

export default {
  components: {
    Logo,
    Section,
    Navbar,
    Footer,
    Aside
  }
}
</script>

<style>
</style>
