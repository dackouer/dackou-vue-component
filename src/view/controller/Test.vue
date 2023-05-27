<script setup lang="ts">
    import { ElMessage } from 'element-plus'

    const test = () => {
        ElMessage('this is test message')
    }
</script>

<template>
    test<br />

    <el-button type="primary" class="" @click="test">test</el-button>
</template>

<style lang="scss" scoped>
    
</style>