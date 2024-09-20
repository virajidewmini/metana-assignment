import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import {Button, Input} from "@nextui-org/react";
import ImageUpload from "../util/ImageUpload.tsx";

const WelcomeForm= ()=>{
    return(
        <div className={"flex p-4 "}>
            <div className={"w-1/3 "}>
                <div className={"flex items-center gap-2"}>
                    <FontAwesomeIcon icon={faGear} />
                    <p className="text-medium font-bold">Settings</p>
                </div>

                <div className={"mt-6"}>
                    <label>Title</label>
                    <Input className={"mt-3 mb-3"} variant={"bordered"} defaultValue={"Welcome to our form"}/>

                    <label>Description</label>
                    <Input className={"mt-3 mb-3"} variant={"bordered"}defaultValue={"This is a description of the form"} />

                    <label>Button Text</label>
                    <Input className={"mt-3 mb-3"} variant={"bordered"} defaultValue={"Start"}/>

                    <ImageUpload></ImageUpload>

                    <div className={"flex gap-4 justify-between"}>
                        <Button className={"bg-black text-white mt-10 w-36"}>
                            Save
                        </Button>

                        <Button className={"bg-white text-rose-500 mt-10 w-36 hover:bg-rose-100"}>
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