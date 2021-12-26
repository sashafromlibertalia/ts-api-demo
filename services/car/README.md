
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
| `brand`      | `string` | **Required**. Brand of car |
| `model`      | `string` | **Required**. Model of car |
| `horsePower`      | `string` | **Required**. Horse power of car |
| `torque`      | `string` | **Required**. Torque of car |
| `type`      | `string` | **Required**. Type of car |

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