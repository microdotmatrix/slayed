import { settings } from './settings';
import { testThis } from './dom-binder';

type ProdifyWorldType = {
  name: string
}

class ProdifyWorld extends HTMLElement implements ProdifyWorldType {
  name: string;

  constructor() {
    super()

    this.name = 'Prodify World'
  }
}

export class ProdifyWrapper extends ProdifyWorld {
  constructor() {
    super();
    
    console.log(this.name)
  }
}
customElements.define("prodify-wrapper", ProdifyWrapper);
customElements.define("prodify-world", ProdifyWorld);