<script setup lang="ts">
  import HistoryItem from './HistoryItem.vue'
  import DocumentationIcon from './icons/IconDocumentation.vue'
  import ToolingIcon from './icons/IconTooling.vue'
  import EcosystemIcon from './icons/IconEcosystem.vue'
  import CommunityIcon from './icons/IconCommunity.vue'
  import SupportIcon from './icons/IconSupport.vue'
  import { IncomeExpenseType, januaryData, type PaymentData } from '@/mocks/monthsTotalCnt'
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
        required: true,
        writable: true,
      },
    },
    data() {
      return {
        histories: this.getHistories(),
        modal: false,
        time: '',
        category: '',
        title: '',
        memo: '',
        amount: 0,
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
      },
      addHistory() {
        const newHistory: PaymentData = {
          date: this.date,
          time: this.time,
          category: this.category,
          amount: 0,
          memo: 'test',
          title: '',
          currency: 'krw',
          incomeExpense: IncomeExpenseType.expense,
          paymentMethod: null,
        }
        januaryData.push(newHistory)
        this.histories = this.getHistories()
      },
      controlModal() {
        this.modal = !this.modal;
        this.resetModal();
      },
      resetModal() {
        if (this.modal) return;
        this.time = '';
        this.category = '';
        this.title = '';
      }
    },
  }

</script>

<template>
  <div class="history">
    <div class="history__item" v-if="histories.length">
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
    <div class="history__item" v-else>
      <p>There is no history</p>
    </div>
  </div>
    <!-- modal -->
  <div class="modal" :class="{'active': modal}">
    <div class="modal__content">
      <div class="modal__header">
        <h2 class="modal__title">Add History</h2>
        <button class="modal__close" @click="() => modal = false">
          <svg class="modal__close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59 7.12 5.7a1 1 0 0 0-1.42 1.42l4.88 4.88-4.88 4.88a1 1 0 0 0 1.42 1.42L12 13.41l4.88 4.88a1 1 0 0 0 1.42-1.42L13.41 12l4.88-4.88a1 1 0 0 0 0-1.42z"/>
          </svg>
        </button>
      </div>
      <div class="modal__body">
        <div class="modal__form">
          <div class="modal__form-group">
            <label class="modal__form-label" for="incomeExpense">수입/지출</label>
            <!-- switch -->
            <div class="modal__switch">
              <input type="radio" name="incomeExpense" id="income" value="income" checked>
              <label for="income">수입</label>
              <input type="radio" name="incomeExpense" id="expense" value="expense">
              <label for="expense">지출</label>
            </div>
          </div>
          <div class="modal__form-group">
            <label class="modal__form-label" for="date">Date</label>
            <input class="modal__form-input" type="date" id="date" :value="date" disabled>
          </div>
          <div class="modal__form-group">
            <label class="modal__form-label" for="time">Time</label>
            <input class="modal__form-input" type="time" id="time" v-model="time">
          </div>
          <div class="modal__form-group">
            <label class="modal__form-label" for="title">Title</label>
            <input class="modal__form-input" type="text" id="title" v-model="title">
          </div>
          <div class="modal__form-group">
            <label class="modal__form-label" for="amount">Amount</label>
            <input class="modal__form-input" type="text" id="amount" v-model="amount">
          </div>
          <div class="modal__form-group">
            <label class="modal__form-label" for="category">Category</label>
            <select class="modal__form-input" id="category" v-model="category">
              <option value="delivery">Delivery</option>
              <option value="necessity">Necessity</option>
              <option value="eco">Eco</option>
              <option value="food">Food</option>
              <option value="hospital">Hospital</option>
            </select>
          </div>
          <div class="modal__form-group">
            <label class="modal__form-label" for="memo">Memo</label>
            <textarea class="modal__form-textarea" type="inputarea" id="memo" v-model="memo">
            </textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="history__modal__button__area">
    <button class="history__modal-button" @click="() => controlModal()">+ add history</button>
  </div>
</template>

<style lang='scss'>
  .history {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    .history__item {
      margin-bottom: 20px;
    }
  }

  .modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  opacity: 0;
  pointer-events: none;
  transition: visibility 0s, opacity 0.5s ease-in-out;
  &.active {
    opacity: 1;
    pointer-events: auto;
    transition: visibility 0s, opacity 0.5s ease-in-out;
  }
  .modal__content {
    width: 100%;
    max-width: 500px;
    // background-color: #fff;
    background: linear-gradient(120deg, #E5D1FA, #E3DFFD);
    border-radius: 15px;
    padding: 20px;
    position: relative;
    // 지정영역보다 커지면 세로 스크롤
    // max-height: calc(100vh - 40px);
    // overflow-y: auto;
    .modal__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .modal__title {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0;
      }
      .modal__close {
        background-color: transparent;
        border: none;
        cursor: pointer;
        .modal__close-icon {
          width: 20px;
          height: 20px;
          fill: #000;
        }
      }
    }
    .modal__body {
      .modal__form {
        .modal__form-group {
          margin-bottom: 1rem;
          .modal__form-label {
            display: block;
            margin-bottom: 0.5rem;
          }
          .modal__form-input {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 15px;
          }
          .modal__form-textarea {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 15px;
          }
          .modal__form-switch {
            display: flex;
            align-items: center;
            .modal__form-switch-label {
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
  }
  }
  .history__modal__button__area {
    position: fixed;
    bottom: 20px;
    right: 20px;
    .history__modal-button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 15px;
      background-color: #000;
      color: #fff;
      animation: bounce 0.5s;
      z-index: 2;
      cursor: pointer;
      &:hover {
        background-color: #FCFFA6;
        color: #000;
      }
    }
  }
  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

</style>