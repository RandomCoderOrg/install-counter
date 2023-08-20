# install counter

A simple firebase + svelte project to count udroid installations.

## Working

- Svelte is used to create simple server side functions to increment the counter and return the current count.
- vercel is used to deploy the serverless functions ( :heart: vercel )
- Firebase to store the count and serve

## Endpoints

|Endpoint| Description |
|--|--|
| `/count` | to increment the count and return the current count |
| `/cur_count` | to return the current count |

> No extra parameters are required for the endpoints

## Usage

check out `.env.example` to create a `.env` file


```bash
curl https://endpoints-url/count
```

returns a json response

```cmd
{"downloads":908}
```

> Please don't spam the endpoints :pray:

## License

MIT
