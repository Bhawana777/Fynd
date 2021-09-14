import Router from 'vue-router';

// @ -> src/ folder
import Home from '@/components/AppHome';
import WorkshopsList from '@/components/WorkshopsList';

const router = new Router({
    mode: 'history',
    routes: [{
            name: 'Home',
            path: '/',
            component: AppHome
        },
        {
            name: 'workshops list',
            path: '/workshops',
            component: WorkshopsList
        }
    ]
});

export default router;