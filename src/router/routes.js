
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/tasks/:id', component: () => import('pages/Task.vue') },
      { path: '/tasks', component: () => import('pages/Tasks.vue') },
      { path: '/create-task', component: () => import('pages/CreateTask.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
