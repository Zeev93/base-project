import { lazy } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element

interface Route {
    to: string,
    path: string,
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent
    name: string 
}

// const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'));
// const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]