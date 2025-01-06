import { getMaxTouchPoints } from './getMaxTouchPoints';

export function hasTouchScreen() {
    const maxTouchPoints = getMaxTouchPoints();

    if (typeof maxTouchPoints === 'number') {
        return maxTouchPoints > 1;
    }

    return Boolean('ontouchstart' in window);
}
