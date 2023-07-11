<template>
    <form @submit.prevent="submit">
        <input type="text" 
        placeholder="title"
        v-model="title"
        >
        <input type="text" 
        placeholder="body"
        v-model="body"
        >
        <button type="submit">Создать пост</button>
    </form>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        data() {
            return {
                title: '',
                body: '',
            }
        },
        methods: {
            ...mapMutations(['createPost']),
            submit() {
                this.createPost({
                    title: this.title,
                    body: this.body,
                    id: Date.now(),
                })
                this.title = this.body = '';
            }
        }
    }
</script>

<style>
    form {
        background: #a0ffef;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        border-radius: 10px;
        width: 50%;
        padding: 20px;
    }
    input {
        border: 1px solid #00493d;
        width: 100%;
        padding: 5px;
        border-radius: 5px;
    }
    button {
        border: 1px solid #009dff;
        background: #009dff;
        box-shadow: 0 0 10px #009dff;
        border-radius: 10px;
    }
</style>