<script setup lang="ts">
    import { ref,PropType,onMounted, watch, nextTick,shallowRef,onBeforeUnmount } from 'vue'
    import { FormOptions } from '@/util/interface'
    import cloneDeep from 'lodash/cloneDeep'
    // import { FormInstance } from 'element-plus/lib/components/form/index.js'
    import { FormInstance } from 'element-plus'

    interface PropItem {
        title?: string,
        modal?: boolean,
        visible?: boolean,
        width?: string,
        options: FormOptions[]
    }

    const dialogVisible = ref<boolean>(false)
    const form = ref<FormInstance | null>()
    const model = ref<any>(null)
    const rules = ref<any>(null)

    const props = withDefaults(defineProps<PropItem>(),{
        title: '新增表单',
        modal: true,
        visible: false,
        width: '700px'
    })

    onMounted(async () => {
        await init()
    })

    const init = async () => {
        if(props.options && props.options.length){
            let m:any = {}
            let r:any = {}

            props.options.map((item:FormOptions) => {
                m[item.prop!] = item.value
                r[item.prop!] = item.rules

                // if(item.type === 'editor'){
                //     initEditor(item)
                // }
            })

            model.value = cloneDeep(m)
            rules.value = cloneDeep(r)
        }
    }

    // 选择图标
    const iconSelect = (val:any) => {
        const iconItem = props.options.find(item => item.type === 'icon')
        if(iconItem){
            model.value[iconItem?.prop!] = val
        }
    }

    // 上传文件
    const uploadSuccess = (response:any,uploadFile:any,uploadFiles:any) => {
        console.log('on form upload-success',response)
        const uploadItem = props.options.find(item => item.type === 'upload')
        if(uploadItem){
            switch(uploadItem?.uploadAttrs?.type){
                case 'default':
                    break;
                case 'avatar':
                    model.value[uploadItem?.prop!] = response.data.url
                    break;
                case 'card':
                    break;
                case 'icon':
                    break;
                default:
            }
        }
    }

    // 文本编辑器
    const onEditor = (editor: any) => {
        // console.log('on form editor',editor.getHtml())
        const editorItem = props.options.find(item => item.type === 'editor')
        if(editorItem){
            model.value[editorItem?.prop!] = editor.getHtml()
        }
    }

    // 提交表单
    const onSubmit = () => {
        console.log(model)
    }

</script>

<template>
    <!-- <el-dialog v-model="dialogVisible" :title="title" :width="width" v-if="modal"> -->
        <el-form ref="form" :model="model" :rules="rules" :validate-on-rule-change="false" v-bind="$attrs" v-if="model">
            <template v-for="(item,index) in options" :key="index">
                <el-form-item :label="item.label" :prop="item.prop" v-if="!item.children || !item.children.length">
                    <element-upload v-if="item.type === 'upload'" v-bind="item.uploadAttrs" @on-success="uploadSuccess"></element-upload>
                    <element-editor v-if="item.type === 'editor'" v-bind="item.attrs" @on-change="onEditor"></element-editor>
                    <element-icon v-if="item.type === 'icon'" v-bind="item.attrs" @onSelect="iconSelect"></element-icon>
                    <component v-model="model[item.prop!]" v-bind="item.attrs" :placeholder="item.placeholder" :is="`el-${item.type}`" v-else></component>
                </el-form-item>

                <el-form-item :label="item.label" :prop="item.prop" v-else>
                    <component v-model="model[item.prop!]" v-bind="item.attrs" :placeholder="item.placeholder" :is="`el-${item.type}`">
                        <component :label="child.label" :value="child.value" v-for="(child,idx) in item.children" :key="idx" :is="`el-${child.type}`"></component>
                    </component>
                </el-form-item>
            </template>
            <el-form-item>
                <slot name="action" :form="form" :model="model"></slot>
            </el-form-item>
        </el-form>
    <!-- </el-dialog> -->
</template>

<style lang="scss" scoped>
    
</style>