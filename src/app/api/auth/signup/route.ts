import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { z } from "zod";

const prisma = new PrismaClient();

const signupSchema = z
  .object({
    name: z
      .string({ message: "Nome é obrigatório" })
      .min(1, "Nome é obrigatório")
      .max(50, "Nome pode ter no máximo 50 caracteres"),
    email: z
      .string({ message: "Email é obrigatório" })
      .min(1, "Email é obrigatório")
      .email("Email inválido")
      .max(100, "Email pode ter no máximo 100 caracteres"),
    password: z
      .string({ message: "Senha é obrigatória" })
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
        "A senha deve conter pelo menos uma letra e um número"
      ),
    confirmPassword: z
      .string({ message: "Confirmação da senha é obrigatória" })
      .min(8, "A senha deve ter no mínimo 8 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = signupSchema.parse(body);

    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Usuário já cadastrado" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name,
      },
    });

    return NextResponse.json(
      { message: "Usuário criado com sucesso" },
      { status: 201 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
