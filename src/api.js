export const fetchHouseData = async (url, errorMessage) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw Error(errorMessage);
    }
    return res.json();
  };
  
  // Other utility functions related to API calls can be added here
  