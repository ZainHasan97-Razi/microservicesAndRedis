import { Injectable } from '@nestjs/common';
import {ClientProxyFactory, Transport, ClientProxy} from '@nestjs/microservices'

// So this maths service is already injectable all we did was change the implementation
// of this accumulate method to use the client proxy and we don't have to worry about injecting
// this or providing in anywhere because you know it's gonna be included under the hood with the math
// service that's already configured.

@Injectable()
export class MathService {
    private client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 8877
            },
        })
    }
    public accumulate(data: Array<number>) {
        // return (data || []).reduce((a, b) => Number(a) + Number(b))
        return this.client.send<number, number[]>('add', data)
    }
}

