import { COUPON_CODES } from "@/sanity/lib/sales/couponCode";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";




async function BlackFridayBanner() {
    const sale = await getActiveSaleByCouponCode(COUPON_CODES.OFF33);

    if(!sale?.isActive){
        return null;
    }


    return <div className="bg-gradient-to-r from-red-600 to-black text-white px-6 py-20 mx-4 mt-2 rounded-lg shadow-lg">
        Black Friday
    </div>
}

export default BlackFridayBanner;