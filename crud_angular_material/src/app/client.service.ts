import { Injectable } from '@angular/core';
import { Client } from './register/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  static CLIENT_REPO = "_CLIENTS";

  constructor() { }

  getStorage() : Client[] {
    const clientsRepo = localStorage.getItem(ClientService.CLIENT_REPO);

    if(clientsRepo) {
      const clients: Client[] = JSON.parse(clientsRepo)
      return clients
    }

    const clients: Client[] = []
    localStorage.setItem(ClientService.CLIENT_REPO, JSON.stringify(clients))
    return clients

  }

  createClient(client: Client) {
    const storage = this.getStorage()
    storage.push(client)
    
    localStorage.setItem(ClientService.CLIENT_REPO, JSON.stringify(storage))
  }
}