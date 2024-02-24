import axios from 'axios';

const facturas = axios.create({ baseURL: 'https://znvquq5011.execute-api.us-east-1.amazonaws.com/test/invoices' });

export default facturas;