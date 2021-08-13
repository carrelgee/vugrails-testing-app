<template>
  <Layout>
    <router-view/>
  </Layout>
</template>

<script>
import Layout from '@/layout/Layout'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>