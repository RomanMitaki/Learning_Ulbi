import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(res => {
    //@ts-ignore
    //delay just for learning
    setTimeout(() => res(import('./MainPage')), 1500)
}));