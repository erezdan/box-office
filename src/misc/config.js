import { findByDisplayValue } from '@testing-library/react';

const API_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet(queryString) {
  const responce = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
    r.json()
  );
  return responce;
}

//////