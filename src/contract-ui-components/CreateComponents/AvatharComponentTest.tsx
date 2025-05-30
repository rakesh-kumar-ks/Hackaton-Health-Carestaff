import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import UserSVgComponent from './UserSVgComponent'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



const GetFirstPart: React.FC = () => {

    return (
        <div className="grid gap-4 py-4">
            <p className="justify-self-center text-2xl">First party details</p>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="first-party-name" className="text-right">
                    Name :
                </Label>
                <Input id="first-party-name" placeholder="Enter full name" className="col-span-3"
                />
            </div>
        </div>
    )

}



const AddThirdpartUserPop:React.FC=()=>{





    function handleAddAnotherParty()
    {

    }


    return(
        <>
        <DialogContent className="sm:max-w-[660px]">
            <DialogHeader>
                <DialogTitle>Add Third Party's details</DialogTitle>
                <DialogDescription>
                    Please add if any other person you want to be in the contract.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                
            </div>
            <DialogFooter className="flex justify-between">
                 <Button type="button" onClick={handleAddAnotherParty}>Add another party</Button>
                {/* <Button type="submit" onClick={handleSubmit}>Submit</Button>  */}
            </DialogFooter>
        </DialogContent>

        </>
    )
}



const AvatharComponentTest:React.FC=()=>{
    return(
        <>
            <div>
                <div className="flex -space-x-2 overflow-hidden">
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="inline-block size-14 rounded-full ring-3">
                                <UserSVgComponent />
                            </button>
                        </DialogTrigger>
                        <AddThirdpartUserPop />
                    </Dialog>
                </div>
            </div>
        </>
)

}


export default AvatharComponentTest