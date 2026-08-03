declare global {
    interface Window {
        Hisense_GetSupportForHDR?: () => string;
    }
}

export * from './size';
export * from './range';
export * from './colorSpace';
export * from './getMaxTouchPoints';
export * from './hasTouchScreen';
export * from './has3dTouch';
export * from './inches/index';
