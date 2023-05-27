<script setup lang="ts">
    import { ref } from 'vue'

    const type = ref('ahm')

    const onChange = (val:any) => {
        type.value = val
    }
</script>

<template>
    <el-select @change="onChange">
        <el-option value="hm">header main</el-option>
        <el-option value="hmf">header main footer</el-option>
        <el-option value="am">aside main</el-option>
        <el-option value="ham">header aside main</el-option>
        <el-option value="hamf">header aside main footer</el-option>
        <el-option value="ahm">aside header main</el-option>
        <el-option value="ahmf">aside header main footer</el-option>
    </el-select>
    <div class="w-[70%] min-w-[700px] mt-5 border">
        <element-layout :mode="type" class="bg-white" :isFull="false">
            <template #header style="background-color: red;">
                <div class="w-[100%] h-[100%] bg-red-500 p-4">header</div> 
            </template>
            <template #aside>
                <div class="w-[100%] h-[100%] bg-blue-500 p-4">aside</div> 
            </template>
            <template #main>
                <div class="w-[100%] h-[100%] bg-slate-700 p-4">main</div> 
            </template>
            <template #footer>
                <div class="w-[100%] h-[100%] bg-orange-400 p-4">footer</div> 
            </template>
        </element-layout>
    </div>
</template>

<style lang="scss" scoped>
    
</style>