<script lang="ts">
  import PaymentHistory from '../components/PaymentHistory.vue'
  import { useRoute } from 'vue-router';

  let date: string = '';
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
      const route = useRoute();
      this.date = typeof route.params.date === 'object' ? route.params.date[0] : route.params.date;
      // this.date = this.$route.params.date;
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