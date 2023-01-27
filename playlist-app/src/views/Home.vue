<template>
  <div>
    <div class="home"></div>
    <div v-if="error" class="error">Could not fetch the data.</div>
    <div v-if="documents">
      <ListView  :playlists="documents"/>
    </div>
  </div>
  
</template>

<script>
import getColl from '../composables/getColl';
import ListView from '@/components/ListView.vue';
export default {
 components :{
  ListView
 },
  setup(){
    const {error, documents} = getColl('playlists');
    
    
    return {error, documents};
  }
}
</script>
