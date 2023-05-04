import { faker } from '@faker-js/faker';

faker.locale = 'es';

export const generateUser = () => {
    const numOfProducts = parseInt(faker.random.numeric(1, {
        bannedDigits: ["0"]
    }));

    let products = [];

    for (let i = 0; i < numOfProducts; i++) {
        products.push(generateProduct());
    }

    return {
        name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        sex: faker.name.sex(),
        bithDate: faker.date.birthdate(),
        phone: faker.phone.number(),
        image: faker.image.imageUrl(),
        id: faker.database.mongodbObjectId(),
        email: faker.internet.email(),
        products,
        role: faker.helpers.arrayElement(['cliente', 'vendedor']),
        premium: faker.datatype.boolean(),
        jobTitle: faker.name.jobTitle()
    }
}

export const generateProduct = () => {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        stock: faker.random.numeric(1),
        id: faker.database.mongodbObjectId(),
        image: faker.image.image(),
        code: faker.random.alphaNumeric(10),
        description: faker.commerce.productDescription()
    }
}