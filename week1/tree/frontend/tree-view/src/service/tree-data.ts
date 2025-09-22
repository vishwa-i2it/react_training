import axios from "axios";
import type { TreeResponse } from "../types/tree-types";

const API_BASE_URL = "http://localhost:5000/api/data";
export async function getAllTreeData(): Promise<TreeResponse> {
  const response = await axios.get(`${API_BASE_URL}/tree`);
  return response.data;
}
