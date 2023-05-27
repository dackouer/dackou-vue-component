<script setup lang="ts">

    const props = defineProps({
        isCollapse: {
            type: Boolean,
            default: false
        },
        size: {
            type: Number,
            default: 20
        }
    })

    const emits = defineEmits(['update:isCollapse'])

    const toggle = () => {
        emits('update:isCollapse',!props.isCollapse)
    }
</script>

<template>
    <span @click="toggle" class="flex items-center mx-5 cursor-pointer">
        <el-icon :size="size" v-if="isCollapse"><Expand /></el-icon>
        <el-icon :size="size" v-else><Fold /></el-icon>
    </span>
</template>

<style lang="scss" scoped>
    
</style>