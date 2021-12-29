import { CustomerSex } from '../../../common/enums/customer.sex';
import { CreateCustomer, DeleteCustomer, getAllCustomers } from '../test/functions';
import { prismaMock } from '../singleton';
import { AppController } from './customer.controller';
import { AppService } from './customer.service';

describe('CustomerController', () => {
    let customerController: AppController;
    let customerService: AppService;

    beforeEach(() => {
        customerService = new AppService();
        customerController = new AppController(customerService);
    });

    describe('getAll', () => {
        it('should return an empty array of customers', async () => {
            //@ts-ignore 
            prismaMock.customer.findMany.mockResolvedValue([])
            await expect(getAllCustomers()).resolves.toEqual([])
        });
    });

    describe('saveNewCustomer', () => {
        it('should create a new customer', async () => {
            const customer = {
                id: 1,
                name: "Alexander Miroshnichenko",
                age: 19,
                sex: CustomerSex.MALE,
                createdAt: new Date()
            };

            prismaMock.customer.create.mockResolvedValue(customer)
            await expect(CreateCustomer(customer)).resolves.toEqual(customer)
        })
    })

    describe('deleteCustomer', () => {
        it('should delete added customer', async () => {
            const customer = {
                id: 1,
                name: "Alexander Miroshnichenko",
                age: 19,
                sex: CustomerSex.MALE,
                createdAt: new Date()
            };

            prismaMock.customer.delete.mockResolvedValue(customer)
            await expect(DeleteCustomer(customer)).resolves.toEqual(customer)
        })
    })
});