import { AuthStateInterface } from "./authState.interface";

export interface AppStateInterface {
    [x: string]: any;
    auth: AuthStateInterface
}