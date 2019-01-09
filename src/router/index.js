import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import ProjectStart from "@/components/project-start/project-start.vue";
import ProjectHomepage from "@/components/homepage/homepage.vue";
import ProjectZcbass from "@/components/zcbass/zcbass.vue";
import ProjectIntroduction from "@/components/introduction/introduction.vue";
import ProjectCloudChain from "@/components/cloud-chain/cloud-chain.vue";
import ProjectOrigin from "@/components/origin/origin.vue";
import ProjectAccount from "@/components/account/account.vue";

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
      redirect: '/project/homepage',
      children: [
        {
          path: '/project/homepage',
          name: 'ProjectHomepage',
          component: ProjectHomepage,
        },
        {
          path: '/project/zcbass',
          name: 'ProjectZcbass',
          component: ProjectZcbass,
        },
        {
          path: '/project/introduction',
          name: 'introduction',
          component: ProjectIntroduction,
        },
        {
          path: '/project/cloudchain',
          name: 'cloudchain',
          component: ProjectCloudChain,
        },
        {
          path: '/project/origin',
          name: 'origin',
          component: ProjectOrigin,
        },
        {
          path: '/project/account',
          name: 'account',
          component: ProjectAccount,
        },
      ]
    },
  ]
})
