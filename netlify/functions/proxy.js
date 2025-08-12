import fetch from 'node-fetch';

export async function handler(event, context) {
  const { action } = event.queryStringParameters;
  const apiUrl = `https://script.google.com/macros/s/YOUR_API_ID/exec?action=${action}`;
  const resp = await fetch(apiUrl);
  const text = await resp.text();
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    },
    body: text
  };
}
