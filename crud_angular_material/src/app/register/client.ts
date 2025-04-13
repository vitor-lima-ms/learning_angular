import { v4 as uuidv4 } from 'uuid'

export class Client {
    id?: string;
    name?: string;
    email?: string;
    cnpj?: string;
    cpf?: string;
    createdAt?: Date;

    static newClient() {
        const client = new Client();
        client.id = uuidv4();
        return client;
    }
}