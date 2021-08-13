<template>
  <div id="app" class="page">
    <Header/>
    <main class="page__main">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/layout/Header"
import Footer from "@/layout/Footer"
export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  }
}
</script>