// const buf = Buffer.from('---hello world', 'ascii');
// const obj = { buf };
// 
// console.log(buf);
// console.log(obj);
// console.log(JSON.stringify(obj));
// 
// module.exports = () => {
//     console.log('buf', buf);
//     return buf;
// };

module.exports = () => {
    return {
        isMetaBox: true,
        responseShouldEscapeBufferRecover: false,
        response: '222',
    };
};
