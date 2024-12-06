export function parseGamepadName(originalName: string) {
    let result = originalName.match(/vendor: ([\da-f]{4}) product: ([\da-f]{4})/i);
    let name = originalName.split(/ \(/)[0];

    const isXInput = originalName.search(/XInput/i) !== -1 ? true : undefined;
    const isStandardGamepad = originalName.search(/STANDARD GAMEPAD/i) !== -1 ? true : undefined;


    if (!result) {
        result = originalName.match(/^([\da-f]{4})-([\da-f]{4})-/i);

        if (!result) {
            return {
                originalName,
                name: name.trim(),

                originalVendorId: undefined,
                vendorId: undefined,

                originalProductId: undefined,
                productId: undefined,

                isXInput,
                isStandardGamepad,
            };
        }

        const buffer = originalName.split('-');
        buffer.shift();
        buffer.shift();
        name = buffer.join('-');
    }

    const [_, originalVendorId, originalProductId] = result;

    return {
        originalName,
        name: name.trim(),

        originalVendorId, // hex id as string
        vendorId: parseInt(originalVendorId, 16), // decimal id as number

        originalProductId, // hex id as string
        productId: parseInt(originalProductId, 16), // decimal id as number

        isXInput,
        isStandardGamepad,
    };
}
