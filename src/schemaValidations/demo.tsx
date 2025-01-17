
import z from 'zod'

export const AccountSchema = z.object({
    id: z.number(),
    name: z.string().trim().min(2, 'Tên quá ngắn (tối thiểu 2 ký tự)').max(256, 'Tên quá dài (tối đa 256 ký tự)'),
    email: z.string().email('Email không hợp lệ'),
  })
  .strict();

  export type AccountType = z.TypeOf<typeof AccountSchema>