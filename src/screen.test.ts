/**
 * @jest-environment jsdom
 */

import { getResolutionBadge, isFullHDScreenSupported, isHDScreenSupported } from './screen';

describe('Screen', () => {
    it('#isHDScreenSupported', () => {
        expect(isHDScreenSupported(1024, 768)).toBeFalsy();
        expect(isHDScreenSupported(100, 100)).toBeFalsy();
        expect(isHDScreenSupported(2000, 100)).toBeTruthy();
        expect(isHDScreenSupported(1280, 720)).toBeTruthy();
        expect(isHDScreenSupported(1280, 1024)).toBeTruthy();
        expect(isHDScreenSupported(1920, 1080)).toBeTruthy();
    });

    it('#isFullHDScreenSupported', () => {
        expect(isFullHDScreenSupported(1024, 768)).toBeFalsy();
        expect(isFullHDScreenSupported(200, 100)).toBeFalsy();
        expect(isFullHDScreenSupported(1920, 1080)).toBeTruthy();
        expect(isFullHDScreenSupported(2000, 720)).toBeTruthy();
    });

    it('#getResolutionBadge', () => {
        expect(getResolutionBadge(3840, 2160)).toEqual('4K');
        expect(getResolutionBadge(4321, 2160)).toEqual('>4K');
        expect(getResolutionBadge(1138, 1012)).toEqual('>SD');
    });
});
