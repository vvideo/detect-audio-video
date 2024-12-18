const initialUserAgent = window.navigator.userAgent;

export function mockUserAgent(userAgent: string) {
    Object.defineProperty(navigator, 'userAgent', {
        get: () => userAgent,
        configurable: true
    });
}

export function unmockUserAgent() {
    Object.defineProperty(navigator, 'userAgent', {
        get: () => initialUserAgent,
        configurable: true
    });
}
