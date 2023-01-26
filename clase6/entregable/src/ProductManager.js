import { promises } from 'fs';

export default class ProductManager {

  constructor(ruta) {
    this.ruta = ruta;
  }

  async save(obj) {
    
  }

  async getById(id) {
    
  }

  async getAll() {
    return [{id: 1, name: 'papel'}]
  }

  async deleteById(id) {
    
  }

  async deleteAll() {
    
  }
}