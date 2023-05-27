<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import Menu from '@/api/Menu'

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
</script>

<template>
    <element-layout mode="ahm">
        <template #aside>
            <div class="text-center py-5">dack-vue-component</div>
            <element-menu :data="menuData" :router="true" class="menu-nav" />
        </template>
        <template #header>
            header
        </template>
        <template #main>
            <router-view />
        </template>
    </element-layout>
</template>

<style lang="scss" scoped>
    .menu-nav{
        --bg-color: red
    }
</style>