import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {

    service : MessagesService;

    constructor() {
        //DONT DO THIS ON REAL APP
        this.service = new MessagesService();
    }

    @Get()
    listMessages() {
    
        return this.service.findAll();
    
    }

    @Post()
    createMessages(@Body() body: CreateMessageDto) {
        
        return this.service.create(body.content);
    
    }

    @Get('/:id')
    async getMessage(@Param('id') id : string) {
    
        const message =  await this.service.findOne(id);

        if (!message) {
            throw new NotFoundException('message not found');
        }

        return message;
    }
}
