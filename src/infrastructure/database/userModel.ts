import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"

const User = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})

const Otp = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 300 } // OTP expires in 5 minutes
})

const UserModel = mongoose.model('User', User)
const OtpModel = mongoose.model('Otp', Otp)

export { UserModel, OtpModel }