<template>
  <div>
    <Suspense v-if="componentId">
      <component :is="componentId"></component>
    </Suspense>
    <button @click="loadComp('CompA')">loadA</button>
    <button @click="loadComp('CompB')">loadB</button>
  </div>
</template>
<script>
import { defineAsyncComponent, markRaw } from 'vue';
export default {
  data() {
    return {
      componentId: null,
    };
  },
  methods: {
    loadComp(key) {
      this.componentId = markRaw(
        defineAsyncComponent(key === 'CompA' ? window.CompA : window.CompB)
      );
    },
  },
};
</script>
