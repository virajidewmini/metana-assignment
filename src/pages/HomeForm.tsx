import {Button, Divider, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure} from "@nextui-org/react";
import {PlusIcon} from "../util/PlusIcon.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCaretDown,
    faCheck,
    faEnvelope, faFile, faGlobe,
    faInfo,
    faPen,
    faPenToSquare,
    faPhone
} from "@fortawesome/free-solid-svg-icons";

interface HomeFormProps {
    goToWelcomeForm: () => void; // Function type for goToWelcomeForm
}
const HomeForm: React.FC<HomeFormProps> = ({goToWelcomeForm})=>{
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const popupView = () => {
        onOpen()
    }

    const popup =[
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"3xl"} >
            <ModalContent>

                <div style={{ maxHeight: '600px', overflowY: 'auto', padding:'8px' }}>
                    <ModalHeader className="flex flex-col gap-1">Add fields</ModalHeader>
                    <ModalBody>
                        <div className={"gap-4 grid grid-cols-4"}>
                            <div className={"flex items-center"}>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <Button className={"bg-white"}> Email</Button>
                            </div>

                            <div className={"flex items-center"}>
                                <FontAwesomeIcon icon={faPen}/>
                                <Button className={"bg-white"}>Short text</Button>
                            </div>

                            <div className={"flex items-center"}>
                                <FontAwesomeIcon icon={faCheck}/>
                                <Button className={"bg-white"}> Multiple Choice</Button>
                            </div>

                            <div className={"flex items-center"}>
                                <FontAwesomeIcon icon={faCaretDown}/>
                                <Button className={"bg-white"}> Dropdown</Button>
                            </div>
                        </div>

                        <div className={"gap-4 grid grid-cols-4"}>
                            <div className={"flex items-center"}>
                                <FontAwesomeIcon icon={faPhone}/>
                                <Button className={"bg-white"}>Phone Number</Button>
                            </div>

                            <div className={"flex items-center"}>
                                <FontAwesomeIcon icon={faPenToSquare}/>
                                <Button className={"bg-white"}>Section</Button>
                            </div>

                            <div className={"flex items-center"}>
                                <FontAwesomeIcon icon={faInfo}/>
                                <Button className={"bg-white"}>Contact Information</Button>
                            </div>

                            <div className={"flex items-center"}>
                                <FontAwesomeIcon icon={faFile}/>
                                <Button className={"bg-white"}> Legal</Button>
                            </div>
                        </div>
                        <div className={"gap-4 grid grid-cols-1"}>
                            <div className={"flex items-center"}>
                                <FontAwesomeIcon icon={faGlobe}/>
                                <Button className={"bg-white"}>Country</Button>
                            </div>
                        </div>

                    </ModalBody>

                </div>

            </ModalContent>
        </Modal>
    ]

    return (
        <div className=" flex p-4 w-96">
            <div>
                <p className="text-medium font-bold">Steps</p>
                <p className={"text-small text-gray-500"}>The steps users will take to complete the form</p>
                <div className={"pt-2 "}>
                    <Button size="md" className={"bg-zinc-50 hover:bg-zinc-100 w-full"} onClick={goToWelcomeForm}>
                        Welcome Screen
                    </Button>

                    <div className={"mt-3 mb-3"}>
                        {popup}
                        <Button size={"sm"} className={"bg-white border-1"} endContent={<PlusIcon/>}
                                onPress={popupView}>
                            Add field
                        </Button>
                    </div>

                    <Divider></Divider>

                    <Button size="md" className={"bg-zinc-50 hover:bg-zinc-100 w-full mt-3"}>
                        End Screen
                    </Button>

                </div>


            <div className={"w-full"}>

            </div>
            </div>
        </div>
    )
}
export default HomeForm