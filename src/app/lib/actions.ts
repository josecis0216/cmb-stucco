'use server';

import { z } from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const formSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    message: z.string(),
    date: z.string()
});

const CreateContactMessage = formSchema.omit({ id: true, date: true })

export async function createContactMessage(formData: FormData) {
    const { name, email, message } = CreateContactMessage.parse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });
    const date = new Date().toISOString().split('T')[0];

    try {
        await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        await sql`
        CREATE TABLE IF NOT EXISTS tbl_ContactMessages (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, 
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        message TEXT, 
        date_sent TEXT NOT NULL
    );`;
        await sql`
        INSERT INTO tbl_ContactMessages (name, email, message, date_sent)
        VALUES (${name}, ${email}, ${message}, ${date})`;
    } catch (error) {
        console.error(error);
        return {
            success: false, 
            message: 'Database Error: Failed to Create Contact Message',
        };
    }
    
    revalidatePath('/contact');
    return {
        success: true,
        message: 'Successfully posted contact message to db',
    }
}