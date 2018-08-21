import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

// Route Templates

import Home from '@/components/Home'
import Websites from '@/components/Websites'
import SingleWebsite from '@/components/SingleWebsite'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Apps from '@/components/Apps'

// Helper

import smoothScroll from '../helpers/smoothScroll'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/websites',
      name: 'Websites',
      component: Websites
    },
    {
      path: '/websites/:slug',
      component: SingleWebsite
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/apps',
      name: 'Apps',
      component: Apps
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    
    const transitionTime = 600;
    
    return new Promise((resolve, reject) => {
      
      // Immediately smooth scroll to top of page
      
      setTimeout(() => {
        smoothScroll(0, transitionTime);
      }, 0);
      
      // Reset scroll behavior positioning so we have a fresh reset point
      
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, transitionTime + 100);
      
    });
    
  }
  
})
