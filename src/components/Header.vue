<template>
  <header class="header tw-divide-y tw-divide-[#efefef]">
    <!-- <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1 class="title">
              Văn đà
              <i class="ti-heart"></i>
              Thuỳ Linh
            </h1>
            <span>Just Married</span>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-bar-header">
      <div class="logo">
        <a href="#">
          <span>D</span>
          <span>L</span>
        </a>
      </div>
      <div class="button" @click="openNav">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </div>
    </div>
    <div class="header-menu">
      <div class="container">
        <ul class="list-item" id="mySidenav">
          <div class="close-button" @click="closeNav">X</div>
          <li class="item"><a href="#" class="item-link">Cặp đôi</a></li>
          <li class="item"><a href="#" class="item-link">Chuyện tình yêu</a></li>
          <li class="item"><a href="#" class="item-link">Album cưới</a></li>
          <li class="item"><a href="#" class="item-link">Sự kiện</a></li>
          <li class="item"><a href="#" class="item-link">Lời chúc</a></li>
          <li class="item"><a href="#" class="item-link">Mừng cưới</a></li>
        </ul>
      </div>
    </div> -->
    <div class="header-top tw-bg-white tw-pt-14 tw-pb-9">
      <div class="tw-container tw-mx-auto">
        <div class="tw-flex tw-flex-row">
          <div class="tw-col tw-w-full tw-text-center">
            <div class="site-logo tw-inline-block">
              <a href="">
                <h1 class="tw-font-dancingScript tw-font-black tw-text-4xl">Văn Đà Thuỳ Linh</h1>
                <span class="tw-font-comfortaa tw-text-sm tw-text-gray">Just Married</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-menu tw-py-4">
      <div class="md:tw-container tw-mx-auto">
        <div class="tw-flex tw-flex-row">
          <div class="nav-bar-header" v-show="mobile">
            <div class="logo">
              <a href="#">
                <span class="tw-text-3xl tw-text-pink">D</span>
                <span class="tw-text-3xl tw-text-pink">♥</span>
                <span class="tw-text-3xl tw-text-pink">L</span>
              </a>
            </div>
            <div class="toggle-button" @click="toggleMobileNav" v-show="mobile">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </div>
            <transition name="slide">
              <ul
                v-show="mobileNav"
                class="mobile-list-item tw-text-left tw-bg-white tw-z-10 tw-fixed tw-top-0 tw-h-screen tw-right-0"
                id="mySidenav"
              >
                <div class="close-button" v-show="mobileNav" @click="toggleMobileNav">X</div>
                <li class="item tw-block">
                  <a
                    href="#"
                    class="item-link tw-block tw-py-2.5 tw-pl-10 tw-pr-24 tw-font-comfortaa tw-text-sm hover:tw-text-pink"
                    >Cặp đôi</a
                  >
                </li>
                <li class="item tw-block">
                  <a
                    href="#"
                    class="item-link tw-block tw-py-2.5 tw-pl-10 tw-pr-24 tw-font-comfortaa tw-text-sm hover:tw-text-pink"
                    >Chuyện tình yêu</a
                  >
                </li>
                <li class="item tw-block">
                  <a
                    href="#"
                    class="item-link tw-block tw-py-2.5 tw-pl-10 tw-pr-24 tw-font-comfortaa tw-text-sm hover:tw-text-pink"
                    >Album cưới</a
                  >
                </li>
                <li class="item tw-block">
                  <a
                    href="#"
                    class="item-link tw-block tw-py-2.5 tw-pl-10 tw-pr-24 tw-font-comfortaa tw-text-sm hover:tw-text-pink"
                    >Sự kiện</a
                  >
                </li>
                <li class="item tw-block">
                  <a
                    href="#"
                    class="item-link tw-block tw-py-2.5 tw-pl-10 tw-pr-24 tw-font-comfortaa tw-text-sm hover:tw-text-pink"
                    >Lời chúc</a
                  >
                </li>
                <li class="item tw-block">
                  <a
                    href="#"
                    class="item-link tw-block tw-py-2.5 tw-pl-10 tw-pr-24 tw-font-comfortaa tw-text-sm hover:tw-text-pink"
                    >Mừng cưới</a
                  >
                </li>
              </ul>
            </transition>
          </div>
          <div class="md:tw-w-full md:tw-text-center" v-show="!mobile">
            <ul class="list-item tw-inline-block tw-text-left" id="mySidenav">
              <li class="item tw-block tw-float-left">
                <a href="#" class="item-link tw-p-5 hover:tw-text-pink">Cặp đôi</a>
              </li>
              <li class="item tw-block tw-float-left">
                <a href="#" class="item-link tw-p-5 hover:tw-text-pink">Chuyện tình yêu</a>
              </li>
              <li class="item tw-block tw-float-left">
                <a href="#" class="item-link tw-p-5 hover:tw-text-pink">Album cưới</a>
              </li>
              <li class="item tw-block tw-float-left">
                <a href="#" class="item-link tw-p-5 hover:tw-text-pink">Sự kiện</a>
              </li>
              <li class="item tw-block tw-float-left">
                <a href="#" class="item-link tw-p-5 hover:tw-text-pink">Lời chúc</a>
              </li>
              <li class="item tw-block tw-float-left">
                <a href="#" class="item-link tw-p-5 hover:tw-text-pink">Mừng cưới</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.nav-bar-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  .toggle-button {
    cursor: pointer;
    background-color: #c89d9c;
    width: 40px;
    height: 35px;
    border: 0;
    padding: 5px 10px;
    outline: 0;
    right: 15px;
    top: 12px;
    .icon-bar {
      background-color: #fff;
      display: block;
      height: 2px;
      margin-bottom: 5px;
    }
  }
  .mobile-list-item {
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
    .close-button {
      font-family: Comfortaa;
      cursor: pointer;
      position: absolute;
      top: 30%;
      left: -31px;
      background-color: #ffff;
      text-align: center;
      line-height: 30px;
      width: 30px;
      height: 30px;
    }
    .item-link {
      border-bottom: 1px solid #f2f2f2;
    }
  }
}

.fade-leave-to,
.fade-enter-from {
  @apply tw-opacity-0;
}

.fade-leave-from,
.fade-enter-to {
  @apply tw-opacity-100;
}

.fade-leave-active,
.fade-enter-active {
  @apply tw-transition-opacity tw-duration-500;
}

.slide-leave-to,
.slide-enter-from {
  @apply tw-translate-x-full;
}

.slide-leave-from,
.slide-enter-to {
  @apply tw-translate-x-0;
}

.slide-leave-active,
.slide-enter-active {
  @apply tw-duration-500;
}
</style>

<script>
export default {
  name: 'Header',
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 991) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>
