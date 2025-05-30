import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AvatharComponent from "./AvatharComponent"
import AddUserDetailsToContract from "./AddUserDetailsToContractComponent"
import { useState } from "react"
import { CreateContractDto } from '../types/CreateContractDto'
import AvatharComponentTest from "./AvatharComponentTest"

const CreateContractComponent: React.FC = () => {

    const[createContractDto,setCreateContractDto] = useState<CreateContractDto>({
        AggrementName:"",
        Amount:0,
        ExpirationDate:"",
        firstPartDetails:null,
        secoundPartDetails:null
    });

    const handleAggrementNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCreateContractDto({ ...createContractDto, AggrementName: event.target.value });
    };

    const handleAggrementAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const stringValue = event.target.value;
        const numberValue = parseFloat(stringValue);

        if(!isNaN(numberValue))
        {
            setCreateContractDto({ ...createContractDto, Amount: numberValue });
        }
        else if (stringValue === "") {
            setCreateContractDto({ ...createContractDto, Amount: 0 }); // Or null
        } 
    };

    const handleAggrementDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCreateContractDto({ ...createContractDto, ExpirationDate: event.target.value });
    };

    console.log("the value togther",createContractDto)

    return (
        <Card className="mx-auto max-w-lg">
            <CardHeader>
                <CardTitle className="text-4xl">Create a Aggrement</CardTitle>
                <CardDescription>
                    Enter the Aggrement Amount and what is the Last Date of the Aggrement to be expired
                    and and the respective Partices of the Aggrement
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">

                <div className="grid gap-2">
                    <Label htmlFor="first-part-name">Aggrement Name</Label>
                    <Input id="first-part-name" type="text" placeholder="Enter Aggrement name" 
                    onChange={handleAggrementNameChange}
                    required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="Amount">Amount</Label>
                    <Input id="Amount" type="number" placeholder="Enter the amount" 
                     onChange={handleAggrementAmountChange}
                    required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="Expiration-date">Expected expiration date</Label>
                    <Input id="Expiration-date" type="date"
                    onChange={handleAggrementDateChange}
                    required />
                </div>

                <div className="grid gap-2">
                    <AddUserDetailsToContract  createContractDto={createContractDto}
                     setCreateContractDto={setCreateContractDto} />
                </div>

                <div className="grid gap-4" >
                    {/* <AvatharComponent /> */}
                    <AvatharComponentTest/>
                </div>
            </CardContent>
            <CardFooter>
                <div className="grid gap-0">
                    <Button className="w-full">Create</Button>
                </div>
            </CardFooter>
        </Card>)
}

export default CreateContractComponent