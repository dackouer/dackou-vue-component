<script setup lang="ts">
    import { ref,watch } from 'vue'
    import * as ElIcons from '@element-plus/icons-vue'

    interface PropsItem{
        title?: string,
        visible?: boolean,
        desc?: string,
        size?: string
    }

    // const props = defineProps<{
    //     title: string,
    //     visible: boolean,
    //     desc?: string
    // }>()

    const iconName = ref()

    const props = withDefaults(defineProps<PropsItem>(),{
        title: '选择图标',
        visible: false,
        desc: '图标选择器',
        size: 'default'
    })

    let dialogVisible = ref<boolean>(props.visible)
    const emits = defineEmits(['update:visible','onSelect'])

    watch(()=>props.visible,val => {
        dialogVisible.value = val
    })

    watch(() => dialogVisible.value,val => {
        emits('update:visible',val)
    })

    const handleClick = () => {
        dialogVisible.value = !props.visible
        emits('update:visible',!props.visible)
    }

    const handleSelect = (val: string) => {
        iconName.value = val
        dialogVisible.value = false
        emits('onSelect',val)
    }
</script>

<template>
    <el-icon :size="26" v-if="iconName" class="mr-2"><component :is="iconName" /></el-icon>
    <el-button @click="handleClick" type="primary" :size="size">
        {{title}}
    </el-button>
    <el-dialog :title="desc ? desc : title" v-model="dialogVisible">
        <el-scrollbar height="500px">
            <div class="container">
                <div class="item" v-for="(item,index) in Object.keys(ElIcons)" :key="item" @click="handleSelect(item)">
                    <div>
                        <el-icon :size="35"><component :is="`${item}`"></component></el-icon>
                    </div>
                    <div>{{ item }}</div>
                </div>
            </div>
        </el-scrollbar>
    </el-dialog>
</template>

<style lang="scss" scoped>
   .container{
        display: flex;
        align-items: center;
        flex-wrap: wrap;

   } 
   .item{
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
        cursor: pointer;
   }
</style>    