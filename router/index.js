export const router = {
    extendRoutes(routes, resolve) {
        routes.push({
            path: '/',
            redirect: '/index'
        })
      }
}
