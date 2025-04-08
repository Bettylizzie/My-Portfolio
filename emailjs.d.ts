declare module '@emailjs/browser' {
    const init: (publicKey: string) => void;
    const send: (
        serviceID: string,
        templateID: string,
        templateParams: object,
        publicKey?: string
    ) => Promise<{ status: number, text: string }>;
    const sendForm: (
        serviceID: string,
        templateID: string,
        form: HTMLFormElement | string,
        publicKey?: string
    ) => Promise<{ status: number, text: string }>;
    export { init, send, sendForm };
}