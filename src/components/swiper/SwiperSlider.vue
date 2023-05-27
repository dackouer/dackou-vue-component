<script setup lang="ts">
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import SwiperCore, { Navigation,Pagination, Autoplay } from 'swiper'
    import { PropType } from 'vue';
    import { SwiperItem } from '@/util/interface';

    SwiperCore.use([Navigation, Pagination, Autoplay]);

    const onSwiper = (swiper:any) => {
        console.log(swiper);
    };
    const onSlideChange = () => {
        console.log('slide change');
    };

    const props = defineProps({
        data: {
            type: Array as PropType<SwiperItem[]>,
            requierd: true
        },
        number: {
            type: Number,
            default: 1
        },
        space: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        }
    })
</script>

<template>
    <swiper :slides-per-view="number" :space-between="space" :pagination="{clickable:true}" :autoplay="true" :loop="true" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide v-for="(item,index) in data" :key="index">
            <img :src="item.src" class="w-full"  />
        </swiper-slide>
    </swiper>
</template>

<style lang="scss" scoped>
    
</style>