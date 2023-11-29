import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event) => {
  const body: {name: string} = JSON.parse(event.body)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${body.name}, welcome to the exciting Serverless world!`,
    }),
  };
};
