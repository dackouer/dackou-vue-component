class Menu{
    table = 'menu'

    get(){
        return new Promise(resolve => {
            resolve([
                {id:1, title: '首页',router: ''},
                {id:2, title: 'ElementPlus',router: '', children: [
                    {id:10, title:'layout',router:'element-plus/layout'},
                    {id:11, title:'menu',router:'element-plus/menu'},
                    {id:12, title:'icon',router:'element-plus/icon'},
                    {id:13, title:'form',router:'element-plus/form'},
                    {id:14, title:'table',router:'element-plus/table'},
                    {id:15, title:'datetime',router:'element-plus/datetime'},
                    {id:16, title:'upload',router:'element-plus/upload'},
                    {id:17, title:'city',router:'element-plus/city'},
                    {id:18, title:'nav',router:'element-plus/nav'},
                    {id:19, title:'tab',router:'element-plus/tab'},
                    {id:20, title:'shrink',router:'element-plus/shrink'},
                ]},
                {id:3, title: 'Swiper',router: '', children: [
                    {id:30, title:'swiper',router:'swiper/swiper'}
                ]},
                {id:4, title: 'FullCalendar',router: '', children: [
                    {id:40, title:'fullcalendar',router:'fullcalendar/calendar'}
                ]},
            ])
        })
    }
}

export default new Menu()