export const COUPON_CODES = {
    BFRIDAY: "BRIDAY",
    OFF33: "OFF33",
    BHAM25: "BHAM25"
}  as const;


export type CouponCode = keyof typeof COUPON_CODES;