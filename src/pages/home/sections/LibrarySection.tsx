import books from "@/data/books.json";
import BookCard from "@/shared/components/BookCard";
import { SectionHeader } from "@/shared/components/SectionHeader";
import type { LibraryBook } from "@/shared/types/books";
import { useTranslation } from "@/shared/useTranslation";
import { motion } from "motion/react";

export default function LibrarySection() {
    const { t, language } = useTranslation();
    const libraryBooks = books as LibraryBook[];
    const content =
        libraryBooks.length === 0 ? (
            <div className="rounded-[1.6rem] border border-dashed border-border px-6 py-10 text-center text-sm text-gray-600">
                {t("noBooks")}
            </div>
        ) : (
            <motion.div className="grid grid-cols-1 gap-6 sm:gap-12 md:grid-cols-3">
                {libraryBooks.map((book, i) => (
                    <BookCard
                        key={`${book.title.en}-${i}`}
                        title={book.title[language]}
                        author={book.author[language]}
                        status={book.status}
                        cover={book.cover}
                        href={book.href}
                    />
                ))}
            </motion.div>
        );

    return (
        <motion.section
            id="library"
            className="space-y-12 sm:space-y-16 scroll-mt-24"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            key={language}
        >
            <div className="space-y-4">
                <SectionHeader title="library" number="03" />
                <p className="text-gray-600 max-w-xl text-lg italic">{t("libraryDescription")}</p>
            </div>
            {content}
        </motion.section>
    );
}
