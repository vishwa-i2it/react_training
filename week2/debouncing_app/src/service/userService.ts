import axios from "axios";
import { API_BASE_URL } from "../constants/constants";
import type { Response } from "../types/types";

export async function searchUsers(query: string): Promise<Response> {
  const response = await axios.get(`${API_BASE_URL}/search?q=${query}`);
  return response.data;
}

export async function getAllUsers(): Promise<Response> {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
}
