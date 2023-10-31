<template>
  <section id="contact-section" class="contact-section section" ref="contact">
    <div class="tw-container">
      <div class="sm:tw-block tw-flex tw-px-3.5">
        <div class="tw-w-3/4 tw-mx-auto">
          <div class="title">
            <h2>Sổ Lưu Bút</h2>
            <p class="tw-font-comfortaa tw-text-gray">
              Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng
              tôi!
            </p>
          </div>
        </div>
      </div>
      <div class="tw-block md:tw-flex">
        <transition name="slide-right">
          <div
            class="lg:tw-w-1/2 lg:tw-mr-6 md:tw-mr-6 md:tw-w-7/12 sm:tw-w-full xs:tw-mb-8"
            v-if="showP"
          >
            <div class="contact-form slide-left">
              <form action="" class="tw-block md:tw-flex md:tw-w-full md:tw-flex-wrap">
                <div class="sm:tw-w-full md:tw-w-6/12 md:tw-pr-4">
                  <input type="text" placeholder="Nhập họ tên*" class="tw-font-comfortaa" />
                </div>
                <div class="sm:tw-w-full md:tw-w-6/12">
                  <input type="text" placeholder="Nhập email" class="tw-font-comfortaa" />
                </div>
                <div class="sm:tw-w-full md:tw-w-full">
                  <textarea
                    placeholder="Nhập lời chúc của bạn"
                    class="tw-font-comfortaa"
                  ></textarea>
                </div>
                <div class="sm:tw-w-full md:tw-w-full submit-button">
                  <button type="submit" class="tw-font-comfortaa">Gửi lời chúc</button>
                </div>
              </form>
            </div>
          </div>
        </transition>
        <transition name="slide-left">
          <div class="lg:tw-w-1/2 md:tw-w-5/12 sm:tw-w-full" v-if="showP">
            <div class="wish-box slide-right">
              <div class="wish-box-item" v-for="wish in wishList" :key="wish.id">
                <strong class="tw-font-comfortaa">{{ wish.name }}</strong>
                <p class="tw-font-comfortaa">
                  {{ wish.msg }}
                </p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-section {
  background: url('https://linhda0611.iwedding.info/templates/template15/images/bg.png');
  padding: 120px 0;
  @media only screen and (max-width: 991px) {
    padding: 100px 0;
  }
  .title {
    position: relative;
    text-align: center;
    margin-bottom: 52px;
    padding-top: 70px;
    &::after {
      content: '';
      background: url('https://linhda0611.iwedding.info/templates/template15/images/sec-title-flower.png')
        center center/cover no-repeat local;
      width: 126px;
      height: 59px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    h2 {
      font-family: 'Dancing Script';
      font-size: 36px;
      margin-bottom: 14px;
      font-weight: 700;
    }
    p {
      font-size: 1.05rem;
    }
  }
  .contact-form {
    padding: 65px 45px;
    height: 450px;
    background-color: #fff;
    border: 2px solid #c89d9c;
    position: relative;
    @media only screen and (max-width: 768px) {
      height: auto;
    }
    &::before {
      content: '';
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      border: 2px solid #c89d9c;
      position: absolute;
      left: 2px;
      top: 2px;
    }
    input {
      background-color: #fbfbfb;
      width: 100%;
      height: 50px;
      font-size: 0.93rem;
      color: #797979;
      padding: 6px 15px;
      border: 1px solid #edf3f5;
      position: relative;
      margin-bottom: 25px;
    }
    textarea {
      background-color: #fbfbfb;
      height: 150px;
      width: 100%;
      padding-top: 15px;
      font-size: 0.93rem;
      color: #797979;
      padding: 6px 15px;
      border: 1px solid #edf3f5;
      position: relative;
      margin-bottom: 25px;
    }
    .submit-button {
      text-align: center;
      button {
        background-color: #c89d9c;
        color: #fff;
        padding: 15px 50px 15px 25px;
        font-weight: 600;
        border: 0;
        font-size: 15.5px;
        position: relative;
        &:hover {
          background-color: #b58887;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
  .wish-box {
    overflow-y: auto;
    height: 450px;
    background-color: #fff;
    color: #333;
    border: 5px solid #c89d9c;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
    }
    .wish-box-item {
      padding: 10px;
      &:nth-child(odd) {
        background-color: rgb(200 157 156 / 20%);
      }
      strong {
        font-size: 15px;
      }
      p {
        font-size: 15px;
        color: #333;
        margin: 0.5rem 0;
      }
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

<script>
import { ref } from 'vue';
export default {
  name: 'Contact',
  data() {
    const showP = ref(false);
    return {
      showP,
      wishList: [
        {
          id: 1,
          name: 'Chị Nưu Ny',
          msg: 'Chúc hai vợ chồng có một đám cưới thật đáng nhớ, một cuộc sống thật đẹp và một gia đình thật hạnh phúc❤️',
        },
        {
          id: 2,
          name: 'Thảoo',
          msg: 'Chúc bạn và gia đình có một ngày vui thật trọn vẹn. Hãy yêu thương nhau thật nhiều và sống thật hạnh phúc nhé 🥰🥰 !!! Happy wedding bạn mình 🥳',
        },
        {
          id: 3,
          name: 'C Phượng',
          msg: 'Chúc em iu có 1 đám cưới trong mơ, 1 cs viên mãn hạnh phúc nhé.',
        },
        {
          id: 4,
          name: 'Dương Đỗ Trung',
          msg: 'Chúc mừng hai bạn và gia đình! Chúc cô dâu chú rể trăm năm hạnh phúc, thủy chung trọn vẹn, đi về có nhau. Dù sống đến tuổi răng long đầu bạc nhưng xem nhau như những ngày mới gặp. Đã chỉ non mà thề đã chỉ trăng mà hẹn thì phải giữ trọn tình yêu.',
        },
        {
          id: 5,
          name: 'Bạn cùng phòng Mai Mai',
          msg: 'chúc cho cô dâu chú rể trăm năm hạnh phúc, thủy chung trọn vẹn, đi về có nhau, dù sống đến tuổi răng long đầu bạc nhưng xem nhau như ngày mới gặp. Happe eding b toiii',
        },
        {
          id: 6,
          name: 'Chị Nưu Ny',
          msg: 'Chúc hai vợ chồng có một đám cưới thật đáng nhớ, một cuộc sống thật đẹp và một gia đình thật hạnh phúc❤️',
        },
        {
          id: 7,
          name: 'Chị Nưu Ny',
          msg: 'Chúc hai vợ chồng có một đám cưới thật đáng nhớ, một cuộc sống thật đẹp và một gia đình thật hạnh phúc❤️',
        },
        {
          id: 8,
          name: 'Chị Nưu Ny',
          msg: 'Chúc hai vợ chồng có một đám cưới thật đáng nhớ, một cuộc sống thật đẹp và một gia đình thật hạnh phúc❤️',
        },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.scrolling);
    this.topPositionEl = this.$refs.contact.getBoundingClientRect();
  },
  updated() {
    window.addEventListener('scroll', this.scrolling);
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrolling);
  },
  methods: {
    scrolling() {
      if (
        this.$refs.contact.getBoundingClientRect().top < window.innerHeight &&
        this.$refs.contact.getBoundingClientRect().bottom >= 0
      ) {
        this.showP = true;
      }
    },
  },
};
</script>
