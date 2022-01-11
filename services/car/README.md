
## API Reference

#### Get all cars

```http
  GET /api/cars
```

#### Get car

```http
  GET /api/cars/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of car to fetch |

#### Save new car

```http
  POST /api/cars
```
> Body

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `brand`      | `string` | **Required**. Car brand |
| `model`      | `string` | **Required**. Car model |
| `horsePower`      | `string` | **Required**. Car's horse power |
| `torque`      | `string` | **Required**. Car's torque |
| `type`      | `string` | **Required**. Car's type [`SEDAN`, `COUPE`, `SUV`, `CABRIO`] |

Example: 
```json
{
    "brand": "BMW",
    "model": "M4",
    "horsePower": 500,
    "torque": 700,
    "type": "COUPE",
}
```

#### Delete car

```http
  POST /api/cars/delete?${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of car to delete |
