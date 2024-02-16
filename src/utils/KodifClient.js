import data from "./data.json";
export default class KodifClient {
  constructor(url) {
    this.url = url;
  }

  async getViews() {
    return data.views || [];
  }
}
