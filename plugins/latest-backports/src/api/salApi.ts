import {
    createApiRef,
    DiscoveryApi,
    FetchApi
  } from "@backstage/core-plugin-api";

// type SalApiType {

// }
interface Apis {
    discoveryApi: DiscoveryApi;
    fetchApi: FetchApi;
}

export interface SalApiType{
    getLatestBackports(startDate: string, endDate: string): any;
    getLatestBackportsPerYear(): any;
}

export const salApiRef = createApiRef<SalApiType>({
    id: "plugin.latest-backports",
  });
  

export class SalApi implements SalApiType
{
    private readonly discoveryApi: DiscoveryApi;
    private readonly fetchApi: FetchApi;

    constructor(apis: Apis) {
        this.discoveryApi = apis.discoveryApi;
        this.fetchApi = apis.fetchApi;
    }

    async getLatestBackports(startDate: string, endDate: string) {
        const url = await this.discoveryApi.getBaseUrl("proxy");
        const fetchUrl = `${url}/latest-backports`;//?start_date=${startDate}&end_date=${endDate}`;
        const response = await this.fetchApi.fetch(`${fetchUrl}`);
        return response.json();
    }
    async getLatestBackportsPerYear() {
        const url = await this.discoveryApi.getBaseUrl("proxy");
        const fetchUrl = `${url}/backports-graph`;//?start_date=${startDate}&end_date=${endDate}`;
        const response = await this.fetchApi.fetch(`${fetchUrl}`);
        return response.json();
    }
}