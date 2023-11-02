import http from "../api";
import { generateRandomString } from "../funciotion";

export const PointsRequest = async (body) => {
  try {
    const response = await http.post(`/points/${generateRandomString(10)}`, body);
    return response.data;
  } catch (error) {
    console.error('Error in PointsRequest:', error);
    throw error;
  }
  };