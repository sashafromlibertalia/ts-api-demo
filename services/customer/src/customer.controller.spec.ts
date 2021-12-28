import { Customer } from '@prisma/client';
import CustomerDto from '../../../common/dto/customer.dto';
import { CustomerSex } from '../../../common/enums/customer.sex';
import prisma from '../client';
import { AppController } from './customer.controller';
import { AppService } from './customer.service';

describe('AppController', () => {
    let customerController: AppController;
    let customerService: AppService;

    beforeEach(() => {
        customerService = new AppService();
        customerController = new AppController(customerService);
    });

    describe('getAll', () => {
        it('should return an empty array of customers', async () => {
            const result: Customer[] = [];
            jest.spyOn(customerService, 'getAll').mockImplementation(async () => result);

            customerController.getAll().then((data) => {
                expect(data).toBe(result);
            })
        });
    });

    describe('saveNewCustomer', () => {
        it('should create a new customer', async () => {
            const customer: CustomerDto = {
                name: "Alexander Miroshnichenko",
                age: 19,
                sex: CustomerSex.MALE
            };
            const result: Customer = await prisma.customer.create({
                data: {
                    name: customer.name,
                    age: customer.age,
                    sex: customer.sex,
                },
            })
            jest.spyOn(customerService, 'saveNewCustomer').mockImplementation(async () => result);

            customerController.saveNewCustomer(customer).then((data) => {
                expect(data).toBe(result)  
            })
        })
    })

    describe('deleteCustomer', () => {
        it('should delete added customer', async () => {
            const customerDto: CustomerDto = {
                name: "Alexander Miroshnichenko",
                age: 19,
                sex: CustomerSex.MALE
            };
            const customer: Customer = await prisma.customer.create({
                data: {
                    name: customerDto.name,
                    age: customerDto.age,
                    sex: customerDto.sex,
                },
            })

            const result: Customer[] = []
            await customerController.saveNewCustomer(customerDto)            
            await customerController.deleteCustomer(`${customer.id}`)

            jest.spyOn(customerService, 'getAll').mockImplementation(async () => result);
            customerController.getAll().then((data) => {
                expect(data).toBe(result);
            })
        })
    })
});