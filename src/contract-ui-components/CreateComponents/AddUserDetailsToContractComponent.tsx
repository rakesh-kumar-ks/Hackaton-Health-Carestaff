import React,{useState } from "react"
import { useForm,SubmitHandler } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@radix-ui/react-select"
import { CreateContractDto } from '../types/CreateContractDto'
import axios from "axios";

interface AddUserDetailsToContractProps {
    createContractDto: CreateContractDto;
    setCreateContractDto: React.Dispatch<React.SetStateAction<CreateContractDto>>;
  }

const AddUserDetailsToContract: React.FC<AddUserDetailsToContractProps> = ({ createContractDto, setCreateContractDto }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset, // Function to reset the form
    } = useForm<CreateContractDto>();

      // Function to handle form submission
  const onSubmit: SubmitHandler<CreateContractDto> = (data) => {
    console.log('Form data submitted:', data);
    setCreateContractDto({...createContractDto, firstPartDetails:data.firstPartDetails,secoundPartDetails:data.secoundPartDetails})
  
    axios.post(`http://localhost:8000/api/contract/createContract/${1}`,createContractDto).then((res)=>{

        console.log('res',res)

    }).catch((err)=>console.log(`eorro`,err.response.data
    ))


  };

    return (<>
        
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add User Details</Button>
            </DialogTrigger>
        
            <DialogContent className="sm:max-w-[660px]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogHeader>
                    <DialogTitle>Add User Details for : -- here we should have the contract name --</DialogTitle>
                    <DialogDescription>
                        Add Respective Details for the Aggrement
                    </DialogDescription>
                </DialogHeader>
               
                <div className="grid gap-4 py-4">
                    <p  className="justify-self-center text-2xl">First party details</p>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="first-party-name" className="text-right">
                            Name : 
                        </Label>
                        <Input id="first-party-name" placeholder="Enter full name" className="col-span-3"
                        {...register("firstPartDetails.name",{ required: "First party name is required" })}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="first-party-email" className="text-right">
                            email
                        </Label>
                        <Input id="first-party-email" placeholder="Enter Email" className="col-span-3" 
                         {...register("firstPartDetails.email",{ required: "First party email is required" })}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="first-party-phone-number" className="text-right">
                            phone
                        </Label>
                        <Input type="tel"
                         id="first-party-phone-number" placeholder="Enter Phone number"  className="col-span-3" 
                         {...register("firstPartDetails.phone",{ required: "First party phone is required" })}
                         />
                    </div>
                    <Separator className="my-4" />
                    <p  className="justify-self-center text-2xl" > Secound party details</p>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="secound-party-name"  className="text-right">
                            Name
                        </Label>
                        <Input id="secound-party-name"  placeholder="Enter full name" className="col-span-3"
                        {...register("secoundPartDetails.name",{ required: "First party name is required" })}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="secound-party-email" className="text-right">
                           email
                        </Label>
                        <Input id="secound-party-email"  placeholder="Enter Email" className="col-span-3" 
                         {...register("secoundPartDetails.email",{ required: "First party name is required" })}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="secound-party-phone" className="text-right">
                            phone
                        </Label>
                        <Input id="secound-party-phone"  placeholder="Enter Phone number"  className="col-span-3"
                         {...register("secoundPartDetails.phone",{ required: "First party name is required" })}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" >create Aggrement</Button>
                </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
       
    </>)

}

export default AddUserDetailsToContract


