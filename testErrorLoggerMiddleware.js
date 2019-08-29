const app = require('express')();
const axios = require('axios')
const PORT = 3000;

const ErrorLoggerMiddleware = fn => async (req, res, next) => {
    try {
        console.log('Start')
        await fn();
        console.log('End')
    } catch (e) {
        // Log error
        console.log('Catch in Fn ErrorLoggerMiddleware', e);
    }
}


app.get('/', async (req, res, next) => {
    // Đoạn này test xem Catch của hàm ErrorLoggerMiddleware có bắt được lỗi không => Result: không được
    // console.log(222222)
    // throw new Error('Loi oke ne');

    // Đoạn này test xem Catch ở đây có bắt được không => Result: Bắt được
    try {
        console.log('Router action')
        throw new Error('Loi oke ne');
    } catch (e) {
        console.log("Catch Router", e)
    }
});

const test = async (req, res, next) => {
    const a = b + c; // cố tình làm lỗi
    // throw new Error('Loi oke ne'); // test throw Error k chạy qua catch của hàm ErrorLoggerMiddleware
    const data = await axios.get('https://dog.ceo/api/breeds/list/all').data;
    res.send({data});
    console.log('Router action')
}
app.get('/test', async (req, res, next) => {
    // Đoạn này test xem có chạy theo đúng thứ tự hay không
    await test(req, res, next);
})

app.get('/test1', ErrorLoggerMiddleware(test));

app.listen(PORT, () => {
    console.log('Server is running at PORT',PORT);
});
