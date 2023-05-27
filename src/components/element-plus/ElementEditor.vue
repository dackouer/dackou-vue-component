<script setup lang="ts">
    import '@wangeditor/editor/dist/css/style.css' // 引入 css

    import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
    import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

    const mode = ref('default')

    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()

    // 内容 HTML
    const valueHtml = ref('')
    const toolbarConfig = {}
    const editorConfig = { placeholder: '请输入内容...' }
    const emits = defineEmits(['on-created','on-change','on-destroyed','on-focus','on-blur','custom-alert','custom-paste'])

    // 模拟 ajax 异步获取内容
    onMounted(() => {
        // setTimeout(() => {
            // editorConfig.placeholder = 'hello'
            // valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
        // }, 1500)
    })

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
    })

    const handleEditorCreated = (editor:any) => {
        editorRef.value = editor
        // console.log('created', editor)
        emits('on-created',editor)
    }
    const handleEditorChange = (editor:any) => {
        // console.log('change:', editor.children) 
        emits('on-change',editor)
    }
    const handleEditorDestroyed = (editor:any) => {
        // console.log('destroyed', editor)
        emits('on-destroyed',editor)
    }
    const handleEditorFocus = (editor:any) => {
        // console.log('focus', editor)
        emits('on-focus',editor)
    }
    const handleEditorBlur = (editor:any) => {
        // console.log('blur', editor)
        emits('on-blur',editor)
    }
    const customAlert = (info:any, type:any) => {
        alert(`【自定义提示】${type} - ${info}`)
        emits('custom-alert',info,type)
    }
    const customPaste = (editor:any, event:any, callback:(flag:boolean)=>{}) => {
        // console.log('ClipboardEvent 粘贴事件对象', event)
        // const html = event.clipboardData.getData('text/html') // 获取粘贴的 html
        // const text = event.clipboardData.getData('text/plain') // 获取粘贴的纯文本
        // const rtf = event.clipboardData.getData('text/rtf') // 获取 rtf 数据（如从 word wsp 复制粘贴）

        // 自定义插入内容
        editor.insertText('xxx')

        // 返回 false ，阻止默认粘贴行为
        event.preventDefault()
        callback(false) // 返回值（注意，vue 事件的返回值，不能用 return）

        // 返回 true ，继续默认的粘贴行为
        // callback(true)

        emits('custom-paste',editor,event,callback)
    }
</script>

<template>
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleEditorCreated"
        @onChange="handleEditorChange"
        @onDestroyed="handleEditorDestroyed"
        @onFocus="handleEditorFocus"
        @onBlur="handleEditorBlur"
        @customAlert="customAlert"
        @customPaste="customPaste"
      />
    </div>
</template>

<style lang="scss" scoped>
    
</style>