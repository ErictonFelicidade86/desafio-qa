"use client";

import type React from "react"
import { z } from "zod";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useState } from "react";

const loginSchema = z.object({
  email: z.string({ message: "Email é obrigatório"}).min(1, "Email é obrigatório").email("Email inválido"),
  password: z.string({ message: "Senha é obrigatória"}).min(1, "Senha é obrigatória")
});

type LoginFormData = z.infer<typeof loginSchema>;


export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
   const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true)

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false
    });
    if (!res?.error) {
      router.push("/");
      return;
    }
    setLoading(false)

    toast('Credenciais inválidas', {
      description: 'Tente novamente',
      position: 'top-center'
    }) 
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Entrar</CardTitle>
          <CardDescription>Digite seu email abaixo para entrar na sua conta</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <FormField
                 control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input id="email" type="email" placeholder="m@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                 />
              </div>
              <div className="grid gap-2">
                <FormField
                 control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input id="password" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                 />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                Entrar
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Não tem uma conta?{" "}
              <a href="/signup" className="underline underline-offset-4">
                Cadastre-se
              </a>
            </div>
          </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

