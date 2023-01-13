<template>
  <!-- <h3>Edit Project</h3> -->
  <form @submit.prevent="handleEdit">
    <label>Title</label>
    <input type="text" v-model="title" required>
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <button >Edit Project</button>
  </form>
</template>


<script>


export default {
    props : ['id'],
  data(){
    return{
      title :'',
      details :'',
      uri : 'http://localhost:3000/projects/'+this.id
    }
  },
  mounted(){
    fetch(this.uri)
    .then(res => res.json())
    .then(data =>{
        this.title = data.title
        this.details = data.details

    } )
  },
  methods : {
   
    handleEdit(){
      let project = {
        title : this.title,
        details : this.details,
      }
      fetch(this.uri,{
        method : 'PATCH',
        headers: {'Content-Type' : 'application/json'},
        body : JSON.stringify(project)
      })
      .then(() => {
        this.$emit('updateData', true)
        alert('Düzenleme başarılı ana sayfaya yönlendiriliyorsunuz.');
        setTimeout(() => {
          this.$router.push('/')
          }, "2000")
         
      } )
      .catch(err => console.log(err))
    },
   
    
  }
}
</script>

<style>
form{
  margin-top: 15px ;
  background:  rgb(245, 243, 243);
  padding: 20px;
  border-radius: 10px;
}
label{
  display: block;
  color: rgb(51, 50, 50);
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input{
  padding: 10px;
  border: 0;
  border-bottom: 2px solid rgb(170, 168, 168);
  width: 100%;
  box-sizing: border-box;
}
textarea {

  border: 2px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #76dd78;
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  font-size: 14px;
}
</style>