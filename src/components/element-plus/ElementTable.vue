<script setup lang="ts">
    import { ref,PropType,computed } from 'vue'
    import { TableOptions } from '@/util/interface'

    const props = defineProps({
        options: {
            type: Array as PropType<TableOptions[]>,
            required: true
        },
        data: {
            type: Array as PropType<any[]>,
            required: true
        }
    })

    const isLoading = computed(() => !props.data || !props.data.length ? true : false)
</script>

<template>
    <el-table v-loading="isLoading" :data="data" v-bind="$attrs">
        <template v-for="(item,index) in options" :key="index">
            <el-table-column :prop="item.prop" :label="item.label" :width="item.width ? item.width : ''" :align="item.align" show-overflow-tooltip>
                <template #default="scope">
                    <span v-html="scope.row[item.prop!]" v-if="item.type == 'title'" />
                    <img :src="scope.row[item.prop!]" class="h-[30px]" v-else-if="item.type == 'img'" />
                    <el-switch :active-value="1" :inactive-value="0" v-else-if="item.type == 'switch'" />
                    <el-icon :size="item.size" v-else-if="item.type == 'icon'"><component :is="`${item.value}`" /></el-icon>
                    <div v-else-if="item.type == 'date'"><el-icon class="mr-1"><Star /></el-icon><span v-html="scope.row[item.prop!]" /></div>
                    <span v-html="scope.row[item.prop!]" v-else />
                </template>
            </el-table-column>
        </template>
    </el-table>
</template>

<style lang="scss" scoped>
    
</style>