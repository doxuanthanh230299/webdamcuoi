<template>
  <section id="story-section" class="story-section section">
    <div class="tw-container">
      <div class="sm:tw-block tw-flex tw-px-3.5">
        <div class="tw-w-3/4 tw-mx-auto">
          <div class="title">
            <h2>Chuyện Tình Yêu</h2>
            <p class="tw-text-sm tw-text-gray tw-font-comfortaa">
              Tình yêu không chỉ là một danh từ - nó là một động từ; nó còn hơn cả một cảm giác - đó
              là sự quan tâm, chia sẻ, giúp đỡ, hy sinh.
            </p>
          </div>
        </div>
      </div>
      <div class="sm:tw-block tw-flex">
        <div class="col">
          <div class="story-block">
            <ul>
              <li>
                <div class="detail">
                  <h3 class="tw-font-comfortaa">Lời tỏ tình dễ thương</h3>
                  <span class="date">November 05 2022 </span>
                  <p class="tw-font-comfortaa">
                    Một mình giữa phố thị nấp tập. Mỗi chiều cuối tuần thường chạy xe vòng quanh qua
                    những con phố, len lỏi trong từng dòng người tấp nập. Hay thậm chí là ghé vào
                    một quán cà phê ven đường để ngồi đó và cảm nhận về cuộc sống của riêng mình.
                    Đôi khi lạc lõng và hơi cô đơn. Nhưng rồi một ngày đẹp trời, người con trai ấy
                    xuất hiện, nắm tay rồi thủ thỉ vào tai: “Hy vọng sau này anh được làm những điều
                    ấy cùng em”.
                  </p>
                </div>
                <div class="img-holder">
                  <img
                    src="https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/2a24c5682d30e4e7ab491e6dec531243.jpeg"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div class="img-holder">
                  <img
                    src="https://cdn.biihappy.com/ziiweb/website/647a951e7a0e7dd068022467/b2d4ed7b8ce31444085c3b430b3d7010.jpeg"
                    alt=""
                  />
                </div>
                <div class="detail">
                  <h3 class="tw-font-comfortaa">Lời tỏ tình dễ thương</h3>
                  <span class="date tw-font-comfortaa">November 05 2022 </span>
                  <p class="tw-font-comfortaa">
                    Một mình giữa phố thị nấp tập. Mỗi chiều cuối tuần thường chạy xe vòng quanh qua
                    những con phố, len lỏi trong từng dòng người tấp nập. Hay thậm chí là ghé vào
                    một quán cà phê ven đường để ngồi đó và cảm nhận về cuộc sống của riêng mình.
                    Đôi khi lạc lõng và hơi cô đơn. Nhưng rồi một ngày đẹp trời, người con trai ấy
                    xuất hiện, nắm tay rồi thủ thỉ vào tai: “Hy vọng sau này anh được làm những điều
                    ấy cùng em”.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.story-section {
  padding: 120px 0;
  @media (max-width: 991px) {
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

  .story-block {
    padding: 70px;
    @media only screen and (max-width: 600px) {
      padding: 50px 25px;
    }
    box-shadow: 0px 4px 13.65px 7.35px rgba(178, 201, 211, 0.16);
    ul {
      position: relative;
      @media only screen and (min-width: 601px) {
        &::before {
          content: '';
          background: #c89d9c;
          width: 3px;
          height: 100%;
          position: absolute;
          left: calc(50% - 1.5px);
          top: 0;
        }
        &::after {
          content: '';
          background: #c89d9c;
          width: 20px;
          height: 20px;
          position: absolute;
          left: calc(50% - 10px);
          top: 0;
          border-radius: 50%;
        }
      }
      li {
        display: flex;
        @media only screen and (max-width: 600px) {
          display: block;
          padding-bottom: 30px;
          margin-bottom: 30px;
          border-bottom: 2px dashed #c89d9c;
        }
        &:nth-child(odd) {
          position: relative;
          padding-bottom: 60px;
          margin-bottom: 60px;
          img {
            margin-left: 60px;
            @media only screen and (max-width: 991px) {
              margin-left: 50px;
            }
            @media only screen and (max-width: 600px) {
              margin-left: 0;
            }
          }
          @media only screen and (min-width: 601px) {
            &::before {
              content: '';
              background: #fff;
              border: 3px solid #c89d9c;
              width: 20px;
              height: 20px;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: 0;
              border-radius: 50%;
            }
            &::after {
              content: '';
              width: 110px;
              height: 1px;
              background-color: #fff;
              border-bottom: 2px dashed #c89d9c;
              position: absolute;
              left: calc(50% - 140px);
              bottom: 8px;
            }
          }
          .detail {
            padding-right: 60px;
            text-align: right;
            @media only screen and (max-width: 600px) {
              text-align: left;
              padding-right: 0;
            }
          }
        }
        &:nth-child(even) {
          .img-holder {
            img {
              float: right;
              margin-right: 60px;
              @media only screen and (max-width: 991px) {
                margin-right: 50px;
              }
              @media only screen and (max-width: 600px) {
                margin-right: 0;
                margin-bottom: 15px;
              }
            }
          }
          .detail {
            padding-left: 60px;
            text-align: left;
            @media only screen and (max-width: 600px) {
              padding-left: 0;
            }
          }
        }
        @media only screen and (min-width: 601px) {
          &::after {
            content: '';
            background: #c89d9c;
            width: 20px;
            height: 20px;
            position: absolute;
            left: calc(50% - 10px);
            bottom: 0;
            border-radius: 50%;
          }
        }
        .detail {
          @media only screen and (max-width: 600px) {
            width: 100%;
          }
          width: 50%;
          h3 {
            color: #202a41;
            font-size: 1.5rem;
            line-height: 1.8em;
            margin-bottom: 9.6px;
            @media only screen and (max-width: 600px) {
              font-size: 20px;
            }
          }
          span {
            color: #c89d9c;
            display: block;
            font-size: 16px;
            margin-bottom: 23px;
          }
          p {
            color: #444;
            line-height: 1.6em;
            font-size: 16px;
            margin-bottom: 10px;
            @media only screen and (max-width: 991px) {
              font-size: 14.6px;
              font-size: 0.88rem;
            }
          }
        }
        .img-holder {
          width: 50%;
          @media only screen and (max-width: 600px) {
            width: 100%;
          }
          img {
            width: 100%;
            @media only screen and (min-width: 772px) {
              max-width: 256px;
            }
            @media only screen and (min-width: 992px) {
              max-width: 356px;
            }
            @media only screen and (min-width: 1200px) {
              max-width: 456px;
            }
          }
        }
      }
    }
  }
}
</style>
