const API_BASE_URL = 'http://localhost:5177/api';

export const fetchProperties = async (searchTerm: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/properties?location=${searchTerm}`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching properties');
  }
};
