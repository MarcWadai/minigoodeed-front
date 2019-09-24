<template>
  <div class="contain_carrousel">
    <div class="row">
      <div class="row__inner">
        <div class="tile" v-for="(photo, index) in data" :key="`photo_${index}`">
          <div class="tile__media">
            <img class="tile__img" :src="photo" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoCarousel",
  props: {
    data: Array
  },
  computed: {}
};
</script>


<style scoped>
.contain_carrousel {
  width: 100%;
  margin: 10px;
  --duration: 450ms;
  --tileWidth: 350px;
  --tileHeight: ($tileWidth / (16/9));
  --iconSize: 50px;
  --growFactor: 1.5;
  --moveLeft: -($tileWidth * ($growFactor - 1) / 2);
  --moveRight: $tileWidth * ($growFactor - 1);
}

.row {
  overflow: scroll;
  width: 100%;
}

.row__inner {
  transition: var(--duration) transform;
  font-size: 0;
  white-space: nowrap;
  margin: (var(--tileHeight) / 2) 0;
  padding-bottom: 10px;
}

.tile {
  position: relative;
  display: inline-block;
  width: var(--tileWidth);
  height: var(--tileHeight);
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: var(--duration) all;
  transform-origin: center left;
}

.tile__img {
  width: var(--tileWidth);
  height: var(--tileHeight);
  object-fit: cover;
}

.row__inner:hover {
  transform: translate3d(var(--moveLeft), 0, 0);
}

.row__inner:hover .tile {
  opacity: 0.3;
}
.row__inner:hover .tile:hover {
  transform: scale(var(--growFactor));
  opacity: 1;
}

.tile:hover ~ .tile {
  transform: translate3d(var(--moveRight), 0, 0);
}
</style>
