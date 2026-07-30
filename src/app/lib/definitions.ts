import { UUID } from "crypto"

export type Project = {
    id: UUID;
    title: string;
    img_desc: string;
    alt_text: string;
    src: string;
};

export type Message = {
    id: UUID;
    name: string;
    email: string;
    message: string;
    date_sent: string;
};