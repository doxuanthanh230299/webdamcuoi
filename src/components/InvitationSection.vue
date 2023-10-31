<script>
import { ref } from 'vue';

export default {
  name: 'InvitationSection',
  data() {
    const showP = ref(false);
    return {
      showP,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.scrolling);
    this.topPositionEl = this.$refs.invitation.getBoundingClientRect();
  },
  updated() {
    window.addEventListener('scroll', this.scrolling);
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrolling);
  },
  methods: {
    scrolling(e) {
      if (
        this.$refs.invitation.getBoundingClientRect().top < window.innerHeight &&
        this.$refs.invitation.getBoundingClientRect().bottom >= 0
      ) {
        this.showP = true;
      }
    },
  },
};
</script>
<template>
  <section
    id="invitation-section"
    class="invitation-section"
    @scroll="scrolling()"
    ref="invitation"
  >
    <div class="tw-container">
      <div class="tw-block lg:tw-flex">
        <div class="md:tw-w-full lg:tw-w-1/2 lg:tw-mr-5">
          <transition name="slide-right">
            <div class="invitation-box left slide-left" v-if="showP">
              <div class="left-vec"></div>
              <div class="inner">
                <h2>Save the Date</h2>
                <span>For the wedding of</span>
                <h3 class="tw-font-comfortaa tw-font-bold">Văn Đà & Thuỳ Linh</h3>
                <p>
                  Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi có thêm một niềm
                  hạnh phúc!
                </p>
                <a href="#">Gửi lời chúc</a>
              </div>
            </div>
          </transition>
        </div>
        <div class="md:tw-w-full lg:tw-w-1/2">
          <transition name="slide-left">
            <div class="invitation-box calendar-box slide-right" v-if="showP">
              <div class="inner">
                <div class="calendar">
                  <table>
                    <caption class="calendar-month">
                      THÁNG 6 / 2023
                    </caption>
                    <tbody>
                      <tr>
                        <th class="abbr" abbr="Sun">Sun</th>
                        <th class="abbr" abbr="Mon">Mon</th>
                        <th class="abbr" abbr="Tue">Tue</th>
                        <th class="abbr" abbr="Wed">Wed</th>
                        <th class="abbr" abbr="Thu">Thu</th>
                        <th class="abbr" abbr="Fri">Fri</th>
                        <th class="abbr" abbr="Sat">Sat</th>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="count-down-clock">
                  <div class="box">
                    <h2>134</h2>
                    <span>ngày</span>
                  </div>
                  <div class="box">
                    <h2>10</h2>
                    <span>giờ</span>
                  </div>
                  <div class="box">
                    <h2>14</h2>
                    <span>Phút</span>
                  </div>
                  <div class="box">
                    <h2>134</h2>
                    <span>ngày</span>
                  </div>
                </div>
              </div>
              <div class="right-vec"></div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.invitation-section {
  background: url('https://linhda0611.iwedding.info/templates/template15/images/bg.png');
  padding: 120px 0;
  overflow: hidden;
  .invitation-box {
    background: #fff;
    height: 583px;
    max-width: 580px;
    padding: 120px 70px;
    box-shadow: 0px 3px 24px 0px rgba(0, 0, 0, 0.06);
    text-align: center;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    @media (max-width: 991px) {
      max-width: 500px;
      margin: 25px auto;
      height: auto;
    }
    &::after {
      content: '';
      width: calc(100% - 100px);
      height: calc(100% - 100px);
      position: absolute;
      left: 50px;
      top: 50px;
      border: 5px solid rgb(129 103 103 / 40%);
    }

    .inner {
      h2 {
        font-family: 'Great Vibes';
        font-size: 2.6rem;
        margin-bottom: 30px;
      }
      span {
        font-size: 1rem;
        font-weight: 300;
        color: #797979;
      }
      h3 {
        font-size: 1.4rem;
        font-weight: 600;
        margin: 0.83em 0 1em;
      }
      p {
        font-size: 1.1rem;
        margin-bottom: 34px;
        @media (max-width: 991px) {
          font-size: 13px;
        }
      }
      a {
        background-color: #c89d9c;
        color: #fff;
        padding: 15px 50px 15px 25px;
        font-size: 16px;
        line-height: 16px;
        font-weight: 600;
        border: 0;
        border-radius: 0;
        display: inline-block;
        position: relative;
        z-index: 1;
      }
      table {
        width: 100%;
        .calendar-month {
          text-align: center;
          font-size: 15px;
          margin-bottom: 5px;
          font-weight: 600;
          color: #203447;
          text-transform: uppercase;
        }
        th {
          text-align: center;
          padding: 8px 0;
          color: #484747;
          border-top: 1px solid #cfcfd0;
          border-bottom: 1px solid #cfcfd0;
          font-size: 14px;
          line-height: 14px;
          font-weight: normal;
        }

        tr {
          &:nth-child(2) td {
            padding-top: 20px;
            line-height: 40px;
          }
        }

        td {
          font-size: 14px;
          text-align: center;
          width: 40px;
          height: 40px;
          vertical-align: middle;
          color: #484747;
        }
      }
      .calendar {
        margin-top: -50px;
        padding-bottom: 20px;
      }

      .count-down-clock {
        display: flex;
        max-width: 700px;
        padding-top: 24px;
        border-top: 1px solid #e3e3e6;
        .box {
          text-align: center;
          float: left;
          width: 25%;
          h2 {
            font-size: 3.6rem;
            color: rgb(200, 157, 156);
            font-family: 'Great Vibes';
            margin-bottom: 0;
            line-height: 48px;
          }
          span {
            color: rgb(200, 157, 156);
          }
        }
      }
    }

    .left-vec {
      background: url('https://linhda0611.iwedding.info/templates/template15/images/invitation-left-img.png')
        center center/cover no-repeat;
      width: 220px;
      height: 414px;
      position: absolute;
      left: -150px;
      top: -100px;
    }

    .right-vec {
      background: url('https://linhda0611.iwedding.info/templates/template15/images/invitation-right-image.png')
        center center/cover no-repeat;
      width: 400px;
      height: 508px;
      position: absolute;
      right: -120px;
      bottom: -100px;
      z-index: -1;
    }
  }
}

.slide-left-leave-to,
.slide-left-enter-from {
  @apply tw-translate-x-full;
}

.slide-left-leave-from,
.slide-left-enter-to {
  @apply tw-translate-x-0;
}

.slide-left-leave-active,
.slide-left-enter-active {
  @apply tw-duration-1000;
}

.slide-right-leave-to,
.slide-right-enter-from {
  @apply tw--translate-x-full;
}

.slide-right-leave-from,
.slide-right-enter-to {
  @apply tw-translate-x-0;
}

.slide-right-leave-active,
.slide-right-enter-active {
  @apply tw-duration-1000;
}
</style>
