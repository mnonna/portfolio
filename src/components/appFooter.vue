<template>
  <v-container class="app-footer" fluid>
    <v-layout align-center justify-center fill-height>
      <v-col lg="4">
        <v-flex>
          <v-layout fill-height align-center justify-space-around>
            <a href="https://github.com/mnonna">
              <v-icon class="footer-logo">mdi-github</v-icon>
            </a>
            <a href="https://www.linkedin.com/in/marcin-nonna-56882817b/">
              <v-icon class="footer-logo">mdi-linkedin</v-icon>
            </a>
            <a>
              <v-icon class="footer-logo">mdi-facebook</v-icon>
            </a>
          </v-layout>
        </v-flex>
      </v-col>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
.app-footer {
  height: 150px;
  padding: 0;
  background-color: #1e272e;
  a {
    margin: 0;
    padding: 0;
    text-decoration: none;
    .footer-logo {
      color: white;
      font-size: 40px;
    }
  }
}
</style>
