<template>
  <PostForm/>
  <h1>{{ postsCount }}</h1>
  <div class="post" 
  v-for="post in validPost"
  :key="post.id"
  >
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import PostForm from '@/components/PostForm.vue'

export default {
  components: {
    PostForm,
  },
  name: "app",
  methods: mapActions(['fetchPosts']),
  computed: mapGetters(['validPost', 'postsCount']),
  async mounted() {
    // this.$store.dispatch('fetchPosts');
    this.fetchPosts();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #2c3e50;
  margin: 0 auto;
  text-align: center;
}
.post {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
  border: 2px solid #2c3e50;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: #a2f7f2;
}
.post h2 {
  font-size: 30px;
}
</style>
