<script setup lang="ts">
import HistoryItem from './HistoryItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { januaryData } from '@/mocks/monthsTotalCnt'
</script>
<script lang="ts">
export default {
  name: 'Home',
  components: {
    HistoryItem,
    DocumentationIcon,
    ToolingIcon,
    EcosystemIcon,
    CommunityIcon,
    SupportIcon,
  },
  props: {
    date: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      histories: this.getHistories()
    }
  },
  watch: {
    date() {
      this.histories = this.getHistories()
    }
  },
  methods: {
    getHistories() {
      console.log('history 재조회');
      return januaryData.filter((item) => item.date === this.date)
    }
  },
}

</script>

<template>
  <div v-if="histories.length">
    <HistoryItem :date="date" v-for="history in histories" :key="history">
      <template #icon>
        <DocumentationIcon v-if="history.category === 'delivery'"/>
        <ToolingIcon v-if="history.category === 'necessity'"/>
        <EcosystemIcon v-if="history.category === 'eco'"/>
        <CommunityIcon v-if="history.category === 'food'"/>
        <SupportIcon v-if="history.category === 'hospital'"/>
      </template>
      <template #heading>{{ history.time }}</template>
      Vue’s
      <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
      provides you with all information you need to get started.
    </HistoryItem>
  </div>
  <!-- else -->
  <div v-else>
    <p>There is no history</p>
  </div>
</template>
