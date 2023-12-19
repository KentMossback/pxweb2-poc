import { paths } from './schema';
import createClient from "openapi-fetch";

export type SuccesResponse = paths["/tables/{id}/metadata"]["get"]["responses"][200]["content"]["application/json"];
export type QueryType = paths["/tables/{id}/metadata"]["get"]["parameters"]["query"];

const { GET } = createClient<paths>({ baseUrl: "/api" });


export const getTableMetaData = (id: string, query?: QueryType) => GET("/tables/{id}/metadata", {
    params: {
        query: {lang: query },
        path: {
            id
        }
    }
})