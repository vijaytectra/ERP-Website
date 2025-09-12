// --- Data Structure ---
export type Plan = {
    name: string;
    tagline: string;
    description: string;
    price: {
        half_yearly: number;
        yearly: number;
    };
    features: string[];
    popular?: boolean;
};