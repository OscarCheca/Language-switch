<script setup lang="js">

import {ref} from "vue";
import LanguageSwitch from "./language-switch.vue";

const drawerVisible = ref(false);
const toggleDrawer = () => {
    drawerVisible.value = !drawerVisible.value;
};
</script>

<template>
<div>
  <div>
    <pv-menubar>
      <template #start>
        <pv-button icon="pi pi-bars" label="Catchup" text @click="toggleDrawer" />
      </template>
      <template #end>
        <language-switch></language-switch>
        </template>
    </pv-menubar>
  </div>
</div>
  <div>
    <!-- TODO: Article List -->
  </div>
</template>

<style scoped>

</style>