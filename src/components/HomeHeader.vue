<template>
  <header>
    <Nav :useSticky="useStickyNav"/>
    <div class="container">
      <div class="hero-box">
        <h1>Shop Facial Hair.<br>We've got your beard covered.</h1>
        <a class="btn btn-full js--scroll-to-plans" href="#">Let's go</a>
        <a class="btn btn-ghost js--scroll-to-start" href="#">Show me more</a>
      </div>
    </div>
    <div
        id="waypoint-1"
        v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
    </div>
  </header>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  name: 'HomeHeader',
  components: {
    Nav,
  },
  data: () => ({
    intersectionOptions: {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      thresholds: [0],
    }, // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    useStickyNav: false,
  }),
  methods: {
    onWaypoint({ el, direction }) {
      if (el.id === 'waypoint-1') {
        if (direction === 'top') {
          this.useStickyNav = true;
        } else if (direction === 'bottom') {
          this.useStickyNav = false;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
  header {
    background-image:
        -webkit-linear-gradient(rgba(128,87,70, .4), rgba(0, 0, 0, .8)),
        url(../assets/fh_bg_hero.jpg);
    background-image:
        linear-gradient(rgba(128,87,70, .4), rgba(0, 0, 0, .8)),
        url(../assets/fh_bg_hero.jpg);
    background-size: cover;
    background-position: center;
    height: 55vh;
    background-attachment: fixed;
  }

  .hero-box {
    width: 1330px;
    margin-top: 60px;
    h1 {
      margin-top: 0;
      margin-bottom: 20px;
      color: #fff;
      font-size: 36px;
      text-transform: uppercase;
      word-spacing: 4px;
      letter-spacing: 1px;
    }

  }
</style>
