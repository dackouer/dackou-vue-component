<script setup lang="ts">
    import { ref,onMounted } from 'vue'
    import { EventItem } from '@/util/interface';
    import { EventClickArg, EventContentArg } from '@fullcalendar/core'
    import { DateClickArg } from '@fullcalendar/interaction'

    const events = ref<EventItem[]>([
        {
            title: '购物',
            start: '2023-05-11 08:00',
            end: '2023-05-11 12:00',
            editable: true
        },
        {
            title: '学习',
            start: '2023-05-12 10:00',
            end: '2023-05-12 12:00',
        }
    ])

    onMounted(() => {
        init()
    })

    const init = () => {
        // getEvents()
    }

    const getEvents = () => {
        events.value = [
            {
                title: '购物',
                start: '2023-05-11 08:00',
                end: '2023-05-11 12:00',
                editable: true
            },
            {
                title: '学习',
                start: '2023-05-12 10:00',
                end: '2023-05-12 12:00',
            }
        ]
    }

    const dateClick = (info: DateClickArg) => {
        console.log(info)
        events.value.push({
            title: '学习',
            start: info.dateStr + ' 12:00',
            end: info.dateStr + ' 18:00',
        })
    }

    const eventClick = (info:EventClickArg) => {
        console.log(info)
    }

    const eventContent = (arg: EventContentArg) => {
        const el = document.createElement('div')
        const text = arg.timeText.split('-')
        const start = text[0]
        const end = text[1]
        el.innerHTML = `
            <div>标题：${arg.event._def.title}</div>
            <div>开始：${start}</div>
            <div>结束：${end}</div>
        `
        return { domNodes: [el] }
    }
</script>

<template>
    <div class="w-[900px] m-10">
        <full-calendar :events="events" :displayEventEnd="true" @dateClick="dateClick" @eventClick="eventClick" :eventContent="eventContent" /> 
    </div>
</template>

<style lang="scss" scoped>
    
</style>