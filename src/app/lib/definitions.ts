import { UUID } from "crypto"

export type Project = {
    id: UUID;
    title: string;
    img_desc: string;
    alt_text: string;
    src: string;
    src_after: string;
};

export type Message = {
    id: UUID;
    name: string;
    email: string;
    message: string;
    date_sent: string;
};