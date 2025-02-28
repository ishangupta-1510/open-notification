import { z } from "zod";

const ZUserAuthInput = z.object({
    email: z.string(),
    password: z.string()
})

const ZOtpInput = z.object({
    UserId: z.string(),
    otp: z.number(),
    otpExpiryDate: z.coerce.date()
})

export type TUserAuthInput = z.infer<typeof ZUserAuthInput>