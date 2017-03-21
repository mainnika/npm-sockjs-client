
declare class SockJS {

    static OPEN: number;
    static CLOSING: number;
    static CONNECTING: number;
    static CLOSED: number;

    static version: string;

    readyState: number;

    onopen: (ev: SockJS.SockJSOpenEvent) => void;
    onclose: (ev: SockJS.SockJSCloseEvent) => void;
    onmessage: (ev: SockJS.SockJSMessageEvent) => void;

    constructor(url: string, protocols?: string | string[], options?: SockJS.SockJSOptions)

    send(data: string): void;
    close(code?: number, reason?: string): void;
    countRTO(rtt: number): number;
}

declare namespace SockJS {

    type Transport = 'websocket'
        | 'htmlfile'
        | 'eventsource'
        | 'iframe-info-receiver'
        | 'xdr-polling'
        | 'xhr-polling'
        | 'jsonp-polling'
        | 'xdr-streaming'
        | 'xhr-streaming'
        | 'iframe-eventsource'
        | 'iframe-htmlfile'
        | 'iframe-xhr-polling';

    interface SockJSOptions {
        server?: string;
        sessionId?: number | (() => string);
        transports?: Transport | Transport[];
        transportOptions?: any;
    }

    interface SockJSSimpleEvent {
        type: string;
        toString(): string;
    }

    interface SockJSOpenEvent extends SockJSSimpleEvent, Event {
        type: string;
    }

    interface SockJSCloseEvent extends SockJSSimpleEvent, CloseEvent {
        code: number;
        reason: string;
        wasClean: boolean;
        type: string;
    }

    interface SockJSMessageEvent extends SockJSSimpleEvent, MessageEvent {
        data: string;
        type: string;
    }
}

export = SockJS;
