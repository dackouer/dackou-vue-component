<script setup lang="ts">
    import { ref } from 'vue'
    import { TableOptions } from '@/util/interface';

    interface TableItem{
        date?: string,
        name?: string,
        address?: string
    }
    const tableData = ref<TableItem[]>([])

    setTimeout(() => {
        tableData.value = [
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            }
        ]
    },500)

    const options: TableOptions[] = [
        {
            type: 'date',
            label: '日期',
            prop: 'date',
            align: 'center',
        },
        {
            type: 'icon',
            label: '姓名',
            prop: 'name',
            align: 'center',
            value: 'Odometer',
            size: 25
        },
        {
            type: 'title',
            label: '地址',
            prop: 'address',
            align: 'center',
            editable: true
        },
        {
            type: 'title',
            label: '操作',
            align: 'center',
            action: true
        }
    ]
</script>

<template>
    <element-table size="large" :data="tableData" :options="options" element-loading-text="加载中..." />
</template>

<style lang="scss" scoped>
    
</style>