import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(res => {
    //@ts-ignore
    //delay just for learning
    setTimeout(() => res(import('./AboutPage')), 1500)
}));