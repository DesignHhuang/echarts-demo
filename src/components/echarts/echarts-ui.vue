<script setup lang="ts">
interface Props {
  height?: string;
  width?: string;
}

withDefaults(defineProps<Props>(), {
  height: "120px",
  width: "100%",
});
</script>

<template>
  <div v-bind="$attrs" :style="{ height, width }"></div>
</template>
