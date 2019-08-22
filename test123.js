const app = require('express')();
const axios = require('axios')
const PORT = 4000;

const ErrorLoggerMiddleware = async (req, res, callback) => {
    try {
        console.log('Start', callback.name)
        await callback().catch( error => {
            // handle error
        });
        console.log('End', callback.name)
    } catch (e) {
        // Log error
        console.log('Catch in Fn ErrorLoggerMiddleware', e);
    }
}

const test1 = (req, res, next) => {
    try {
        const a = 1;
        console.log(a);
        const a1 = test2().catch( error => {
            // handle error
            console.log("eeeeeeeeeeeeeeeeeee", error)
            return new Error(error)
        });
        return a + a1
    } catch (e) {
        console.log("Catch ham Test1", e)
        throw new Error(e.message)
    }
}

const test2 = async () => {
    const a = b + c;
    const data = await axios.get('https://dog.ceo/api/breeds/list/all').data;
    res.send({data});
}

//app.use(ErrorLoggerMiddleware);

app.get('/', test1)

app.listen(4000, () => {
    console.log('Server is running at PORT', 4000);
});
