export {};

declare global {
    interface Window {
        Telegram: {
            WebApp: {
                ready: any
                close: any,
                initDataUnsafe: any,
                MainButton: any
            }
        }
    }
}