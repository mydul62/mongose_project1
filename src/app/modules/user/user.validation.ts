import { z } from 'zod';

const userZodSchema = z.object({
  id: z.string({ required_error: 'ID is required' }),
  password: z
    .string({ invalid_type_error: 'Password must be string' }),
});


export const userValidation = {
userZodSchema
}
