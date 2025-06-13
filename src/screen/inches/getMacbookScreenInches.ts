import { getScreenHeight, getScreenWidth } from '../size';

export function getMacbookScreenInches() {
    const rawWidth = getScreenWidth();
    const rawHeight = getScreenHeight();
    const width = Math.max(rawWidth, rawHeight);
    const height = Math.min(rawWidth, rawHeight);

    // TODO: Update when new models are released.
    const macbookModels = [
        // Modern MacBook Pros (2021+)
        { width: 3024, height: 1964, inches: 14.2, name: 'MacBook Pro 14" (M1 Pro/Max, 2021+)' },
        { width: 3456, height: 2234, inches: 16.2, name: 'MacBook Pro 16" (M1 Pro/Max, 2021+)' },
        
        // Intel MacBook Pros
        { width: 3072, height: 1920, inches: 16.0, name: 'MacBook Pro 16" (Intel, 2019)' },
        { width: 2880, height: 1800, inches: 15.4, name: 'MacBook Pro 15" (Retina)' },
        
        // MacBook Airs
        { width: 2560, height: 1664, inches: 13.6, name: 'MacBook Air 13" (M2, 2022)' },
        { width: 2560, height: 1600, inches: 13.3, name: 'MacBook Air 13" (Retina)' },
        { width: 1440, height: 900, inches: 13.3, name: 'MacBook Air 13" (Pre-Retina)' },
        
        // Other models
        { width: 2304, height: 1440, inches: 12.0, name: 'MacBook 12"' },
        { width: 1280, height: 800, inches: 13.3, name: 'MacBook Air 13" (Pre-2010)' }
    ];
    
    const matchedModel = macbookModels.find(model => 
        model.width === width && model.height === height
    );
    
    return matchedModel ? {
        inches: matchedModel.inches,
        name: matchedModel.name,
    } : {
        inches: null,
        name: 'Unknown MacBook',
    };
}