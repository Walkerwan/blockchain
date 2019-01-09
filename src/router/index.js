import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import ProjectStart from "@/components/project-start/project-start.vue";
import ProjectHomepage from "@/components/homepage/homepage.vue";

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/project'
    },
    {
      path: '/project',
      name: 'ProjectStart',
      component: ProjectStart,
      // redirect: '/project/homepage',
      children: [
        {
          path: '/project/homepage',
          name: 'ProjectHomepage',
          component: ProjectHomepage,
        },
      ]
    },
  ]
})
