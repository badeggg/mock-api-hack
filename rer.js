mock = require('@badeggg/mock-api');
mock(3002)
    .then(ser => {
        console.log('=== ser.address()', ser.address());
        console.log('=== ser.listening', ser.listening);
        console.log('=== ser.ddd', ser.ddd);
        console.log('=== ser.getHttpLocation()', ser.getHttpLocation());
        console.log('=== ser.getWsLocation()', ser.getWsLocation());
        try {
            ser.close();
            console.log('2=== ser.address()', ser.address());
            console.log('2=== ser.listening', ser.listening);
            console.log('2=== ser.getHttpLocation()', ser.getHttpLocation());
            console.log('2=== ser.getWsLocation()', ser.getWsLocation());
            ser.listen(8800);
        } catch(err) {
            console.error(err)
        }
        console.log('1=== ser.address()', ser.address());
        console.log('1=== ser.listening', ser.listening);
        console.log('1=== ser.getHttpLocation()', ser.getHttpLocation());
        console.log('1=== ser.getWsLocation()', ser.getWsLocation());
        // setTimeout(ser.close, 1000);
    });
