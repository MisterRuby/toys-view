import { api } from "@/plugin/axios";

export const getMenusApi = () => {
  return api.get("http://localhost:8080/menus");
};
