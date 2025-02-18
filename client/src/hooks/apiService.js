// apiService.js
const BASE_URL = 'http://localhost/isea/server'; 

export const getData = async (endpoint, params = {}) => {
  // Tạo query string nếu có params
  const queryString = new URLSearchParams(params).toString();
  const url = `${BASE_URL}${endpoint}${queryString ? '?' + queryString : ''}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json', 
      },
    });

    // Kiểm tra lỗi HTTP
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Xử lý lỗi
    throw error;
  }
};
export const postData = async (endpoint, payload) => {
  const url = `${BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: payload,
    });

    // Kiểm tra lỗi HTTP
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
