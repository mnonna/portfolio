<template>
  <v-container class="portfolio-projects-container" fluid ref="portfolio__project" id="projects">
    <v-layout column align-center fill-height>
      <v-col class="projects-main-header d-flex justify-center" lg10>
        <v-flex>
          <v-layout align-center justify-center fill-height>
            <h2>Check out some of my projects</h2>
          </v-layout>
        </v-flex>
      </v-col>
      <v-container class="project-container d-flex align-center justify-center" fluid v-for="project in projectAssets" :key="project.title">
        <singleProject
          :projectTitle="project.title"
          :projectDescription="project.desc"
          :imagePaths="project.imgPaths"
          :githubLink="project.githubLink"

          ref="project"
        />
      </v-container>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
.portfolio-projects-container {
  background-color: #dcdde1;
  .projects-main-header {
    height: 100px;
    h2{
      text-align: center;
      color: #575fcf;
    }
  }
  .project-container{
    @media only screen and (max-width: 500px){
      padding: 0;
    }
  }
  .col {
    flex-grow: 0;
  }
}
</style>

<script>
import singleProject from "./portfolioSingleProject";
export default {
  components: {
    singleProject
  },
  data() {
    return {
      projectAssets: [
        {
          title: "Hotel reception system app",
          desc:
            "I've developed and app which supports hotel Staff and allows guest to book desired rooms and manage their reservations. It distinguishes 5 user types - admin,receptionist, cleaning staff, service staff and hotel guest. Admin is allowed to do all the CRUD operations (either reservations and rooms). Receptionist can only manage reservations and check available rooms. Staff can manage their activities (cleaning and service).",
          imgPaths: [
            "vue_logo.png",
            "laravel_logo.png",
            "vuex_logo.png",
            "html5_logo.png",
            "bootstrap_logo.png",
            "sass_logo.png"
          ],
          githubLink: "https://github.com/mnonna/EHC-App"
        },
        {
          title: "Swisher app",
          desc:
            "Simple Vue app. It allows you to search some infos about NBA teams. It's using an NBA Teams API by Rapid API.",
          imgPaths: [
            "vue_logo.png",
            "vuex_logo.png",
            "html5_logo.png",
            "sass_logo.png"
          ],
          githubLink: "https://github.com/mnonna/swisher"
        },
        {
          title: "Wordpress SIM plugin",
          desc:
            "Wordpress plugin for managing SIM cards for woocommerce store. Written in PHP (Wordpress CMS) with support of HTML, CSS and jQuery. It also integrates with seller's allegro account",
          imgPaths: [
            "php_logo.png",
            "wordpress_logo.png",
            "mysql_logo.png",
            "html5_logo.png",
            "css3_logo.jpg",
            "jquery_logo.jpg"
          ],
          githubLink: "https://github.com/mnonna/wp-sim-manager"
        }
      ]
    };
  }
};
</script>