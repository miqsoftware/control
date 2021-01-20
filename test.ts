import { createToken, verifyToken } from './src/token/generator.ts';

const token = await createToken(123456);
console.log(token);

