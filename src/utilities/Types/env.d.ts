export { };

declare global {
    namespace NodeJS {
        interface ProcessENV {
            BROWSER: "chrome" | "firefox" | "webkit",
            ENV: "qa"| "dev" | "pvs",
            BASEURL: string,
            HEAD: "true" | "false"
        }
    }
}