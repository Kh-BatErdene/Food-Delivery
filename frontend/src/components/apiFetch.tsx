import { apiClient } from "./apiClient";

export async function FetchAddFood(data) {
  return await apiClient.post(`http://localhost:3030/`, data);
}
