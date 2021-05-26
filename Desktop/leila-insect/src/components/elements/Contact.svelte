<script>
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger"

  import {onMount} from 'svelte'

  gsap.registerPlugin(ScrollTrigger);

  let img,
          icon,
          tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".contact",
              start: "center",
              end: window.innerHeight,
              scrub: 1,
            },
          });

  onMount(() =>
          HandleImg()
  );

  function HandleImg() {
    const {width, height, top, left, x, y} = img.getBoundingClientRect();

    tl.set(img, {
      width
    });

    tl.set(icon, {
      width
    });

    tl.to(img, 2, {
      ease: "power2.inOut",
      width: "50%",
    });

    tl.to(icon, 1.2, {
      ease: "power2.inOut",
      opacity: 1,
      width: "5rem",
    });

    tl.to(document.getElementsByClassName('contact__element--icon--img'), {
      ease: "power2.inOut",
      opacity: 1
    }, "-=0.9")

    // tl.play()
    // ScrollTrigger.create(document.getElementsByClassName('contact'),
    //         tl.play()
    // );

  }


</script>

<div class="contact">
  <div class="container">
    <div class="contact__titre">
      <img class="contact__titre--icon" src="assets/icons/contact.png"/>
      <span class="contact__titre--text"
      >با ما در ارتباط باشید
      </span>
    </div>
  </div>
  <div class="container">
    <div class="contact__element">
      <div class="contact__element--text">
        <img
                class="contact__element--logo"
                src="assets/logo.svg"
                alt=""
        />
        <h1> ما حشرات رو دوست داریم ولی انسان ها رو بیشتر</h1>
        <div class="contact__element--line"></div>
        <div class="contact__element--ways">
          <p class="contact__element--p">راه های ارتباطی </p>
          <div class="contact__element--ways--phone">
            <img
                    class="contact__element--ways--icon"
                    bind:this={img}
                    src="assets/contact/telephone.png"
                    alt=""
            />
            <span>۰۳۱ - ۵۵۴۴۸۸۹۹ , ۵۵۴۴۸۸۳۳</span>
          </div>

          <div class="contact__element--ways--phone">
            <img
                    class="contact__element--ways--icon"
                    bind:this={img}
                    src="assets/contact/mobile.png"
                    alt=""
            />
            <span>۰۹۱۳۷۷۷۸۸۷۷ , ۰۹۱۲۲۲۲۴۴۶۶</span>
          </div>

          <div class="contact__element--ways--social">
            <a href="#">
              <img
                      bind:this={img}
                      src="assets/contact/whatsapp.png"
                      alt=""
              />
            </a>

            <a href="#">
              <img
                      bind:this={img}
                      src="assets/contact/telegram.png"
                      alt=""
              />
            </a>

            <a href="#">
              <img
                      bind:this={img}
                      src="assets/contact/instagram.png"
                      alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <img
                class="contact__element--img"
                bind:this={img}
                src="assets/contact/5.jpg"
                alt=""
        />

        <div class="contact__element--icon" bind:this={icon}>
          <img
                  class="contact__element--icon--img"
                  src="assets/contact/phone.png"
                  alt=""
          />
        </div>
      </div>
    </div>
  </div>
</div>


<style>
  .contact {
    padding: 2.5rem 0;
    height: calc(100vh - 5rem);
    position: relative;
  }

  .contact__titre {
    font-size: 1.7rem;
    position: relative;
  }

  .contact__titre {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    font-family: "dana-bold";
  }

  .contact__element {
    background-color: #DEE0DF;
    height: 60vh;
    width: 70%;
    margin-right: 4rem;
    padding: 3rem;
    display: flex;
    position: relative;
  }

  .contact__element--text {
    width: 50%;
    position: relative;
    background-color: #F3F4F9;
    border-left: 7px solid #A9D3DE;
    height: calc(100% - 4rem);
    padding: 1rem 2rem;
  }

  .contact__element--logo {
    margin-bottom: 1rem;
    filter: invert(1);
  }

  h1 {
    font-weight: bold;
  }

  .contact__element--img {
    width: 0;
    height: 77.5%;
    position: absolute;
    object-fit: cover;
    z-index: 2;
    box-shadow: 2px 2px 9px rgb(0, 0, 0, 0.15)
  }

  .contact__element--icon {
    position: relative;
    width: 0;
    background: #f3f3f3;
    height: 4.5rem;
    right: 32.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 6px solid #A9D3DE;
    opacity: 0;
    z-index: 1;
    box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.15);
  }

  .contact__element--icon img {
    width: 3rem;
    opacity: 0;
  }

  .contact__element--line {
    background: url("/assets/contact/background.png");
    height: 1rem;
    width: 71%;
    background-size: 1rem;
    overflow: hidden;
    margin: 2rem auto;
  }

  .contact__element--ways {
    padding: 0 4rem;
  }

  .contact__element--p {
    font-family: "dana-bold";
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .contact__element--ways--phone {
    display: flex;
    align-items: center;
    justify-content: center;
    direction: ltr;
    margin-bottom: 1rem;
  }

  .contact__element--ways--phone span {
    font-family: 'dana-light';
    margin-left: 5px;
    margin-top: 5px;
  }

  .contact__element--ways--social img {
    width: 2rem;
    margin: 0 0.4rem;
  }

  .contact__element--ways--social {
    text-align: center;
    margin-top: 2rem;
  }
</style>
