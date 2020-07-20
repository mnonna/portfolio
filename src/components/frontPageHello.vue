<template>
  <v-container class="resume-introduction-main d-flex justify-center align-center" fluid>
    <v-layout column align-center justify-center fill-height>
      <v-col class="d-flex align-center justify-space-around" height="300px">
        <v-flex class="resume-profile" lg4 fill-height>
          <v-layout align-center justify-space-around fill-height>
            <v-img
              :src="require('../assets/profile.jpg')"
              class="profile-img"
              max-width="150px"
              max-height="150px"
              ref="profile__img"
            ></v-img>
            <h2 ref="hello__header">Marcin, frontend dev</h2>
          </v-layout>
        </v-flex>
      </v-col>
      <v-col class="d-flex align-center justify-center">
        <v-flex class="resume-profile-text" lg8 ref="profile__text">
          <v-layout column align-center justify-space-around fill-height>
            <h3 ref="profile__text__header">Couple words about myself</h3>
            <p class="mt-5" ref="profile__text__desc">
              I'm an ambitious person who's consistently improving skills. So far i've done some either freelance and own (home)
              projects. I'm an self-taught man. Admittedly i got bachelor's degree but i haven't been taught
              anything in terms of web programming so about 1 year ago i've decided to do something with it
              and learn these things by my own. However i feel like i need some guidance to get better practices
              and become professional. That's why i'm looking for first internship/job as an frontend dev.
              Why won't you try me out ? I'm an fast learner :)
            </p>
          </v-layout>
        </v-flex>
      </v-col>
      <v-col class="d-flex align-center justify-center">
        <v-flex class="resume-more-info-section" lg4>
          <v-layout align-center justify-center fill-height>
            <v-btn class="more-info-btn" outlined height="50px" width="150px" ref="more__info__btn" @click="goToProjects">More Info</v-btn>
          </v-layout>
        </v-flex>
      </v-col>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
.resume-introduction-main {
  min-height: 100vh;
  background-color: #575fcf;
  h2, h3, p{
    color: #f1f2f6;
  }
  .resume-profile {
    .layout{
      @media only screen and (max-width: 1024px){
        flex-direction: column;
      }
      .profile-img {
        box-shadow: 0 0 8px 2px #f1f2f6, 0 0 8px 2px #f1f2f6,
          0 0 8px 2px #f1f2f6, 0 0 8px 2px #f1f2f6;
        background-size: cover;
        border-radius: 50%;
        @media only screen and (max-width: 1024px){
          max-width: 100px !important;
          max-height: 100px !important;
        }
      }
      h2{
        @media only screen and (max-width: 1024px){
          text-align: center;
          margin-top: 20px;
        }
      }
    }
  }
  .resume-profile-text {
    height: 300px;
    padding: 30px;
    border: 1px solid #f1f2f6;
    border-radius: 20px;
    cursor: context-menu;
    @media only screen and (max-width: 1024px){
      height: auto;
    }
    .layout{
      @media only screen and (max-width: 1024px){
        height: auto;
      }
      h3 {
        text-align: center;
      }
      p {
        text-align: justify;
        @media only screen and (max-width: 500px){
          text-align: center;
        }
      }
    }
  }
  .resume-more-info-section {
    .more-info-btn {
      border: 1px solid #f1f2f6;
      border-radius: 30px;
      color: #f1f2f6;
    }
    .more-info-btn:hover {
      background-color: #1e272e;
      color: white;
    }
  }
}
</style>

<script>
import gsap from "gsap";
import { CSSPlugin } from 'gsap/CSSPlugin';
export default {
  mounted(){
    gsap.registerPlugin(CSSPlugin);
    const {
      profile__img,
      hello__header,
      profile__text,
      profile__text__header,
      profile__text__desc,
      more__info__btn
    } = this.$refs;

    const t1 = gsap.timeline();

    t1.fromTo(profile__img.$el, {opacity: 0, x: -200}, {opacity: 1, x: 0, duration: .3})
    .fromTo(hello__header, {opacity: 0, x: -200}, {opacity: 1, x: 0, duration: .3})
    .fromTo(profile__text, {opacity: 0, x: -200}, {opacity: 1, x: 0, duration: .3})
    .fromTo(profile__text__header, {opacity: 0, x: -200}, {opacity: 1, x: 0, duration: .3})
    .fromTo(profile__text__desc, {opacity: 0, x: -200}, {opacity: 1, x: 0, duration: .3})
    .fromTo(more__info__btn.$el, {opacity: 0, y: 200}, {opacity: 1, y: 0, duration: .3}).delay(.5);
  },
  
  methods: {
    goToProjects: function(){
      const projects = document.querySelector('#projects');
      projects.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}
</script>