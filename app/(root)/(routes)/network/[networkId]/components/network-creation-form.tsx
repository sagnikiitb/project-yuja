"use client";

import { Network } from "@prisma/client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { ImageUpload } from "@/components/ui/image-upload";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";


interface NetworkCreationFormProps {
    initialData: Network | null;
}

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required.",
    }),
    description: z.string().min(1, {
        message: "Description is required.",
    }),
    initialAccounts: z.number().min(1, {
        message: "Initial number of accounts is required.",
    }),
    initialBalance: z.number().min(1, {
        message: "Initial account balance is required.",
    }),
    src: z.string().min(1, {
        message: "Image is required.",
    }),

    

})


export const NetworkCreationForm = ({
    initialData
}: NetworkCreationFormProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            id: "",
            name: "",     
            initialAccounts: 2,     
            initialBalance: 100,               
            description: "",         
            src: "",                          
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }


    return ( 
        <div className="h-full p-4 space-y-2 max-w-3xl mx-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pb-10">
                    <div className="space-y-2 w-full">
                        <div>
                            <h3 className="text-lg font-medium">
                                Network Creation
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Build your network
                            </p>
                        </div>
                        <Separator className="bg-primary/10" />

                    </div>
                    <FormField
                        name="src"
                        render={({ field }) => (
                            <FormItem className="flex flex-col items-center justify-center space-y-4">
                                <FormControl>
                                    <ImageUpload disabled={isLoading}
                                        onChange={field.onChange}
                                        value={field.value}
                                    />
                                </FormControl>
            
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="col-span-2 md:col-span-1">
                                    <FormLabel>Network Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isLoading}
                                            placeholder="X Net"
                                            {...field}
                                        />
                                    </FormControl>
                                    
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="description"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="col-span-2 md:col-span-1">
                                    <FormLabel>Network Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isLoading}
                                            placeholder="Immutable chains,
                                            Digital ledgers record,
                                            Trust in bytes secured."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                    A haiku perhaps, about your network.
                                </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="initialAccounts"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="col-span-2 md:col-span-1">
                                    <FormLabel>Initial Number of Accounts</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isLoading}
                                            placeholder="3"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                    Minimum of 2 nodes required
                                </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="initialBalance"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="col-span-2 md:col-span-1">
                                    <FormLabel>Initial Account Balance</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isLoading}
                                            placeholder="100"
                                            {...field}
                                        />
                                    </FormControl>
                                    
                                </FormItem>
                            )}
                        />

                        <div className="w-full flex justify-left">
                            <Button size="lg" disabled={isLoading}>
                                Create Network
                                <Wand2 className="w-4 h4 ml-2" />
                            </Button>

                        </div>

                    </div>

                </form>

            </Form>
        </div>
     )
};
 