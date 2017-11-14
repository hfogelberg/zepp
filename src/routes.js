import Home from './components/Home.vue';
import Callback from './components/Callback.vue';
import Notes from './components/Notes.vue';

export const routes = [
    { path: "", component: Home },
    { path: "/auth/google/callback",  component: Callback },
    { path: "/notes", component: Notes },
]