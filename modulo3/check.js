import http from 'k6/http';
import { check, sleep }  from 'k6';

export const options = {
    vus: 10,
    duration: '2m'
}

export default function () {
    const res = http.get('http://test.k6.io/')

    check(res, {
        'status code é 200': (r) => r.status === 200
    });

    sleep(1);
}