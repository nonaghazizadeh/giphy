<template>
  <div class="home">
    <trending>
    </trending>
    <artists>
    </artists>
    <clips>
    </clips>
    <stories>
    </stories>
  </div>
</template>

<script>
// @ is an alias to /src
import Trending from '@/components/Trending.vue'
import Artists from '@/components/Artists.vue'
import Clips from '@/components/Clips.vue'
import Stories from '../components/Stories.vue'


export default {
  name: 'Home',
  components: {
    Trending,
    Artists,
    Clips,
    Stories
  }
}
</script>
