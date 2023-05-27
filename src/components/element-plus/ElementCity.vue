<script setup lang="ts">
    import { ref, watch,onMounted } from 'vue'
    import AllCity from '@/api/city/pcas-code.json'

    export interface CityItem{
        code: string,
        name: string,
        children?: CityItem[]
    }

    const width = ref(0)

    const province = ref<string>('')
    const provinceData = ref<CityItem[]>(AllCity as CityItem[])

    const city = ref<string>('')
    const cityData = ref<CityItem[]>(AllCity as CityItem[])

    const area = ref<string>('')
    const areaData = ref<CityItem[]>(AllCity as CityItem[])

    const street = ref<string>('')
    const streetData = ref<CityItem[]>(AllCity as CityItem[])

    const village = ref<string>('')
    const villageData = ref<CityItem[]>(AllCity as CityItem[])

    watch(() => province.value, val => {
        if(val){
            let citys = provinceData.value.find(item => item.code === val)?.children!
            cityData.value = citys
        }
        city.value = ''
        area.value = ''
        street.value = ''
        village.value = ''
    })

    watch(() => city.value, val => {
        if(val){
            let citys = cityData.value.find(item => item.code === val)?.children!
            areaData.value = citys
        }
        area.value = ''
        street.value = ''
        village.value = ''
    })

    watch(() => area.value, val => {
        if(val){
            let citys = areaData.value.find(item => item.code === val)?.children!
            streetData.value = citys
        }
        street.value = ''
        village.value = ''
    })

    watch(() => street.value, val => {
        if(val){
            let citys = streetData.value.find(item => item.code === val)?.children!
            villageData.value = citys
        }
        village.value = ''
    })

    watch(() => village.value, val => {
        if(val){
            
        }
    })

    interface PropsItem{
        end?: 1 | 2 | 3 | 4 | 5,
        size?: "" | "default" | "large" | "small" | undefined, 
        width?: number
    }

    const prop = withDefaults(defineProps<PropsItem>(),{
        end: 3,
        size: 'large'
    })

    onMounted(() => {
        if(prop.width){
            width.value = prop.width * prop.end + 5 * (prop.end - 1)
        }
    })
</script>

<template>
    <div class="demo-select-group" :style="width ? `width:${width}px;` : ''">
        <el-select clearable placeholder="请选择省份" :size="size" v-model="province" v-if="end > 0">
            <el-option :value="item.code" v-for="(item,index) in provinceData" :key="index" :label="item.name" />
        </el-select>
        <el-select clearable :disabled="!province" placeholder="请选择城市" :size="size" v-model="city" v-if="end > 1">
            <el-option :value="item.code" v-for="(item,index) in cityData" :key="index" :label="item.name" />
        </el-select>
        <el-select clearable :disabled="!province || !city" placeholder="请选择区县" :size="size" v-model="area" v-if="end > 2">
            <el-option :value="item.code" v-for="(item,index) in areaData" :key="index" :label="item.name" />
        </el-select>
        <el-select clearable :disabled="!province || !city || !area" placeholder="请选择街道" :size="size" v-model="street" v-if="end > 3">
            <el-option :value="item.code" v-for="(item,index) in streetData" :key="index" :label="item.name" />
        </el-select>
        <el-select clearable :disabled="!province || !city || !area || !street" placeholder="请选择村" :size="size" v-model="village" v-if="end > 4">
            <el-option :value="item.code" v-for="(item,index) in villageData" :key="index" :label="item.name" />
        </el-select>
    </div>
</template>

<style lang="scss" scoped>
    .demo-select-group > .el-select:not(:first-child){
        margin-left: 5px;
    }
</style>