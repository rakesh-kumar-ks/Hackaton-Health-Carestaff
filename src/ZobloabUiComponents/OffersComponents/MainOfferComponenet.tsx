import axios from "axios";
import OffersCompoenet from "./OfferComonent";
import { useEffect, useState } from "react";
import { urlObject } from '../../urls/Urls'
import ShimmerEffect from "@/components/ui/ShimmerEffect";
export default function MainOfferCompoenet() {

    const [offerdata, setOfferdata] = useState<any>([]);

    useEffect(() => {
        const urlforgettingJobs: any = urlObject.url
        axios.get(`${urlforgettingJobs}/api/getPromotionalDetails`).
        then((data) => {
            console.log("data",data)
            setOfferdata(data.data.data)
                 }).catch(e => console.error(e))

        }, [])

    /*let liesgt = [<OffersCompoenet />, <OffersCompoenet />, <OffersCompoenet />] */

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
                        {offerdata.length==0?<ShimmerEffect/>:offerdata.map((e => <OffersCompoenet OfferData={e} />))}
        </div>
    )


}