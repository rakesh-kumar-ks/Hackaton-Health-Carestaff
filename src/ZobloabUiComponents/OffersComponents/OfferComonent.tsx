"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { urlObject } from "@/urls/Urls";
import { Separator } from "@radix-ui/react-dropdown-menu";
import axios from "axios";
import {useUserDetails} from '../../ZobloabContext/UserDetailsContext'
import { TableRow,TableCell } from "@/components/ui/table"
type UserpromotionalDetials={
  uid:number | undefined | string;
  pid:number;
}


export default function OffersCompoenet({ OfferData }: any) {

  const {userDetails} = useUserDetails();

  const selectedOffer = (offerid: number) => {
    const urlforgettingJobs: any = urlObject.url

        let requestbody:UserpromotionalDetials ={
          uid: userDetails?.userid,
          pid: offerid
        }
        axios.post('url').then(()=>{

        }).catch(error=>console.log("error",error))

  }

  return (
    <div  className="max-w-sm p-1" >
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <image
            // src={`/jordans.webp`}
            // alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {OfferData.offer_title}
        </p>

        <h4 className="text-sm font-medium leading-none">{OfferData.description}</h4>
        <Separator className="my-4" />
        <div >
        <TableRow>
            <TableCell className="font-medium">Discount Amount: 
            <span className="bg-zinc-700 rounded-full text-[1rem] px-2 py-0 text-white">{OfferData.max_discount_amount} </span>
              </TableCell>
          </ TableRow>
          <TableRow>
          <TableCell className="font-medium">Offer valid upto: {OfferData.end_date.split("T")[0]} </TableCell>
            </TableRow>
            <TableRow>
            <TableCell className="font-medium"> Applicable to: {OfferData.applicable_to} </TableCell>
            </TableRow>
            {/* <div> <span className="bg-zinc-700 rounded-full text-[0.7rem] px-3 py-0 text-white">
              Max discoun Amount {OfferData.max_discount_amount}
            </span></div>
            <span className="bg-zinc-700 rounded-full text-[0.8rem] px-2 py-0 text-white">
              Offer valid upto {OfferData.end_date.split("T")[0]}
            </span>
            <span className="bg-zinc-700 rounded-full text-[0.7rem] px-2 py-0 text-white">
              Applicable to {OfferData.applicable_to}
            </span> */}
          

        </div>
        <Separator className="my-6" />
        <button onClick={() => selectedOffer(OfferData.id)} className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            {OfferData.discount_value}
          </span>
        </button>
      </BackgroundGradient>
    </div>

  );
}
