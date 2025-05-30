import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@radix-ui/react-select"// Corrected import for Separator
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import UserSVgComponent from './UserSVgComponent'

// --- 1. Define the interface for the DATA of a single party ---
// We remove `anotherPartyComponent` from here because we'll store only the data.
interface PartyData {
    id: number;
    fullName: string;
    email: string;
    phone: string;
}

// --- 2. Define props for AddAnotherParty component ---
interface AddAnotherPartyProps {
    id: number; // Unique ID for this instance
    initialData: PartyData; // The data for this specific party
    onDataChange: (id: number, field: keyof PartyData, value: string) => void;
}

// --- 3. AddAnotherParty Component (Receives proper props) ---
const AddAnotherParty: React.FC<AddAnotherPartyProps> = ({ id, initialData, onDataChange }) => {
    // Local state for inputs, initialized with initialData
    const [fullName, setFullName] = useState(initialData.fullName);
    const [email, setEmail] = useState(initialData.email);
    const [phone, setPhone] = useState(initialData.phone);

    // Update parent state when a local input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof PartyData) => {
        const value = e.target.value;
        if (field === 'fullName') {
            setFullName(value);
        } else if (field === 'email') {
            setEmail(value);
        } else if (field === 'phone') {
            setPhone(value);
        }
        onDataChange(id, field, value); // Call the parent's callback
    };

    return (
        <>
            <div className="grid grid-cols-4 items-center gap-4"> {/* Added gap for spacing */}
                <label htmlFor={`Third-party-name-${id}`} className="col-span-1 text-right">Full Name:</label>
                <Input
                    id={`Third-party-name-${id}`}
                    placeholder="Enter Full name"
                    className="col-span-3"
                    value={fullName}
                    onChange={(e) => handleChange(e, 'fullName')}
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor={`Third-party-Email-${id}`} className="col-span-1 text-right">Email:</label>
                <Input
                    id={`Third-party-Email-${id}`}
                    placeholder="Enter Email"
                    className="col-span-3"
                    value={email}
                    onChange={(e) => handleChange(e, 'email')}
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor={`Third-party-Phone-${id}`} className="col-span-1 text-right">Phone:</label>
                <Input
                    id={`Third-party-Phone-${id}`}
                    placeholder="Phone"
                    className="col-span-3"
                    value={phone}
                    onChange={(e) => handleChange(e, 'phone')}
                />
            </div>
            <Separator className="my-4" />
        </>
    );
};

// --- 4. AddThirdpartUserPop Component (Manages array of PartyData) ---
const AddThirdpartUserPop: React.FC = () => {
    // State to hold all the party data
    const [partiesData, setPartiesData] = useState<PartyData[]>([]);
    const [nextId, setNextId] = useState(1); // To generate unique IDs

    // Add an initial party when the dialog opens
    useEffect(() => {
        handleAddAnotherParty();
    }, []); // Run once on mount

    const handleAddAnotherParty = () => {
        const newParty: PartyData = {
            id: nextId,
            fullName: '',
            email: '',
            phone: ''
        };
        setPartiesData(prevData => [...prevData, newParty]);
        setNextId(prevId => prevId + 1);
    };

    // Callback to update specific party data when a child input changes
    const handlePartyDataChange = (id: number, field: keyof PartyData, value: string) => {
        setPartiesData(prevData =>
            prevData.map(party =>
                party.id === id ? { ...party, [field]: value } : party
            )
        );
    };

    const handleSubmit = () => {
        console.log("Submitting all party data:", partiesData);
        // Here you would send `partiesData` to your backend or process it.
        // E.g., call an API, validate, then close the dialog.
    };

    return (
        <DialogContent className="sm:max-w-[660px]">
            <DialogHeader>
                <DialogTitle>Add Third Party's details</DialogTitle>
                <DialogDescription>
                    Please add if any other person you want to be in the contract.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                {partiesData.map((party) => (
                    <AddAnotherParty
                        key={party.id} // Essential for React list rendering
                        id={party.id}
                        initialData={party} // Pass the current data for this instance
                        onDataChange={handlePartyDataChange} // Pass the callback
                    />
                ))}
            </div>
            <DialogFooter className="flex justify-between">
                <Button type="button" onClick={handleAddAnotherParty}>Add another party</Button>
                <Button type="submit" onClick={handleSubmit}>Submit</Button>
            </DialogFooter>
        </DialogContent>
    );
};

// --- 5. AvatharComponent (No changes needed here as it renders AddThirdpartUserPop) ---
const AvatharComponent: React.FC = () => {
    return (
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
    );
};

export default AvatharComponent;