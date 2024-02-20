import http from 'k6/http';
import {sleep, check} from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    stages: [
        { duration: '10s', target: 10 }, 
        { duration: '10s', target: 10 },
        { duration: '10s', target: 0 } 
    ],
    thresholds: {
        checks: ['rate > 0.95'],
        http_req_duration: ['p(95) < 200']
    },
    ext:{
        loadimpact:{
            projectID: '3682829',
            name: 'POC CURSO K6'
        }
    }
}

export default function(){

    const BASE_URL = 'https://test-api.k6.io/public/crocodiles';
    const res = http.get(BASE_URL)
    
    check(res,{
        'status 200': (r) => r.status === 200
    });
    sleep(1);
}

export function handleSummary(data) {
    return {
      "test.html": htmlReport(data),
    };
  }