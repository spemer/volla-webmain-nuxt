// const TosEntries = require('../../static/json/tos.json')

// const tosRoutes = Object.keys(TosEntries).map((section) => {
//   const children = TosEntries[section].map((child) => ({
//     path: '/tos/:id',
//     name: child.id,
//     component: () => {
//       return import(`~/static/markdowns/tos/${section}/${child.id}.md`)
//     }
//   }))
//   return {
//     path: '/tos/:id',
//     name: section,
//     component: () => {
//       return import('~/pages/tos/_id')
//     },
//     children
//   }
// })

// export default tosRoutes
