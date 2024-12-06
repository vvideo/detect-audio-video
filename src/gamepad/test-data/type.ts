export type TestExpectedData = Array<[string, {
    name: string;
    originalName: string;
    originalVendorId?: string;
    vendorId?: number;
    originalProductId?: string;
    productId?: number;
    isXInput?: boolean;
    isStandardGamepad?: boolean;
} ]>;
