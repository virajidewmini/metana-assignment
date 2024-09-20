import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGear, faXmark} from '@fortawesome/free-solid-svg-icons';
import {Button, Divider, Input, Switch} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const EmailForm= ()=>{
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    const [emailTitle, setEmailTitle] = useState(() => {
        const savedData = localStorage.getItem('emailFormDetails');
        return savedData ? JSON.parse(savedData).emailTitle : '';
    });

    const [emailDescription, setEmailDescription] = useState(() => {
        const savedData = localStorage.getItem('emailFormDetails');
        return savedData ? JSON.parse(savedData).emailDescription : '';
    });

    const handleSave = () => {
        const emailFormData = {
            emailTitle,
            emailDescription,
        };
        localStorage.setItem('emailFormDetails', JSON.stringify(emailFormData));
        handleGoBack()
    };


    return(
        <div className={"flex p-4 h-screen "}>
            <div className={"w-1/3 p-4"}>
                <div className={"flex justify-between "}>
                    <div className={"flex items-center gap-2"}>
                        <FontAwesomeIcon icon={faGear}/>
                        <p className="text-medium font-bold">Settings</p>
                    </div>

                    <div className={"flex items-center"}>
                        <Button variant='light' onClick={handleGoBack} isIconOnly>
                            <FontAwesomeIcon icon={faXmark}/>
                        </Button>
                    </div>
                </div>


                <div className={"mt-6"}>
                    <label>Title</label>
                    <Input className={"mt-3 mb-3"} variant={"bordered"} value={emailTitle}
                           onChange={(e) => setEmailTitle(e.target.value)} />

                    <label>Description</label>
                    <Input className={"mt-3 mb-3"} variant={"bordered"} value={emailDescription} onChange={(e) => setEmailDescription(e.target.value)}/>

                    <div className={"flex justify-between mt-3"}>
                        <label>Required </label>
                        <Switch defaultSelected color="default"></Switch>

                    </div>

                    <div className={"flex gap-4 justify-between"}>
                        <Button className={"bg-black text-white mt-10 w-36"} onClick={handleSave}>
                            Save
                        </Button>

                        <Button className={"bg-white text-rose-500 mt-10 w-36 hover:bg-rose-100"}>
                            Discard
                        </Button>
                    </div>

                </div>

            </div>
            <div className={"w-full"}>
                <div className="flex bg-black w-full rounded-lg items-center justify-center text-white h-full">
                    <div className={"p-8 ml-12"}>
                        <h1 className="text-3xl font-bold">{emailTitle}</h1>
                        <p className="mt-2 text-lg mb-24">
                            {emailDescription}
                        </p>
                        <Divider className={"bg-white "}></Divider>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default EmailForm