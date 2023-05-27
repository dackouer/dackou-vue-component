<script setup lang="ts">
    import { ref } from 'vue'
    const swiperItem = ref([
        {id:1,title:'title 4',src:'/images/104.jpg'},
        {id:2,title:'title 2',src:'/images/102.jpg'},
        {id:3,title:'title 3',src:'/images/103.jpg'},
        {id:4,title:'title 1',src:'/images/101.jpg'},
        {id:5,title:'title 5',src:'/images/105.jpg'},
    ])
</script>

<template>
    <div class="w-[70%] mx-auto">
        <swiper-slider :data="swiperItem" />
    </div>
</template>

<style lang="scss" scoped>
    
</style>