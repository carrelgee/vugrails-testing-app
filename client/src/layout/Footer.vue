<template>
  <footer class="page__footer">
    <div class="container">
      <p class="copyright">{{ copyright }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
        copyright: '© 2021 Grails testing vue app'
    }
  }
}
</script>