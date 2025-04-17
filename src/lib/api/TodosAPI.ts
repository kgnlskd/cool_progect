import { apiClient } from "$lib/config/apiClients";

export default class TodosAPI{
    static async getTodos (): Promise<any>{
        try {
            const response = await apiClient.get("/todos");
            return response;
        } catch (error) {
            return error;
        }
    }
}