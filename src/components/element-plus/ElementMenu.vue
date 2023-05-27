<script setup lang="ts">
    import { PropType } from 'vue'
    import { MenuItem } from '@/util/interface'

    const props = defineProps({
        data: {
            type: Array as PropType<MenuItem[]>,
            required: true,
            default: []
        }
    })
</script>

<template>
    <el-menu class="" v-bind="$attrs">
        <template v-for="(item,index) in data" :key="index">
            <el-sub-menu :index="item.router ? item.router : `${index}`" v-if="item.children && item.children.length" class="bg-unset">
                <template #title>
                    <component v-if="item.pic" :is="`${item.pic}`"></component>
                    <span>{{ item.title }}</span>
                </template>
                <template v-for="(itm,indx) in item.children" :key="`${itm.id}`">
                    <el-sub-menu :index="itm.router ? itm.router : `${indx}`" v-if="itm.children && itm.children.length">
                        <template #title>
                            <component v-if="itm.pic" :is="`${itm.pic}`"></component>
                            <span>{{ itm.title }}</span>
                        </template>
                        <template v-for="(im,idx) in itm.children" :key="`${im.id}`">
                            <el-sub-menu :index="im.router ? im.router : `${idx}`" v-if="im.children && im.children.length">
                                <template #title>
                                    <component v-if="im.pic" :is="`${im.pic}`"></component>
                                    <span>{{ im.title }}</span>
                                </template>
                            </el-sub-menu>
                            <el-menu-item :index="`/${im.router}`" v-else>
                                <component v-if="im.pic" :is="`${im.pic}`"></component>
                                <span>{{ im.title }}</span>
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                    <el-menu-item :index="`/${itm.router}`" v-else>
                        <component v-if="itm.pic" :is="`${itm.pic}`"></component>
                        <span>{{ itm.title }}</span>
                    </el-menu-item>
                </template>
            </el-sub-menu>

            <el-menu-item :index="`/${item.router}`" v-else>
                <component v-if="item.pic" :is="`${item.pic}`"></component>
                <span>{{ item.title }}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<style lang="scss" scoped>
    
</style>