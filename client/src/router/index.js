import Vue from 'vue';
import Router from 'vue-router';
import Questions from '@/components/Questions';
import Question from '@/components/Question';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Questions',
      component: Questions,
    },
    {
      path: '/question/:id',
      name: 'Question',
      component: Question,
    },
  ],
  mode: 'history',
});
