import ToDosApi from "$lib/api/toDosAPI";
import { writable } from "svelte/store"; 

export const todos = writable([]);

export asyns function GetToDos(){
    const response = await TodosAPI.getTodos();
    // conso
}