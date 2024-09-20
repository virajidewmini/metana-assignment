import {
    Button,
    Image,
} from "@nextui-org/react";
import HomeForm from "./HomeForm.tsx";
import WelcomeForm from "./WelcomeForm.tsx";
import {useState} from "react";

const Home = () => {

    const [currentView, setCurrentView] = useState('home');
    const goToWelcomeForm = () => {
        setCurrentView('welcome');
    };

    const goBack = () => {
        setCurrentView('home');
    };

    const [formDetails, setFormDetails] = useState(() => {
        const savedData = localStorage.getItem('formDetails');
        return savedData
            ? JSON.parse(savedData)
            : { title: "Welcome to our form", description: "Welcome to the Home page! This is the main page of our website.", buttonText: "Start" };
    });

    const updateFormDetails = (title: string, description: string, buttonText: string) => {
        setFormDetails({ title, description, buttonText });
    };

    return (
        <div className="p-4 h-screen">
            <div className={"flex h-full"}>

                <div id="form">
                    {currentView === 'home' ? (
                        <HomeForm goToWelcomeForm={goToWelcomeForm}/>
                    ) : (
                        <WelcomeForm goBack={goBack} onUpdate={updateFormDetails}/>
                    )}
                </div>



                <div className="flex bg-black w-full rounded-lg items-center justify-center text-white h-full">
                    <div className={"p-8 ml-12"}>
                        <h1 className="text-3xl font-bold">{formDetails.title}</h1>
                        <p className="mt-2 text-lg">
                            {formDetails.description}
                        </p>
                        <Button radius="lg" className={"mt-5 bg-white"}>
                            {formDetails.buttonText}
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
