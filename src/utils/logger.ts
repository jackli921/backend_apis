
class Logger {
    info(...args: any[]) {
        const timestamp = new Date().toISOString();
        console.log(`[INFO] [${timestamp}]`, ...args);
    }

    error(...args: any[]) {
        const timestamp = new Date().toISOString();
        console.error(`[ERROR] [${timestamp}]`, ...args);
    }

    warn(...args: any[]) {
        const timestamp = new Date().toISOString();
        console.warn(`[WARN] [${timestamp}]`, ...args);
    }
}

export const logger = new Logger();