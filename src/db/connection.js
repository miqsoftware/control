import { Client } from 'https://deno.land/x/postgres/mod.ts'


import {
    USER,
    DATABASE,
    HOST,
    PORT, 
    PASSWORD
} from '../config.js'
console.log( 
    USER,
    DATABASE,
    HOST,
    PORT, 
    PASSWORD
)

const client =  await new Client(
    {
        user: USER,
        database: DATABASE,
        hostname: HOST,
        port: PORT,
        password: PASSWORD   
    }
);

await client.connect();

// const result = await client.query({
//     text: 'SELECT * FROM fornecedor'
// })

// console.log(result.rows);
const varqual = "cd test"
export { client, varqual }