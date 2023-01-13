<template>
  <div class="home">
    <filter-nav @filterChange="current = $event" :current="current"></filter-nav>
   <div v-if="projects.length">
    <div v-for="project in filteredProject" :key="project.id">
      <SingleProject :project="project"
       @complate="handleComplate"
       @delete="handleDelete">
      </SingleProject>
    </div>
   </div>
  </div>
</template>

<script>
import SingleProject from "@/components/SingleProject.vue"
import FilterNav from '../components/FilterNav.vue'
export default {
  name: 'Home',
  components: {
   SingleProject,
    FilterNav
  },
  data(){
    return{
      projects : [],
      current : 'all'
    }
  },
  mounted(){
    fetch("http://localhost:3000/projects")
    .then(res => res.json())
    .then(data => this.projects = data)
    .catch(err => console.log(err.msg))
  },
  methods :{
    handleDelete(id){
      this.projects = this.projects.filter((project) => project.id !== id)
    },
    handleComplate(id){
      let p = this.projects.find(project => project.id === id);
      p.complate = !p.complate;
    }
  },
  computed:{
    filteredProject (){
      if(this.current === 'completed'){
        return this.projects.filter(project => project.complate)
      }
      if(this.current === 'ongoing'){
        return this.projects.filter(project => !project.complate)
      }
      return this.projects;
    }
  }

}
</script>
