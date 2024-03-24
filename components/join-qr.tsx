"use client";

import { JoinQR } from "@prisma/client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { ImageUpload } from "@/components/ui/image-upload";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import { QRUpload } from "./ui/qr-upload";


interface JoinQRFormProps {
    initialData: JoinQR| null;
}

const formSchema = z.object({
    src: z.string().min(1, {
        message: "Image is required.",
    }),

    

})


export const JoinQRForm = ({
    initialData
}: JoinQRFormProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {       
            src: "",                          
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }


    return ( 
        
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pb-10">
            
                    <FormField
                        name="src"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-1 md:grid-cols-1">
                                <FormControl>
                                    <QRUpload disabled={isLoading}
                                        onChange={field.onChange}
                                        value={field.value}
                                    />
                                </FormControl>
            
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                </form>

            </Form>
     )
};
 