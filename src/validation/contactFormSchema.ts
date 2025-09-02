import * as z from 'zod';

export const contactFormSchema = z.object({
  // Validates the 'name' field
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .max(100, { message: 'Name must be no more than 100 characters.' })
    .trim(),

  // Validates the 'institutionName' field
  institutionName: z
    .string()
    .min(2, { message: 'Institution name must be at least 2 characters.' })
    .max(150, { message: 'Institution name must be no more than 150 characters.' })
    .trim(),

  // Validates the 'email' field for a proper email format
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' }),

  // Validates the 'mobileNumber' field using a regular expression
  // This regex is flexible, allowing for optional country codes and spaces
  mobileNumber: z
    .string()
    .regex(/^\+?[0-9\s-]{7,15}$/, { message: 'Please enter a valid mobile number.' }),

  // Validates the 'message' field
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long.' })
    .max(500, { message: 'Message must not exceed 500 characters.' })
    .trim(),

  // Validates the 'consent' checkbox
  consent: z
    .boolean()
    .refine(value => value === true, {
      message: 'You must agree to the privacy policy to proceed.',
    }),
});
