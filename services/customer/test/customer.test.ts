import CustomerDto from "../../../common/dto/customer.dto";
import { CustomerSex } from "../../../common/enums/customer.sex";
import CustomerEntity from "../src/entities/customer.entity";

let customerData: CustomerDto = {
    name: "Alexander Miroshnichenko",
    age: 19,
    sex: CustomerSex.MALE
};


test('Create customer entity => entity created', () => {
    expect(() => {
        new CustomerEntity(customerData);
    }).not.toThrowError()
});

test('Create car entity with poor power => catch error', () => {
    customerData.age = 10
    expect(() => {
        new CustomerEntity(customerData);
    }).toThrowError()
});