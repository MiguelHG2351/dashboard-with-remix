import { json } from "@remix-run/node";
import { useParams, useLoaderData } from "@remix-run/react";
import prisma from '~/lib/prisma';

export async function loader({ params }) {
	// const id = params.invoiceId
    const data = await prisma.note.findMany({})
    console.log(data)
    return json(data)
}

export default function ProductIDInfo() {
	const { invoicesId } = useParams();
    const data = useLoaderData()
    console.log(data)

    return (
        <h1>
            El id es: {invoicesId}
        </h1>
    )
}