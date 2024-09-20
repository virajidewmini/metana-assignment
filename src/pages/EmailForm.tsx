import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import {Button, Input, Switch} from "@nextui-org/react";


const EmailForm= ()=>{
    return(
        <div className={"flex p-4 "}>
            <div className={"w-1/3 "}>
                <div className={"flex items-center gap-2"}>
                    <FontAwesomeIcon icon={faGear} />
                    <p className="text-medium font-bold">Settings</p>
                </div>

                <div className={"mt-6"}>
                    <label>Title</label>
                    <Input className={"mt-3 mb-3"} variant={"bordered"} />

                    <label>Description</label>
                    <Input className={"mt-3 mb-3"} variant={"bordered"} />

                    <label>Button Text</label>
                    <Input className={"mt-3 mb-3"} variant={"bordered"}/>

                    <div className={"flex justify-between mt-3"}>
                        <label>Required </label>
                        <Switch defaultSelected color="default"></Switch>

                    </div>

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

export default EmailForm