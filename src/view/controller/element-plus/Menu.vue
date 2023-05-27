<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import Menu from '@/api/Menu'

    const mode = ref<string>('vertical')
    const menuData = ref()

    onMounted(async () => {
        await init()
    })

    const init = async () => {
        await getMenuData()
    }

    const getMenuData = async () => {
        const res = await Menu.get()

        menuData.value = res
    }

    const onChange = (val:any) => {
        mode.value = val
    }
</script>

<template>
    <el-select @change="onChange">
        <el-option value="vertical">vertical</el-option>
        <el-option value="horizontal">horizontal</el-option>
    </el-select>

    <div class="w-[70%] mt-5 border p-5">
        <element-menu :data="menuData" :mode="mode" />
    </div>
</template>

<style lang="scss" scoped>
    
</style>