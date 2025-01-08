import { Observable } from "rxjs";


export interface IcanDeactivateComp{
    canDeactivate :() => boolean|Promise<boolean> |Observable<boolean>
}