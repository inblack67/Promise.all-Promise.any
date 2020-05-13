const axios = require('axios');
require('core-js/features/promise/any');

// https://api.frankfurter.app/latest?base=${currency}
// https://api.ratesapi.io/api/latest?base=${currency}

const frankAPI = async (currency) => {
    const res = await axios(`https://api.frankfurter.app/latest?base=${currency}`);
    return {...res.data, source: 'Frank'};
}

const ratesAPI = async (currency) => {
    const res = await axios(`https://api.ratesapi.io/api/latest?base=${currency}`);
    return {...res.data, source: 'Rates'};
}

const main = async () => {
    const currencies = ['USD', 'CAD'];
    const res = await Promise.any([ ratesAPI('USD'), frankAPI('CAD') ]);
    console.log(res);
}

main();