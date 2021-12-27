import { Observable } from "rxjs";
import CarDto from "../../../common/dto/car.dto";
import CustomerDto from "../../../common/dto/customer.dto";

interface IAppService {
    getAllCars(): Observable<object[]>;
    getCar(id: string): Observable<object>;
    saveCar(carData: CarDto): Observable<object>;
    deleteCar(id: string): Observable<void>;

    getAllCustomers(): Observable<object[]>;
    getCustomer(id: string): Observable<object>;
    saveCustomer(carData: CustomerDto): Observable<object>;
    deleteCustomer(id: string): Observable<void>;
}

export default IAppService