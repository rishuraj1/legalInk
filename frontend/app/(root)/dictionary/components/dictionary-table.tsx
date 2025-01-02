import { Dictionary } from "@/types";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const DictionaryTable = ({ data }: {
    data: Dictionary[];
}) => {

    return (
        <Table>
            <TableCaption className="text-start mt-6 dark:bg-zinc-800/40 bg-gray-300/30 p-2 rounded-md shadow-lg">This is a basic guide for the users of this website to help them to understand the legal words and phrases. Our motive is to help the readers to have an idea of the meaning of different legal words in a layman language rather than to provide them with strict legal definitions and explanations. Any corrections, Improvements, suggestions and additions are highly welcomed. Please email us with your comments.
                The Compilation of the Meanings of the Words and phrases used in the website may or may not have been taken from different sources and it is made open for all the authenticated authors whose writings have been approved by the team to add any such meanings and vocabularies used in their writings to help the readers to directly surf into the dictionary for better and easier understanding of the writing.
                This is a work in progress and it is available for public domain, LegalInk is not liable for any misinterpretations or sources referred for the meaning of these vocabs and legal words or its explanation.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="">Word</TableHead>
                    <TableHead className="text-right">Meaning</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map((word) => (
                    <TableRow key={word._id} className="w-full h-full p-3">
                        <TableCell className="p-3">{word.word}</TableCell>
                        <TableCell className="text-right py-5">{word.meaning}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default DictionaryTable;