import { lazy } from "react";
import AllContractListComponent from "./ContractListComponents/AllContractListComponent";
const CreateContractComponent = lazy(()=>import("./CreateComponents/CreateContractComponent"));
const ContractUiMainComponent: React.FC = () => {
    return (
        <div>   
            <div className="flex min-h-screen">
        
                <div className="w-3/4 p-8">
                    <div id="create-contract" className="h-screen border-l-fuchsia-900">
                    <div className="flex justify-center  items-start w-auto h-auto">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">One place to Resolve all your Future payment Issues</h1> </div>
                             <CreateContractComponent/>
                    </div>

                    <div id="contracts-list" className="h-screen mt-8">
                             <AllContractListComponent />
                    </div>

                    <div id="section1" className="flex justify-start space-x-4">
                        <button className="bg-gray-200 py-2 px-4 rounded-lg">Live Demo</button>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Download</button>
                    </div>
                </div>
        

                <div className="w-1/4 p-8 sticky top-4 h-screen overflow-y-auto">
                    <h3 className="text-lg font-semibold mb-4">On this page</h3>
                    <ul className="space-y-2">
                        <li><a href="#create-contract" className="text-blue-500 hover:underline">Creating New Contract</a></li>
                        <li><a href="#contracts-list" className="text-blue-500 hover:underline">See All your contracts</a></li>
                       
                    </ul>

                    <div className="mt-8">
                        <img src="your-ad-image.jpg" alt="Ad" className="w-full rounded-lg"/>
                            <p className="text-sm text-gray-600 mt-2">Beautiful Tailwind CSS templates for your next project.</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContractUiMainComponent;