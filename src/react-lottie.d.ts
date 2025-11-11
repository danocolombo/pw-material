declare module 'react-lottie' {
    import * as React from 'react';

    export interface Options {
        loop?: boolean;
        autoplay?: boolean;
        animationData?: any;
        rendererSettings?: any;
    }

    export interface LottieProps {
        options: Options;
        height?: number | string;
        width?: number | string;
        isStopped?: boolean;
        isPaused?: boolean;
        eventListeners?: any[];
        style?: React.CSSProperties;
        className?: string;
    }

    export default class Lottie extends React.Component<LottieProps> {}
}
