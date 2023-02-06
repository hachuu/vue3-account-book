<script setup lang="ts">
defineProps<{
  msg: string
}>()
const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const currentMonth = new Date().getMonth();
const currentDate = {date: new Date().getDate(), month: new Date().getMonth()};

// 달력 array 일자 만들기
const calendar: {date: number, month: number}[] = [];
const firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();
const lastDay = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
const lastDayOfLastMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();
const lastDayOfLastMonthToPush = lastDayOfLastMonth - firstDay + 1;
const nextMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).getDay();
const nextMonthToPush = 7 - nextMonth;
for (let i = 0; i < firstDay; i++) {
  calendar.push({date: lastDayOfLastMonthToPush + i, month: new Date().getMonth() - 1});
}
for (let i = 1; i <= lastDay; i++) {
  calendar.push({date: i, month: new Date().getMonth()});
}
for (let i = 1; i <= nextMonthToPush; i++) {
  calendar.push({date: i, month: new Date().getMonth() + 1});
}
const firstWeek = calendar.slice(0, 7);
const secondWeek = calendar.slice(7, 14);
const thirdWeek = calendar.slice(14, 21);
const fourthWeek = calendar.slice(21, 28);
const fifthWeek = calendar.slice(28, 35);
const sixthWeek = calendar.slice(35, 42);
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      The day of week is {{ week[new Date().getDay()] }}.
      <!-- You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next? -->
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
        <div v-for="week in [0, 1, 2, 3, 4, 5]" :key="week" class="calendar__week">
          <div v-for="day in calendar.slice(week * 7, (week + 1) * 7)" :key="day" class="calendar__day">
            <button class="calendar__week__date" :class="{'today': day.date === currentDate.date && day.month === currentDate.month}" :disabled="day.month !== currentMonth">{{ day.date }}</button>
          </div>
        </div>
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
    width: 100%;
    text-align: center;
    font-family: 'LuckyGuy';
    .calendar__header__day {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'LuckyGuy';
      //linear
      background: linear-gradient(to left top, #a3de83 0%, white 100%);
      border-radius: 25% 10%;
    }
  }
  .calendar__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70%;
    width: 100%;
    text-align: center;
    font-family: 'LuckyGuy';
    .calendar__week {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 50px;
      width: 100%;
      text-align: center;
      font-family: 'LuckyGuy';
      .calendar__day {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'LuckyGuy';
        .calendar__week__date {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'LuckyGuy';
          background: linear-gradient(to left top, #f7f39a 0%, white 100%);
          border-radius: 25% 10%;
          // disabled 는 제외
          &:not(:disabled) {
            &:hover {
              cursor: pointer;
              background: linear-gradient(to left top, #a3de83 0%, white 100%);
            }
          }
          &:disabled {
            background: linear-gradient(to left top, #f7f29a4c 0%, white 100%);
            border-radius: 25% 10%;
          }
          &.today {
            background: linear-gradient(to left top, hsl(160deg, 100%, 37%) 0%, white 100%);
          }
        }
      }
    }
  }
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings {
    height: 90vh;
  }
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

</style>
