import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class RenatlRoute extends Route {
  @service store;

  async model(params) {
    return this.store.find("rental", params.rental_id);
  }
}
