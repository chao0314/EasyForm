<template>
  <div id="calendar">
    <div class="month">
      <ul>
        <li class="arrow" @click.stop="preYear(currentYear,currentMonth)">❮❮</li>
        <li class="arrow" @click.stop="pickPre(currentYear,currentMonth)">❮</li>
        <li class="year-month" @click.stop="pickYear(currentYear,currentMonth)">
          <span class="choose-year">{{ currentYear }}</span>
          <span class="choose-month">{{ currentMonth }}月</span>
        </li>
        <li class="arrow" @click.stop="pickNext(currentYear,currentMonth)">❯</li>
        <li class="arrow" @click.stop="nextYear(currentYear,currentMonth)">❯❯</li>
      </ul>
    </div>
    <ul class="weekdays">
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li style="color:red">六</li>
      <li style="color:red">日</li>
    </ul>
    <ul class="days">
      <li v-for="(dayObj,i) in days" :key="i" @click.stop="emitEvent(dayObj.day)">
        <span v-if="dayObj.day.getMonth()+1 !== currentMonth" class="other-month">{{ dayObj.day.getDate() }}</span>
        <span v-else>
                <span
                  v-if="dayObj.day.getFullYear() === new Date().getFullYear() && dayObj.day.getMonth() === new Date().getMonth() && dayObj.day.getDate() === new Date().getDate()"
                  class="active">{{ dayObj.day.getDate() }}</span>
                <span v-else>{{ dayObj.day.getDate() }}</span>
            </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "DatePicker",
    data: function () {
      return {
        currentDay: 1,
        currentMonth: 1,
        currentYear: 1,
        currentWeek: 1,
        days: [],
      }
    },
    created: function () {
      this.initData(null);
    },
    methods: {
      initData: function (cur) {
        let date,
          formatDate,
          i, j;
        this.days.length = 0;
        if (cur) {
          date = new Date(cur);
        } else {
          let now = new Date();
          date = new Date(this.formatDate(now.getFullYear(), now.getMonth() + 1, 1));
        }
        this.currentDay = date.getDate();
        this.currentMonth = date.getMonth() + 1;
        this.currentYear = date.getFullYear();
        this.currentWeek = date.getDay(); // 1...6,0
        if (this.currentWeek === 0) {
          this.currentWeek = 7;
        }
        formatDate = this.formatDate(this.currentYear, this.currentMonth, this.currentDay);
        //初始化一号本周
        for (i = this.currentWeek - 1; i >= 0; i--) {
          let d = new Date(formatDate);
          d.setDate(d.getDate() - i);
          this.days.push({day: d});
        }
        //其他周
        for (j = 1; j <= 42 - this.currentWeek; j++) {
          let d = new Date(formatDate);
          d.setDate(d.getDate() + j);
          this.days.push({day: d});
        }

      },
      pickPre: function (year, month) {
        let d = new Date(this.formatDate(year, month, 1));
        d.setDate(0);
        this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
      },
      pickNext: function (year, month) {
        let d = new Date(this.formatDate(year, month, 1));
        d.setDate(35);
        this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
      },
      pickYear: function (year, month) {
        console.log(year + "," + month);
      },
      formatDate: function (year, month, day) {
        let y = year,
          m = month,
          d = day;
        if (m < 10) {
          m = `0${m}`;
        }
        if (d < 10) {
          d = `0${d}`;
        }
        return `${y}-${m}-${d}`;
      },
      nextYear(year, month) {
        this.initData(this.formatDate((year + 1), month, 1));
      },
      preYear(year, month) {
        this.initData(this.formatDate((year - 1), month, 1));
      },
      emitEvent(msg) {
        this.$emit("pick-date", this.formatDate(msg.getFullYear(), msg.getMonth() + 1, msg.getDate()));
      }
    },
  }
</script>

<style scoped>
  #calendar ul {
    list-style-type: none;
  }

  #calendar {
    margin: 0 auto;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .month {
    background: #00B8EC;
  }

  .month ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }

  .year-month {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .year-month:hover {
    background: rgba(150, 2, 12, 0.1);
  }

  .choose-year {
    padding: 0 2px;
  }

  .choose-month {
    text-align: center;
    font-size: 0.16rem;
  }

  .arrow {
    padding: 10px;
  }

  .arrow:hover {
    background: rgba(100, 2, 12, 0.1);
  }

  .month ul li {
    color: white;
    font-size: 0.16px;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .weekdays {
    margin: 0;
    padding: 5px 0;
    background-color: #00B8EC;
    display: flex;
    flex-wrap: wrap;
    color: #FFFFFF;
    justify-content: space-around;
  }

  .weekdays li {
    display: inline-block;
    width: 13.6%;
    text-align: center;
  }

  .days {
    padding: 0;
    background: #FFFFFF;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .days li {
    list-style-type: none;
    display: inline-block;
    width: 14.2%;
    /*height: 50%;*/
    text-align: center;
    padding: 2px 0;
    font-size: 0.16rem;
    color: #000;
  }

  .days li .active {
    padding: 2px 5px;
    border-radius: 50%;
    background: #00B8EC;
    color: #fff;
  }

  .days li .other-month {
    padding: 5px;
    color: gainsboro;
  }

  .days li:hover {
    background: #e1e1e1;
  }

</style>
