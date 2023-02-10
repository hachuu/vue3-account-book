<script lang="ts">
  type CalendarDate = {date: number, month: number, year: number}
  type CalendarObj = {
      currentMonth: number;
      calendarDate: {
          date: number;
          month: number;
      }[];
      totalWeeks: number[];
    }
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDateInfo: CalendarDate = {date: new Date().getDate(), month: new Date().getMonth(), year: new Date().getFullYear()};
  const selectedDateInfo: CalendarDate = {} as CalendarDate;
  const currentCalendarDate = new Date();
  const calendarObj: CalendarObj = {} as CalendarObj;// = settingCalendarDate();

  export default {
    name: 'CurrentCalendar',
    props: {
      msg: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        week,
        calendarObj: this.settingCalendarDate(),
        currentDateInfo,
        selectedDateInfo,
        currentCalendarDate
      }
    },
    // watch: {
    //   $route(to, from) {
    //     console.log('calendar에서 본 route 변경', to, from)
        
    //   }
    // },
    methods: {
      settingCalendarDate(baseDay = new Date()) {
        const currentMonth = baseDay.getMonth();
        // 달력 array 일자 만들기
        const calendarDate: CalendarDate[] = [];
        const firstDay = new Date(baseDay.getFullYear(), baseDay.getMonth(), 1).getDay();
        const lastDay = new Date(baseDay.getFullYear(), baseDay.getMonth() + 1, 0).getDate();
        const lastDayOfLastMonth = new Date(baseDay.getFullYear(), baseDay.getMonth(), 0).getDate();
        const lastDayOfLastMonthToPush = lastDayOfLastMonth - firstDay + 1;
        const nextMonth = new Date(baseDay.getFullYear(), baseDay.getMonth() + 1, 1).getDay();
        const nextMonthToPush = 7 - nextMonth;
        for (let i = 0; i < firstDay; i++) {
          calendarDate.push({date: lastDayOfLastMonthToPush + i, month: baseDay.getMonth() - 1, year: baseDay.getFullYear()});
        }
        for (let i = 1; i <= lastDay; i++) {
          calendarDate.push({date: i, month: baseDay.getMonth(), year: baseDay.getFullYear()});
        }
        for (let i = 1; i <= nextMonthToPush; i++) {
          calendarDate.push({date: i, month: baseDay.getMonth() + 1, year: baseDay.getFullYear()});
        }
        const totalWeeks = Array.from({length: Math.ceil(calendarDate.length / 7)}, (v, i) => i);

        return {
          currentMonth,
          calendarDate,
          totalWeeks
        }
      },
      prevMonth() {
        this.currentCalendarDate.setMonth(this.currentCalendarDate.getMonth() - 1);
        this.calendarObj = this.settingCalendarDate(this.currentCalendarDate);
      },
      nextMonth() {
        this.currentCalendarDate.setMonth(this.currentCalendarDate.getMonth() + 1);
        this.calendarObj = this.settingCalendarDate(this.currentCalendarDate);
      },
      showHistory(day: {date: number, month: number, year: number}) {
        //router move
        console.log(day)
        const date = `${day.year}-${(day.month) < 10 ? '0' + (day.month + 1) : (day.month + 1)}-${day.date < 10 ? '0' + day.date : day.date}`;
        this.selectedDateInfo = day;
        this.$router.push({name: 'date history', params: {date}});
      }
    }
  }
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      The day of week is {{ week[new Date().getDay()] }}.
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
      <div class="calendar__body" :class="{'wide': calendarObj.totalWeeks.length > 5}">
        <div v-for="week in calendarObj.totalWeeks" :key="week" class="calendar__week">
          <div v-for="day in calendarObj.calendarDate.slice(week * 7, (week + 1) * 7)" :key="`${day.date}${day.month}`" class="calendar__day">
            <button class="calendar__week__date" :class="{'today': day.date === currentDateInfo.date && day.month === currentDateInfo.month && day.year === currentDateInfo.year, 
          'selected': day.date === selectedDateInfo.date && day.month === selectedDateInfo.month && day.year === selectedDateInfo.year}" :disabled="day.month !== calendarObj.currentMonth" @click="showHistory(day)">{{ day.date }}</button>
          </div>
        </div>
      </div>
      <div class="calendar__move__button">
        <button class="calendar__move__button__prev" @click="prevMonth()">{{ '<' }}</button>
        <!-- 현재 연, 달 -->
        <div class="calendar__move__button__current">{{ currentCalendarDate.getFullYear() }}년 {{ currentCalendarDate.getMonth() + 1 }}월</div>
        <button class="calendar__move__button__next" @click="nextMonth()">{{ '>' }}</button>
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
  height: 65%;
  text-align: center;
  font-family: 'LuckyGuy';
  
  .calendar__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
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
    &.wide {
      height: 80%;
    }
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
          &.selected {
            background: linear-gradient(to left top, rgb(113, 189, 0) 0%, white 100%);
          }
        }
      }
    }
  }
  .calendar__move__button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    font-family: 'LuckyGuy';
    .calendar__move__button__prev {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'LuckyGuy';
      background: linear-gradient(to left top, #a3de83 0%, white 100%);
      border-radius: 25% 10%;
      &:hover {
        cursor: pointer;
        background: linear-gradient(to left top, #f7f39a 0%, white 100%);
      }
    }
    .calendar__move__button__current {
      width: 100px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'LuckyGuy';
    }
    .calendar__move__button__next {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'LuckyGuy';
      background: linear-gradient(to left top, #a3de83 0%, white 100%);
      border-radius: 25% 10%;
      &:hover {
        cursor: pointer;
        background: linear-gradient(to left top, #f7f39a 0%, white 100%);
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
