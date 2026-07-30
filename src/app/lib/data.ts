import postgres from 'postgres';
import { Project, Message } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchProjects() {
    try {
        const data = await sql<Project[]>`SELECT * FROM tbl_Projects`;

        console.log('Data fetch completed');

        return data;
    } catch (error) {
        console.error('Databse Error:', error);
        throw new Error('Failed to fetch projects.');
    }
};

export async function fetchMessagesReceived() {
    try {
        const data = await sql<Message[]>`SELECT * FROM tbl_ContactMessages`;

        console.log('Data fetch completed');

        return data;
    } catch (error) {
        console.error('Databse Error:', error);
        throw new Error('Failed to fetch messages.');
    }
};