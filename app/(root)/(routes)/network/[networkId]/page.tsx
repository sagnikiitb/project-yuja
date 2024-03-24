import prismadb from "@/lib/prismadb";
import { NetworkCreationForm } from "./components/network-creation-form";

interface NetworkIdPageProps {
    params: {
        networkId: string;
    };
};





const NetworkIdPage = async ({
    params
}: NetworkIdPageProps) => {
    //TODO: Check for wallet login

    const network = await prismadb.network.findUnique({
        where: {
            id: params.networkId,
        }
    });


    return (
        <NetworkCreationForm 
          initialData={network}
          />
    );
}

export default NetworkIdPage;