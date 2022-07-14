import { json, redirect } from "@remix-run/node"; 
import { useParams } from "@remix-run/react";
import prisma from '~/lib/prisma';

export async function loader({ request }) {
    const getInvoice = await prisma.note.findFirst()
    if(!getInvoice) {
        return json({})
    }
    return redirect('/sales/invoices/' + getInvoice.id)
}

export default function Invoices() {
	const { invoicesId } = useParams();
    console.log(invoicesId)
    return (
        <h1>You don't have any Invoices</h1>
    )
}