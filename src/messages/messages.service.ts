import { MessagesRepository } from "./messages.repository";


export class MessagesService {

    repository : MessagesRepository;

    constructor() {
        //DONT DO THIS ON REAL APPS
        this.repository = new MessagesRepository();
    }

    async findOne(id: string) {
        
        return this.repository.findOne(id);

    }

    async findAll() {

        return this.repository.findAll();

    }

    async create(content: string) {

        return this.repository.create(content);
        
    }
}