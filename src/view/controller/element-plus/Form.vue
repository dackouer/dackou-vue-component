<script setup lang="ts">
    import { ref } from 'vue'
    import { FormOptions } from '@/util/interface'
    import { FormInstance,ElMessage } from 'element-plus'

    const modal = ref<boolean>(true)
    const visible = ref<boolean>(false)
    const options: FormOptions[] = [
        {
            type: 'input',
            label: '用户名',
            value: '',
            prop: 'username',
            rules: [
                {
                    required: true,
                    message: '用户名不能为空',
                    // trigger: 'blur'
                },
                {
                    min: 3,
                    max: 15,
                    message: '用户名长度3-15位',
                    // trigger: 'blur'
                }
            ]

        },
        {
            type: 'input',
            label: '密码',
            value: '',
            prop: 'password',
            attrs:{
                showPassword: true
            },
            rules: [
                {
                    required: true,
                    message: '密码不能为空',
                    // trigger: 'blur'
                },
                {
                    min: 6,
                    max: 18,
                    message: '密码长度6-18位',
                    // trigger: 'blur'
                }
            ]

        },
        {
            type: 'input-number',
            label: '数字框',
            value: 0,
            prop: 'num',
            attrs:{
                min:1,
                max:10
            }
        },
        {
            type: 'switch',
            label: '开关',
            value: '',
            prop: 'switch',
            attrs:{
                inlinePrompt: true,
                activeText: '是',
                inactiveText:"否",
            }
        },
        {
            type: 'date-picker',
            label: '日期',
            value: '',
            prop: 'date',
            attrs:{
            }
        },
        {
            type: 'date-picker',
            label: '日期',
            value: '',
            prop: 'datetime',
            attrs:{
                type: 'datetime'
            }
        },
        {
            type: 'color-picker',
            label: '颜色',
            value: '',
            prop: 'color',
            attrs:{
                // type: 'datetime'
            }
        },
        {
            type: 'rate',
            label: '评分',
            value: 0,
            prop: 'rate',
            attrs:{
                allowHalf: true,
                colors: ['#99A9BF', '#F7BA2A', '#FF9900']
            }
        },
        {
            type: 'select',
            value: '',
            label: '城市',
            prop: 'city',
            placeholder: '请选择城市',
            attrs: {style:{width:'100%'}},
            rules: [
                {
                    required: true,
                    message: '请选择城市',
                    // trigger: 'blur'
                }
            ],
            children: [
                {
                    type: 'option',
                    label: '湖南',
                    value: '1'
                },
                {
                    type: 'option',
                    label: '湖北',
                    value: '2'
                },
                {
                    type: 'option',
                    label: '江西',
                    value: '3'
                },
                {
                    type: 'option',
                    label: '江苏',
                    value: '4'
                }
            ]
        },
        {
            type:'checkbox-group',
            value: [],
            label: '爱好',
            prop: 'like',
            rules: [
                {
                    required: true,
                    message: '请选择爱好',
                    // trigger: 'blur'
                }
            ],
            children: [
                {
                    type: 'checkbox',
                    label: '篮球',
                    value: '1'
                },
                {
                    type: 'checkbox',
                    label: '足球',
                    value: '2'
                }
            ]
        },
        {
            type: 'radio-group',
            value: '',
            label: '性别',
            prop: 'gender',
            rules: [
                {
                    required: true,
                    message: '请选择性别',
                    // trigger: 'blur'
                }
            ],
            children: [
                {
                    type: 'radio',
                    label: '男',
                    value: '1'
                },
                {
                    type: 'radio',
                    label: '女',
                    value: '2'
                },
                {
                    type: 'radio',
                    label: '保密',
                    value: '0'
                }
            ]
        },{
            type: 'icon',
            label: '图标',
            prop: 'icon',
            attrs: {}
        },
        {
            type: 'upload',
            label: '上传',
            prop: 'pic',
            uploadAttrs:{
                type: 'avatar',
                size: 'small',
                title: '上传文件',
                desc: 'jpg/png files with a size less than 500KB.',
                action: 'https://api.dackou.com/upload',
                // multiple: true,
                limit: 1,
                // headers: {Authorization: localStorage.getItem('token')}
            },
            rules: [
                {
                    // required: true,
                    message: '请上传图片',
                    // trigger: 'blur'
                }
            ],
        },
        {
            type: 'editor',
            value: '',
            prop: 'desc',
            label: '描述内容',
            placeholder: '请在这里输入描述内容',
            rules:[
                {
                    // required: true,
                    message: '描述内容不能为空',
                    // trigger: 'blur'
                }
            ]
        }
    ]

    interface ScopeItem{
        form: FormInstance,
        model: any
    }

    const onSubmit = (scope: ScopeItem) => {
        scope.form.validate((valid:any) => {
            if(valid){
                console.log(scope.model)
                ElMessage.success('okok')
            }else{
                ElMessage.error('error')
            }
        })
    }

    const onReset = (scope: ScopeItem) => {

    }
</script>

<template>
    <div class="w-[80%] m-5 border p-10">
        <element-form :modal="modal" :visible="visible" size="large" label-width="120px" :options="options">
            <template #action="scope">
                <el-button type="primary" @click="onSubmit(scope)">提交</el-button>
                <el-button @click="onReset(scope)">重置</el-button>
            </template>
        </element-form>
    </div>
</template>

<style lang="scss" scoped>
    
</style>