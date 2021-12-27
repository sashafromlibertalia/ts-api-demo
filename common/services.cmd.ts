const enum CarCmd {
    GetAll = 'get-all-cars',
    GetSingleCar = 'get-single-car',
    CreateCar = 'create-car',
    DeleteCar = 'delete-car'
}

const enum CustomerCmd {
    GetAll = 'get-all-customers',
    GetSingleCustomer = 'get-single-customer',
    CreateCustomer = 'create-customer',
    Delete = 'delete-customer'
}

export { CarCmd, CustomerCmd }