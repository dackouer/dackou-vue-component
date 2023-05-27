import { CSSProperties } from "vue"
import { RuleItem } from "./ruleitem"

export interface MenuItem{
    id?: number
    title?: string
    code?: string
    pic?: string
    level?: number
    pid?: number
    number?: number
    sort?: number
    is_open?: boolean | number
    router?: string
    pvalue?: string | number
    cvalue?: string | number
    svalue?: string | number
    isopen?: boolean
    url?: string
    type?: String
    create_time?: string
    update_time?: string
    is_del?: boolean | number
    children?: MenuItem[]
}

export interface FormOptions {
    type: 'cascader' | 'checkbox' | 'checkbox-group' | 'checkbox-button' | 'color-picker' | 'date-picker' | 'datetime-picker' | 'time-picker' | 'time-select' | 'input' | 'input-number' | 'radio' | 'radio-group' | 'radio-button' | 'rate' | 'select' | 'option' | 'slider' | 'switch' | 'transfer' | 'upload' | 'editor' | 'icon',
    label?: string,
    value?: any,
    prop?: string,
    rules?: RuleItem[],
    placeholder?: string,
    attrs?: {
        type?: string,
        min?: number,
        max?: number,
        colors?: object,
        allowHalf?: boolean,
        inlinePrompt?: boolean,
        activeText?: string,
        inactiveText?: string,
        clearable?: boolean,
        showPassword?: boolean,
        disabled?: boolean,
        style?: CSSProperties,
        size?: 'small' | 'default' | 'large'
    },
    children?: FormOptions[],
    uploadAttrs?: {
      action: string,
      type?: 'default' | 'avatar' | 'icon' | 'card',
      title?: string,
      desc?: string,
      size?: 'small' | 'default' | 'large',
      headers?: object,
      method?: 'post' | 'put' | 'patch',
      multiple?: boolean,
      data?: any,
      name?: string,
      withCredentials?: boolean,
      showFileList?: boolean,
      drag?: boolean,
      accept?: string,
      thumbnailMode?: boolean,
      fileList?: any[],
      listType?: 'text' | 'picture' | 'picture-card',
      autoUpload?: boolean,
      disabled?: boolean,
      limit?: number
    }
}

export interface UploadResponse{
    extension?: string
    key?: string
    mime_type?: string
    origin_name?: string
    save_name?: string
    save_path?: string
    size?: number
    unique_id?: string
    url?: string
}

export interface TableOptions{
    type?: string,
    label: string,
    prop?: string,
    width?: string | number,
    align?: 'left' | 'center' | 'right',
    size?: number,
    length?: number,
    default?: any,
    value?: any,
    editable?: boolean,
    slot?: string,
    action?: boolean
}

export interface EventItem{
    title: string,
    start: string,
    end: string,
    editable?: boolean
}

export interface SwiperItem{
    id?: number,
    title?: string,
    src: string,
    url?: string
}