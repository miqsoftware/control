
const env = Deno.env.toObject();
const PORT = env.PORT || 5432;
const HOST = env.HOST || 'localhost';
const DATABASE = env.DATABASE || 'managercontrol';
const USER = env.USER || 'miqueias'
const PASSWORD =  env.PASSWORD || '996503mr'

export {
    PORT,
    HOST,
    DATABASE,
    USER,
    PASSWORD,
}