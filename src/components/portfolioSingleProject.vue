<template>
  <v-col class="project-info-main d-flex col-12 col-sm-8 col-lg-10 col-xl-8">
    <v-flex class="project-info-wrapper" ref="single__project__div">
      <v-layout class="project-info-wrapper-layout flex-wrap" row align-center fill-height>
        <v-col class="project-info" lg="6">
          <v-flex fill-height>
            <v-layout column align-center justify-space-around fill-height>
              <h2 ref="project__title">{{ projectTitle }}</h2>
              <p ref="project__desc">
                {{ projectDescription }}
              </p>
              <v-col class="project-github-repo" sm="12" lg="6" ref="project__github">
                <v-flex align-center justify-space-around>
                    <v-layout class="github-ref" align-center justify-center fill-height> 
                      <v-icon class="github-logo">mdi-github</v-icon>
                      <a :href="githubLink">{{ githubLink }}</a>
                    </v-layout>
                </v-flex>
              </v-col>
            </v-layout>
          </v-flex>
        </v-col>
        <v-col class="project-stack" sm="12" lg="6">
          <v-flex fill-height>
            <v-layout column align-center justify-center>
              <v-col cols="12">
                <v-layout align-center justify-center>
                  <h2 ref="project__text">Tech stack</h2>
                </v-layout>
              </v-col>
            </v-layout>
            <v-layout column align-center justify-center >
              <v-col class="d-flex align-center" cols="12">
                <v-layout class="flex-wrap" row align-center justify-space-around>
                  <v-col class="col-xs-12 col-sm-6 col-md-4" v-for="path in imagePaths" :key="path">
                    <v-layout align-center justify-center>
                          <v-img
                              :src="require('../assets/'+path)"
                              class="profile-img"
                              max-width="100px"
                              max-height="100px"
                              ref="stack__logo"
                          ></v-img>
                    </v-layout>
                  </v-col>
                </v-layout>
              </v-col>
            </v-layout>
          </v-flex>
        </v-col>
      </v-layout>
    </v-flex>
  </v-col>
</template>

<style lang="scss" scoped>
.project-info-main {
  height: 400px;
  @media only screen and (max-width: 1264px){
    height: auto;
  }
  .project-info-wrapper {
    position: relative;
    border: 1px solid #575fcf;
    border-radius: 20px;
    box-shadow: 0 2px 4px 4px #1e272e,
                0 2px 4px 4px #1e272e,
                0 2px 4px 4px #1e272e,
                0 2px 4px 4px #1e272e;
    .project-info-wrapper-layout{
      @media only screen and (max-width: 1264px){
        flex-direction: column;
        flex-wrap: nowrap;
      }
      .project-info{
          padding-left: 40px;
          padding-top: 20px;
          @media only screen and (max-width: 1264px){
            padding: 0;
          }
          h2{
            @media only screen and (max-width: 320px){
              padding: 30px;
            }
          }
          .project-github-repo{
            max-height: 70px;
            flex-grow: 0;
            .github-ref{
              @media only screen and (max-width: 850px){
                flex-direction: column;
              }
              a{
                text-align: center;
                @media only screen and (max-width: 500px){
                  padding: 10px;
                  font-size: 14px;
                }
              }
              .github-logo{
                font-size: 36px;
                margin-right: 10px;
                color: black;
                @media only screen and (max-width: 850px){
                  margin-right: 0;
                }
              }
            }
          }
      }
      .project-info,
      .project-stack {
        height: 100%;
        @media only screen and (min-width: 600px) and (max-width: 1264px){
          height: auto;
          flex: 0 0 auto;
        }
        p {
          text-align: center;
          @media only screen and (max-width: 1024px){
            padding: 30px;
            text-align: justify;
          }
          @media only screen and (min-width: 1025px) and (max-width: 1264px){
            padding: 20px;
          }
        }
      }
      .project-stack {
        flex-grow: 1;
        .profile-img{
          @media only screen and (max-width: 850px){
            max-width: 70px !important;
            max-height: 70px !important;
          }
        }
      }
    }
  }
  h2, h3{
    color:#575fcf;
    @media only screen and (max-width: 1024px){
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: center;
      padding: 10px;
    }
  }
  p{
     color: #1e272e;
  }
}
</style>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
  name: "singleProject",
  props: {
      projectTitle: String,
      projectDescription: String,
      githubLink: String,
      imagePaths: Array
  },

  mounted(){
    /* eslint-disable */
    gsap.registerPlugin(ScrollTrigger);

    const { single__project__div, 
            project__text,
            project__title, 
            project__desc,
            project__github, 
            stack__logo 
            } = this.$refs;

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: single__project__div,
        toggleActions: "restart pause reverse pause",
        start: "10px 40%",
        endTrigger: "html",
        end: "bottom top" 
      }
    });

    t1.fromTo(single__project__div, {left: -2000}, {left: 0, duration: .4})
    .fromTo(project__title, {opacity: 0}, {opacity: 1, duration: .2})
    .fromTo(project__text, {opacity: 0}, {opacity: 1, duration: .2})
    .fromTo(project__desc, {opacity: 0}, {opacity: 1, duration: .2})
    .fromTo(project__github, {opacity: 0}, {opacity: 1, duration: .2})
  
     stack__logo.forEach((logo, i) => {
       t1.fromTo(logo.$el, {opacity: 0, x: 50}, {opacity: 1, x: 0, duration: .1});
     })
  }
};
</script>