/// <reference path="./bundle.d.ts" />

import * as SockJS from 'sockjs-client';

class ExtendsFromSockJS extends SockJS {

    public static genId(): string {

        return String(Math.random());
    }

    public static onConnect(ev: SockJS.SockJSOpenEvent) {
        const event: string = ev.type;
    }

    public static onMessage(ev: SockJS.SockJSMessageEvent) {
        const message: string = ev.data;
    }

    public static onClose(ev: SockJS.SockJSCloseEvent) {
        const code: number = ev.code;
        const reason: string = ev.reason;
        const wasClean: boolean = ev.wasClean;
    }

    public constructor() {

        super('http://localhost/socket', undefined, {
            sessionId: ExtendsFromSockJS.genId,
            server: 'some server',
            transportOptions: {},
            transports: 'websocket'
        });

        this.onopen = ExtendsFromSockJS.onConnect;
        this.onclose = ExtendsFromSockJS.onClose;
        this.onmessage = ExtendsFromSockJS.onMessage;
    }

    public get State(): number {

        return this.readyState;
    }
}

class Foo {

    private sock: SockJS = new SockJS('http://localhost/socketanother', undefined, {
        sessionId: 2,
        transports: ['xhr-streaming', 'htmlfile']
    });
}

new ExtendsFromSockJS();
new Foo();
