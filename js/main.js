import 'babel-polyfill';
import world from './world';
import { Route } from './route';

window.addEventListener('popstate', e => {
    console.log('[popstate]', e.state);
    Route.router(e.state.path);
});

const navigation = document.getElementById('navigation');
navigation.addEventListener('click', e => {
    if (!e.target || e.target.nodeName !== 'A') return;
    e.preventDefault();
    const path = e.target.getAttribute('href');
    history.pushState({ path }, null, path);
    Route.router(path);
});

Route.router('/');

document.getElementById('output').innerHTML = `Hello ${world}!`;