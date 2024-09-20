import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear , faXmark} from '@fortawesome/free-solid-svg-icons';
import {Button, Input} from "@nextui-org/react";
import ImageUpload from "../util/ImageUpload.tsx";
import {useState} from "react";

interface WelcomeFormProps {
    goBack: () => void;
    onUpdate: (title: string, description: string, buttonText: string) => void;
}

const WelcomeForm: React.FC<WelcomeFormProps>= ({goBack,onUpdate})=>{
    const [title, setTitle] = useState("Welcome to our form");
    const [description, setDescription] = useState("Welcome to the Home page! This is the main page of our website.");
    const [buttonText, setButtonText] = useState("Start");

    console.log(title);
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        onUpdate(newTitle, description, buttonText);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDescription = e.target.value;
        setDescription(newDescription);
        onUpdate(title, newDescription, buttonText);
    };

    const handleButtonTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newButtonText = e.target.value;
        setButtonText(newButtonText);
        onUpdate(title, description, newButtonText);
    };

    const handleSave = () => {
        const formData = {
            title,
            description,
            buttonText,
        };
        localStorage.setItem('formDetails', JSON.stringify(formData));
        alert('Details saved successfully!');
    };

    const handleDiscard =() =>{
        setTitle("Welcome to our form");
        setDescription("Welcome to the Home page! This is the main page of our website.");
        setButtonText("Start")

    }

    return(
        <div className={"flex p-4  w-96"}>
            <div>
                <div className={"flex justify-between "}>
                    <div className={"flex items-center gap-2"}>
                        <FontAwesomeIcon icon={faGear}/>
                        <p className="text-medium font-bold">Settings</p>
                    </div>

                    <div className={"flex items-center"}>
                        <Button variant='light' onClick={goBack} isIconOnly>
                            <FontAwesomeIcon icon={faXmark}/>
                        </Button>
                    </div>
                </div>


                <div className={"mt-6"}>
                    <label>Title</label>
                    <Input className={"mt-3 mb-3"} variant={"bordered"} value={title}
                           onChange={handleTitleChange}/>

                    <label>Description</label>
                    <Input className={"mt-3 mb-3"} variant={"bordered"} value={description}
                           onChange={handleDescriptionChange} />

                    <label>Button Text</label>
                    <Input className={"mt-3 mb-3"} variant={"bordered"} value={buttonText}
                           onChange={handleButtonTextChange}/>

                    <ImageUpload></ImageUpload>

                    <div className={"flex gap-4 justify-between"}>
                        <Button className={"bg-black text-white mt-10 w-36" } onClick={handleSave}>
                            Save
                        </Button>

                        <Button className={"bg-white text-rose-500 mt-10 w-36 hover:bg-rose-100"} onClick={handleDiscard}>
                            Discard
                        </Button>
                    </div>

                </div>

            </div>
            <div className={"w-full"}>

            </div>
        </div>

    )
}

export default WelcomeForm