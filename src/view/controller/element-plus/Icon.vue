<script setup lang="ts">
    import { ref } from 'vue'

    const visible = ref<boolean>(false)
    const icon = ref<string>('')

    const onSelect = (val:any) => {
        // console.log(val)
        icon.value = val
    }
</script>

<template>
    <element-icon @onSelect="onSelect" />

    <div class="mt-5" v-if="icon">
        您选择的图标是： <el-icon><component :is="icon" /></el-icon>
    </div>
</template>

<style lang="scss" scoped>
    
</style>