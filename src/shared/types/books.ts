export type BookStatus = "reading" | "completed" | "toRead";

export type LocalizedBookText = {
    pt: string;
    en: string;
};

export type LibraryBook = {
    title: LocalizedBookText;
    author: LocalizedBookText;
    status: BookStatus;
    cover: string;
    href: string;
};
