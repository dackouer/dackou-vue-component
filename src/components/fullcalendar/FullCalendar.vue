<script setup lang="ts">
    import { ref,onMounted, PropType, watch } from 'vue'
    import { Calendar, EventClickArg, EventContentArg } from '@fullcalendar/core'
    import daygrid from '@fullcalendar/daygrid'
    import interaction, { DateClickArg } from '@fullcalendar/interaction'
    import { EventItem } from '@/util/interface'

    const fullCalender = ref()
    const calendar = ref<Calendar>()
    const emits = defineEmits(['dateClick','eventClick'])

    onMounted(() => {
        init()
    })

    const init = () => {
        calendar.value = new Calendar(fullCalender.value,{
            plugins: [daygrid,interaction],
            locale: props.locale,
            initialView: props.initalView,
            buttonText: props.buttonText,
            headerToolbar: props.headerToolbar,
            footerToolbar: props.footerToolbar,
            eventSources: [
                {
                    events(e,callback) {
                        if(props.events.length){
                            callback(props.events)
                        }else{
                            callback([])
                        }
                    }
                }
            ],
            dateClick(info:DateClickArg){
                // console.log(info)
                emits('dateClick',info)
            },
            eventClick(info: EventClickArg) {
                emits('eventClick',info)
            },
            displayEventEnd: props.displayEventEnd,
            eventContent: props.eventContent
        })
        calendar.value.render()
    }

    const props = defineProps({
        // width: {
        //     type: String,
        //     default: '100%'
        // },
        locale: {
            type: String,
            default: 'zh-cn'
        },
        initalView: {
            type: String,
            default: 'dayGridMonth'
        },
        buttonText: {
            type: Object,
            default: () => {
                return {
                    today: '今天',
                    month: '月',
                    week: '周',
                    day: '日',
                    prevYear: '上一年',
                    nextYear: '下一年',
                    prev: '上一月',
                    next: '下一月'
                }
            }
        },
        headerToolbar: {
            type: Object,
            default: () => {
                return {
                    start: 'title',
                    center: '',
                    end: 'prev today next'
                }
            }
        },
        footerToolbar:{
            type: Object,
            default: () => {}
        },
        events: {
            type: Array as PropType<EventItem[]>,
            default: () => []
        },
        displayEventEnd: {
            type: Boolean,
            default: false
        },
        eventContent: {
            type: Function
        }
    })

    watch(() => props.events,() => {
        init()
    },{deep: true})
</script>

<template>
    <div ref="fullCalender">
    </div>
</template>

<style lang="scss" scoped>
    
</style>