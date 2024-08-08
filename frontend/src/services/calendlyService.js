import axios from 'axios';

const BASE_URL = 'https://api.calendly.com';

const getAccessToken = () => {
  return 'eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzIyNzAzNTQyLCJqdGkiOiIzNmNiOTQ2Ny0yNGY1LTQyMTktYmY5OC0yYWE2N2ZjODdiMDEiLCJ1c2VyX3V1aWQiOiI0MTNlODY0NS1hZDhlLTQyNmUtOWIwOC1lYzIwMTAwZWViNmIifQ.oAzRCSP3auDzp0DzFKy07Wb6Yv7aqjZN-uM-wfwoHu5Kjwuwly8Ux-qTZXm-KqPz5XyT-Z2RUZGDy40Ay42P7Q'; // Replace with your actual token
};

export const getEventTypes = async () => {
  const response = await axios.get(`${BASE_URL}/event_types`, {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
  return response.data;
};
