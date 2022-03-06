const { faker } = require('@faker-js/faker');
const axios = require('axios');
// Initializing our variables with a different random data each time it is run
async function t (){for (i = 0; i < 1000; i++) {

    await axios({
    method: 'post',
    url: 'http://localhost:3000/register1',
    data: {
        first_name: faker.name.findName(),
        last_name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.datatype.hexaDecimal(10)
    }
    });
}
};

t()


