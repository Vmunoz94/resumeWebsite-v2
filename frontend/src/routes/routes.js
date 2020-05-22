import Website from '../components/website/Website.vue';
// import Resume from '../components/resume/ResumePage.vue';

export const routes = [
    { path: '/', component: Website, name: 'home'},
    // { path: '/resume', component: Resume},
    { path: '*', redirect: {name: 'home'} },
];