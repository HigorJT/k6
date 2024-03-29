import http from 'k6/http';
import { Counter} from 'k6/metrics';
import { Gauge } from 'k6/metrics';
import { Rate } from 'k6/metrics';
import { Trend } from 'k6/metrics';

export const options = {
    vus: 1,
    duration: '3s'
}

const chamadas = new Counter('Counter');
const myGauge = new Gauge('Medidor');
const myRate = new Rate('Rate');
const myTrend = new Trend('Trend');

export default function () {
    const req = http.get('http://test.k6.io/');
    //contador
    chamadas.add(1);
    //medidor
    myGauge.add(req.timings.blocked);
    //taxa
    myRate.add(req.status === 200);
    //tendencia
    myTrend.add(req.timings.waiting);
}