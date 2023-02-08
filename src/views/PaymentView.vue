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
        // date: this.$router.currentRoute.params.date
        date
      }
    },
    watch: {
      $route(to, from) {
        this.date = to.params.date;
      }
    },
  }
  
</script>

<template>
  <main>
    <PaymentHistory :date="date" v-if="date"/>
  </main>
</template>