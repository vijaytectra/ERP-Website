import z from "zod";

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters.')
        .max(50, 'Name must not exceed 50 characters.')
        .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes.'),

    institutionName: z
        .string()
        .min(2, 'Institution name must be at least 2 characters.')
        .max(100, 'Institution name must not exceed 100 characters.'),

    email: z.string().email('Please enter a valid email address.'),

    mobileNumber: z
        .string()
        .min(10, 'Mobile number must be at least 10 digits.')
        .max(15, 'Mobile number must not exceed 15 digits.')
        .regex(/^\+?[\d\s\-()]+$/, 'Please enter a valid mobile number.'),

    message: z
        .string()
        .min(10, 'Message must be at least 10 characters.')
        .max(500, 'Message must not exceed 500 characters.'),

    consent: z.boolean().refine(val => val === true, {
        message: 'You must agree to the privacy policy to continue.',
    }),
})
