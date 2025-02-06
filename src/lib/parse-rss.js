import { parse } from 'rss-to-json';

export default function (url) {
    url = `https://proxy.corsfix.com/?${url}`;
    parse(url).then(rss => {
        return rss;
    })
}