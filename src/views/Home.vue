<template>
  <v-app>
      <frontPageHello />
      <portfolioProjects />
      <contactSection />
      <appFooter />
  </v-app>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Open+Sans:wght@600&display=swap');
p{
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  @media only screen and (max-width: 850px){
    font-size: 14px;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif;
}

p {
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
}
</style>
