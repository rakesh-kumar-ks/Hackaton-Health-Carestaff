
import { useState } from "react";
import { FileUpload } from "../../components/ui/file-upload";
import axios from "axios";
import { urlObject } from '../../urls/Urls'
import {useUserDetails,UserDetails} from '../../ZobloabContext/UserDetailsContext';

export default function ResumeUpload() {

  const {userDetails} = useUserDetails();

  const [files, setFiles] = useState<File|null>(null);

  const handleFileUpload = async (fileevent: React.ChangeEvent<HTMLInputElement>|any) => {
    const selectedFile = fileevent[0]

    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    setFiles(selectedFile);

    console.log("selectedFile",selectedFile)

    try {
      const formData = new FormData(); // Use FormData for efficient multipart/form-data handling
      formData.append('resume', selectedFile); // Add the file to the form data

      const apiUrl = `${urlObject.url}/api/generate/questions/${userDetails?.username}`; // Replace with actual URL

      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        },
      });

      // Handle the response from the server (e.g., display generated questions)
      console.log('Response:', response);
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle upload errors (e.g., display error message to the user)
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
     <FileUpload onChange={handleFileUpload} disabled={files!=null?false:true} />
    </div>
  );
}
