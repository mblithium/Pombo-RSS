import { parse } from 'rss-to-json';

export default function (url) {
    parse(url).then(rss => {
        return rss;
    })
}