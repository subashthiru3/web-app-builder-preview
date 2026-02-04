import axios from "axios";

const apiUrl = process.env.NEXT_API_BASE_URL || "http://localhost:4000/api/";

export const fetchJSONData = async (projectName: string) => {
  try {
    const response = await axios.get(`${apiUrl}pages/${projectName}`);
    return response;
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};
