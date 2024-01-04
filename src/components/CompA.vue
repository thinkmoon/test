<template>
  <div>
    AAAAAAAA
    <Son></Son>
  </div>
</template>
<script>
import Son from './Son.vue';
import Amixin from './../mixins/a.mixin';

export default {
  components: { Son },
  mixins: [Amixin],
};
</script>
