<template>
   <div class="chat-window">
     <div class="error" v-if="error">{{ error }}</div>
     <div v-if="documents" class="messages" ref="messages">
      <div v-for="doc in formatedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.user }}</span>
        <span class="message">{{ doc.message }}</span>
    </div>
    </div>
   </div>
</template>

<script>
import getColl from '../composables/getColl';
import {formatDistanceToNow} from "date-fns";
import {computed, ref, onUpdated} from 'vue'
export default {

    setup(){
        const {error, documents} = getColl('messages');
        const formatedDocuments = computed(()=>{
            if(documents.value){
                return documents.value.map((doc) =>{
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return {...doc, createdAt: time}
                })
            }
        });
        const messages = ref(null)
        onUpdated(() =>{
            messages.value.scrollTop = messages.value.scrollHeight
        })

        return{error, documents, formatedDocuments, messages}
    }
}
</script>

<style>
.chat-window{
    background: #fafafa;
    padding: 30px 20px;
    text-align: left;
}
.single{
    margin: 18px 0;

}
.created-at{
    display: block;
    color:#999;
    font-size: 12px;
    margin-bottom: 5px;
}
.name{
    font-weight: bold;
    margin-right: 7px;
}
.message{
    max-height: 40px;
    overflow: auto;
}
</style>