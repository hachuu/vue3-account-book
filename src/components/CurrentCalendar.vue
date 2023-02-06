<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
    <!-- make a calendar date -->
    <div class="calendar">
      <div class="calendar__header">
        <div class="calendar__header__day">Sun</div>
        <div class="calendar__header__day">Mon</div>
        <div class="calendar__header__day">Tue</div>
        <div class="calendar__header__day">Wed</div>
        <div class="calendar__header__day">Thu</div>
        <div class="calendar__header__day">Fri</div>
        <div class="calendar__header__day">Sat</div>
      </div>
      <div class="calendar__body">
        <div class="calendar__body__day">1</div>
        <div class="calendar__body__day">2</div>
        <div class="calendar__body__day">3</div>
        <div class="calendar__body__day">4</div>
        <div class="calendar__body__day">5</div>
        <div class="calendar__body__day">6</div>
        <div class="calendar__body__day">7</div>
        <div class="calendar__body__day">8</div>
        <div class="calendar__body__day">9</div>
        <div class="calendar__body__day">10</div>
        <div class="calendar__body__day">11</div>
        <div class="calendar__body__day">12</div>
        <div class="calendar__body__day">13</div>
        <div class="calendar__body__day">14</div>
        <div class="calendar__body__day">15</div>
        <div class="calendar__body__day">16</div>
        <div class="calendar__body__day">17</div>
        <div class="calendar__body__day">18</div>
        <div class="calendar__body__day">19</div>
        <div class="calendar__body__day">20</div>
        <div class="calendar__body__day">21</div>
        <div class="calendar__body__day">22</div>
        <div class="calendar__body__day">23</div>
        <div class="calendar__body__day">24</div>
      </div>
    </div>
  </div>

</template>

<style lang='scss'>


.greetings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-family: 'LuckyGuy';
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  font-family: 'LuckyGuy';
  margin: 10px;
}

h3 {
  font-size: 1.2rem;
}

.calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60%;
  text-align: center;
  font-family: 'LuckyGuy';
  
  .calendar__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    font-family: 'LuckyGuy';
  }
  .calendar__body {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    font-family: 'LuckyGuy';
  }
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

</style>
