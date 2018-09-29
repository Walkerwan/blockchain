import Vue from 'vue'
import Router from 'vue-router'

import ProjectLogin from '@/components/project-login/project-login.vue'
import ProjectContent from '@/components/project-content/project-content.vue'

import Admin from '@/components/project-content/bottom-content/admin/admin.vue'
import Account from '@/components/project-content/bottom-content/admin/account/account.vue'
import Homepage from '@/components/project-content/bottom-content/admin/homepage/homepage.vue'

import Associator from '@/components/project-content/bottom-content/associator/associator.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'ProjectLogin',
      component: ProjectLogin
    },
    {
      path: '/project',
      name: 'ProjectContent',
      component: ProjectContent,
      children: [
        {
          path: '/project/admin',
          name: 'Admin',
          component: Admin,
          children: [
            {
              path: '/project/admin/homepage',
              name: 'Homepage',
              component: Homepage,
            },
            {
              path: '/project/admin/account',
              name: 'Account',
              component: Account,
            }
          ],
          redirect: '/project/admin/homepage'
        },
        {
          path: '/project/associator',
          name: 'Associator',
          component: Associator
        }
      ],
      redirect: '/project/admin'
    }
  ]
})
