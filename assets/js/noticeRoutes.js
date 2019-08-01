// const NoticeEntries = require('../../static/json/notice.json')

// const noticeRoutes = Object.keys(NoticeEntries).map((section) => {
//   const children = NoticeEntries[section].map((child) => ({
//     path: `${child.ymd}/:id`,
//     // name: `${child.id}`,
//     component: () => {
//       return import(`~/static/markdowns/notices/${child.id}.md`)
//     }
//   }))
//   return {
//     path: `/${section}`,
//     // name: `${section}`,
//     component: () => {
//       return import('~/pages/boards/_id')
//     },
//     children
//   }
// })

// export default noticeRoutes
