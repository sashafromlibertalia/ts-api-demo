
## API Reference

#### Get all customers

```http
  GET /api/customers
```

#### Get customer

```http
  GET /api/customers/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of customer to fetch |

#### Save new customer

```http
  POST /api/customers
```
> Body

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Customer's name |
| `age`      | `int` | **Required**. Customer's age |
| `sex`      | `string` | **Required**. Customer's sex |

Example: 
```json
{
    "name": "Александр Мирошниченко",
    "age": 19,
    "sex": "MALE"
}
```

#### Delete customer

```http
  POST /api/customer/delete?${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of customer to delete |

#### Purchase car

```http
  POST /api/customer/purchase
```

> Body

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `car`      | `int` | **Required**. Id of car to purchase |
| `customer`      | `int` | **Required**. Customer's id |

Example: 
```json
{
    "car": 6,
    "customer": 3
}
```