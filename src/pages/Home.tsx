import {Button, Divider, Image} from "@nextui-org/react";
import {PlusIcon} from "../util/PlusIcon.tsx";

const Home = () => {
    return (
        <div className="p-4 h-screen" >
            <div className={"flex h-full"} >
                <div className=" w-1/3 p-4" >
                    <div>
                        <p className="text-medium font-bold">Steps</p>
                        <p className={"text-small text-gray-500"}>The steps users will take to complete the form</p>
                        <div className={"pt-2 "}>
                            <Button size="md" className={"bg-zinc-50 hover:bg-zinc-100 w-full"}>
                                Welcome Screen
                            </Button>

                            <div className={"mt-3 mb-3"}>
                                <Button size={"sm"} className={"bg-white border-1"} endContent={<PlusIcon />}>
                                    Add field
                                </Button>
                            </div>

                            <Divider></Divider>

                            <Button size="md" className={"bg-zinc-50 hover:bg-zinc-100 w-full mt-3"}>
                                End Screen
                            </Button>

                        </div>

                    </div>
                </div>

                <div className="flex bg-black w-full rounded-lg items-center justify-center text-white h-full">
                    <div className={"p-8 ml-12"}>
                        <h1 className="text-3xl font-bold">Home</h1>
                        <p className="mt-2 text-lg">
                            Welcome to the Home page! This is the main page of our website.
                        </p>
                        <Button radius="lg" className={"mt-5 bg-white"}>
                            Start
                        </Button>
                    </div>

                    <div className={"p-8"}>
                        <Image
                            src={"https://nextui-docs-v2.vercel.app/images/album-cover.png"}
                            width={540}
                            isBlurred
                        />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Home;
