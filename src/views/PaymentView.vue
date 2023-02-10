<script lang="ts">
  import PaymentHistory from '../components/PaymentHistory.vue'

  const date: string = '';
  export default {
    name: 'PaymentView',
    components: {
      PaymentHistory
    },
    data() {
      return {
        date
      }
    },
    mounted() {
      console.log('mounted')
      this.date = this.$route.params.date;
    },
    watch: {
      $route(to, from) {
        this.date = to.params.date;
      }
    },
    updated() {
      console.log('updated')
    }
  }
  
</script>

<template>
  <main>
    <PaymentHistory :date="date" v-if="date"/>
  </main>
</template>