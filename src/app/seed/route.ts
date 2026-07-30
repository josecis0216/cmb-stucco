import postgres from 'postgres';
import { projects } from '../lib/placeholder-data'; // invoices, customers, revenue, users,

console.log(process.env.POSTGRES_URL);

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedProjects() {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
    CREATE TABLE IF NOT EXISTS tbl_Projects (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, 
        title VARCHAR(255) NOT NULL,
        img_desc TEXT NOT NULL,
        alt_text TEXT,
        src TEXT NOT NULL
    );`;

    const insertedProjects = await Promise.all(
        projects.map(
          (project) => sql`
          INSERT INTO tbl_Projects (title, img_desc, alt_text, src)
          VALUES (${project.title}, ${project.img_desc}, ${project.alt_text}, ${project.src})
          ON CONFLICT (id) DO NOTHING;
          `,
        ),
    );

    console.log('created projects table');

    return insertedProjects;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedProjects(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
