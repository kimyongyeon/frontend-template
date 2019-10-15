import about from './data/about.js';
import home from './data/home.js';
import service from './data/service.js';

const root = document.querySelector('.app-root');

const routes = {
    '/': function () {
        Route.renderHtml(`${home}`);
    },
    '/service': function () {
        Route.renderHtml(`${service}`);
    },
    '/about': function () {
        Route.renderHtml(`${about}`);
    },
    otherwise(path) {
      root.innerHTML = `${path} Not Found`;
    }
};

export const Route = {
    render: function (data) { // json 데이터 가져올때 이상있음...
        // const json = JSON.parse(data);
        const json = data;
        console.log(JSON.stringify(json));
        root.innerHTML = `<h1>${json.title}</h1><p>${json.content}</p>`;
    },
    renderHtml: function(html) {
        root.innerHTML = html;
    },
    get: function(url) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', url);
            req.send();
      
            req.onreadystatechange = function () {
              if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) resolve(req.response);
                else reject(req.statusText);
              }
            };
          });
    },
    router: function (path) {
        (routes[path] || routes.otherwise)(path);
    },

}