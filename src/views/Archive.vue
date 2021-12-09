<template>
  <div class="bl_archive">
    <h2 class="el_lv2_ttl">Archive</h2>
    <shop-container :shop-data="pastLunches"></shop-container>
  </div>
</template>

<script>
import ShopContainer from '@/components/ShopContainer.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Archive',
  components: {
    ShopContainer,
  },
  computed: {
    ...mapGetters(['isLoading', 'pastLunches']),
  },
  methods: {
    ...mapActions(['stopIsLoading']),
  },
  mounted() {
    this.stopIsLoading()
  },
}
</script>
