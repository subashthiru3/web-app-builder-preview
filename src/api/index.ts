import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchJSONData = async (projectName: string, stage: string) => {
  try {
    const response = await axios.get(
      `${apiUrl}pages?project=${projectName}&stage=${stage}`,
    );
    return response;
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};
