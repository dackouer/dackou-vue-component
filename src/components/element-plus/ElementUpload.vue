<script setup lang="ts">
    import { ref } from 'vue'
    import { ElMessage, ElMessageBox } from 'element-plus'
    import type { UploadFile, UploadFiles, UploadProgressEvent, UploadProps, UploadUserFile, UploadRawFile } from 'element-plus'
    import { UploadResponse } from '@/util/interface'


    const dialogUploadImageVisible = ref<boolean>(false)
    const dialogUploadImageUrl = ref('')
    const uploadFile = ref<UploadResponse | null>(null)
    const uploadList = ref<UploadResponse[]>([])
    const fileList = ref<UploadUserFile[]>([])
    const emits = defineEmits(['on-preview','on-remove','on-success','on-error','on-progress','on-change','before-upload','before-remove','on-exceed'])


    const handlePreview: UploadProps['onPreview'] = (uploadFile:UploadFile) => {
        console.log('on-preview',uploadFile)
        dialogUploadImageVisible.value = true
        dialogUploadImageUrl.value = uploadFile.url!
        emits('on-preview',uploadFile)
    }

    const handleSuccess: UploadProps['onSuccess'] = (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
        console.log('on-success',response,uploadFile,uploadFiles)
        // uploadFile.value = response?.data
        if(props.type == 'avatar'){
            uploadList.value = []
        }
        uploadList.value.push(response?.data)
        console.log('upload list:',uploadList.value[0].url)
        emits('on-success',response,uploadFile,uploadFiles)
    }

    const handleError: UploadProps['onError'] = (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
        console.log('on-error',error,uploadFile,uploadFiles)
        emits('on-error',error,uploadFile,uploadFiles)
    }

    const handleProgress: UploadProps['onProgress'] = (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
        console.log('on-progress',evt,uploadFile,uploadFiles)
        emits('on-progress',evt,uploadFile,uploadFiles)
    }

    const handleChange: UploadProps['onChange'] = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
        console.log('on-change',uploadFile,uploadFiles)
        emits('on-change',uploadFile,uploadFiles)
    }

    const handleExceed: UploadProps['onExceed'] = (files: File[], uploadFiles: UploadUserFile[]) => {
        console.log('on-exceed')
        ElMessage.warning(
            `The limit is ${props.limit}, you selected ${files.length} files this time, add up to ${
            files.length + uploadFiles.length
            } totally`
        )

        emits('on-exceed',files,uploadFiles)
    }

    const handleRemove: UploadProps['onRemove'] = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
        console.log('on-remove',uploadFile, uploadFiles)
        emits('on-remove',uploadFile, uploadFiles)
    }

    const beforeUpload: UploadProps['beforeUpload'] = (rawFile: UploadRawFile) => {
        console.log('before-upload',rawFile)
        emits('before-upload',rawFile)
    }

    const beforeRemove: UploadProps['beforeRemove'] = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
        console.log('before-remove')
        emits('before-remove',uploadFile,uploadFiles)
        return ElMessageBox.confirm(
            `Cancel the transfer of ${uploadFile.name} ?`
        ).then(
            () => true,
            () => false
        )
    }

    interface PropItem{
        type?: string,
        action?: string,
        title?: string,
        desc?: string,
        limit?: number,
        size?: 'small' | 'default' | 'large'
    }

    const props = withDefaults(defineProps<PropItem>(),{
        type: '',
        title: '上传文件',
        desc: 'jpg/png files with a size less than 500KB.',
        limit: 1,
        size: 'small'
    })
</script>

<template>
    <el-upload
        v-model:file-list="fileList"
        class="upload-demo"
        :action="action"
        :on-preview="handlePreview"
        :on-success="handleSuccess"
        :on-error="handleError"
        :on-progress="handleProgress"
        :on-change="handleChange"
        :on-exceed="handleExceed"
        :on-remove="handleRemove"
        :before-upload="beforeUpload"
        :before-remove="beforeRemove"
        :limit="limit"
        v-if="type == 'default' || !type || type == ''"
    >
        <el-button type="primary" :size="size">{{title}}</el-button>
        <template #tip>
            <div class="el-upload__tip">{{desc}}</div>
        </template>
    </el-upload>

    <el-upload
        class="avatar-uploader"
        :action="action"
        :show-file-list="false"
        :on-preview="handlePreview"
        :on-success="handleSuccess"
        :on-error="handleError"
        :on-progress="handleProgress"
        :on-change="handleChange"
        :on-exceed="handleExceed"
        :on-remove="handleRemove"
        :before-upload="beforeUpload"
        :before-remove="beforeRemove"
        v-if="type == 'avatar'"
    >
        <img v-if="uploadList && uploadList.length" :src="uploadList[0]?.url" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
</template>

<style scoped>
    .avatar-uploader .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>

<style>
    .avatar-uploader .el-upload {
        border: 1px dashed var(--el-border-color);
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: var(--el-transition-duration-fast);
    }

    .avatar-uploader .el-upload:hover {
        border-color: var(--el-color-primary);
    }

    .el-icon.avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        text-align: center;
    }
</style>