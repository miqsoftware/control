import { verifyToken } from './src/token/generator.ts';

const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTExMDg0NTMuNTk2LCJpbmZvIjoxMjM0NTZ9.nJBQPMcSovLhcUDK6XzoI-HJvmOU-4frXEVgTRaHxKifrQc1jeQJpsa6TGjdcsYgAgL9ilxKHqNRjZhhUd3o2A'
const { info } = await verifyToken(token)
console.log(info);
