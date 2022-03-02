<template>
  <div>
    <p>Copyright 2022 {{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    title: {
      type: String,
      required: false,
      default:'Test title'
    },
  },
};
</script>
<style>
div {
  color: black;
  text-align: center;
}
p {
  color: rgb(0, 8, 77);
  text-align: center;
}
</style>
