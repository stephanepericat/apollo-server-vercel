# apollo-server-vercel

A quick demo showing how to host an [Apollo server](https://www.apollographql.com/docs/apollo-server/) on [Vercel](https://vercel.com/).

## Demo

Type the following command in your terminal to test:

```bash
curl  --location --request POST 'https://apollo-server-vercel-eight.vercel.app/graphql' \
      --header 'Content-Type: application/json' \
      --data-raw '{"query":"{\n    hello\n}","variables":{}}'
```
