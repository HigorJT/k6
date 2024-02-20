import http from 'k6/http';
import { sleep } from 'k6';


export default function(){

    const res = http.get(__ENV.URL);

    sleep(1);
}

//comando para executar sem precisar modificar dentro do projeto
// k6 run -e URL=https://test-api.k6.io/public/crocodiles/environment.js