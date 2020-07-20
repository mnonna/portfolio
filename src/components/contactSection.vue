<template>
  <v-container class="portfolio-contact-section d-flex justify-center align-center" fluid ref="contact__container">
    <v-layout row align-center justify-center fill-height>
      <v-flex class="portfolio-contact-wrapper" fill-height>
        <v-layout column align-center justify-center fill-height>
          <v-col class="contact-info" ref="contact__github">
            <v-layout align-start justify-center fill-height>
              <v-col fill-height>
                <v-layout column align-center justify-center fill-height>
                  <h2>You can check more of my projects on GitHub</h2>
                    <v-btn class="go-to-btn" outlined href="https://github.com/mnonna"> 
                        <span>Go to GitHub</span>
                        <v-icon class="mdi-icon">mdi-github</v-icon>
                    </v-btn>
                </v-layout>
              </v-col>
            </v-layout>
          </v-col>
          <v-col class="contact-info mt-5">
            <v-layout class="contact-types" column align-center justify-center fill-height>
              <h2 ref="contact__coop__header">Want to offer me cooperation ? You can contact me through</h2>
              <v-col cols="2" class="mt-5" ref="contact__facebook">
                <v-layout column align-center justify-space-between>
                  <h3>Facebook</h3>
                  <v-btn class="go-to-btn" outlined href="">
                    <span>Go to Facebook</span>
                    <v-icon class="mdi-icon">mdi-facebook</v-icon>
                  </v-btn>
                </v-layout>
              </v-col>
              <v-col cols="2" class="mt-5" ref="contact__linkedin">
                <v-layout column align-center justify-space-between>
                  <h3>LinkedIn</h3>
                  <v-btn class="go-to-btn" outlined href="https://www.linkedin.com/in/marcin-nonna-56882817b/">
                    <span>Go to LinkedIn</span>
                    <v-icon class="mdi-icon">mdi-linkedin</v-icon>
                  </v-btn>
                </v-layout>
              </v-col>
              <v-col cols="4" class="mb-7" ref="contact__gmail">
                <v-layout column align-center justify-space-around fill-height>
                  <h3>Gmail</h3>
                  <v-container fluid>
                    <v-layout column align-center justify-center fill-height>
                      <p>marcinnonna026@gmail.com</p>
                      <v-btn class="go-to-btn" outlined href="mailto: marcinnonna026@gmail.com">
                        <span>Send an e-mail</span>
                        <v-icon class="mdi-icon">mdi-email</v-icon>
                      </v-btn>
                    </v-layout>
                  </v-container>
                </v-layout>
              </v-col>
            </v-layout>
          </v-col>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
.portfolio-contact-section {  
  min-height: 700px;
  background-image: url('../assets/office-1209640_1920.jpg');
  background: linear-gradient(90deg, rgba(87,95,207,0.7) 0%, rgba(87,95,207,0.3) 100%), url('../assets/office-1209640_1920.jpg');
  background-size: cover;
  .portfolio-contact-wrapper {
    .contact-info {
        flex-grow: 0;
      h3{
          color: #f1f2f6;
      }
      .go-to-btn{
          width: 220px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          border: 1px solid #1e272e;
          border-radius: 30px;
          margin-top: 20px;
          background-color: #1e272e;
          color: #f1f2f6;
          .mdi-icon{
            font-size: 30px;
          }
      }
      .go-to-btn:hover{
          background-color: transparent;
      }
      svg {
        width: 40px;
        height: 40px;
        color: #f1f2f6;
      }
      .contact-types {
        .col {
          flex-grow: 0;
          max-height: 200px;
        }
        p{
            color: #f1f2f6;
        }
      }
    }
    .contact-info:nth-of-type(1) {
      height: 150px;
    }
    .contact-info:nth-of-type(2){
        @media only screen and (max-width: 320px){
          margin-top: 70px !important;
        }
        @media only screen and (min-width: 321px) and (max-width: 500px){
            min-height: 650px;
        }
    }
  }
  h2,
  h3{
      text-align: center;
  }
  h2,
  h3,
  p {
    color: #f1f2f6;
  }
  p {
    padding: 0;
    margin: 0;
  }
}
</style>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
  mounted(){
    /* eslint-disable */
    gsap.registerPlugin(ScrollTrigger);

    const{
      contact__container,
      contact__coop__header,
      contact__github,
      contact__facebook,
      contact__linkedin,
      contact__gmail
    } = this.$refs;

    const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: contact__container,
          toggleActions: "restart pause reverse pause",
          start: "top 40%",
          endTrigger: contact__container,
          end: () => "+=" + contact__container.offsetHeight + "+ 80"
        }
      }
    );

    t1.fromTo(contact__github, {opacity:0}, {opacity:1, duration: .3})
    .fromTo(contact__coop__header, {opacity:0}, {opacity:1, duration: .3})
    .fromTo(contact__facebook, {opacity:0}, {opacity:1, duration: .3})
    .fromTo(contact__linkedin, {opacity:0}, {opacity:1, duration: .3})
    .fromTo(contact__gmail, {opacity:0}, {opacity:1, duration: .3})
  }
}
</script>