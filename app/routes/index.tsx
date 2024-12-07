import {LinksFunction, MetaFunction, useFetcher} from "remix";

import stylesUrl from "../styles/index.css";
import {createClient} from "@hey-api/client-fetch";
import {addPet} from "~/models/pet";

export let meta: MetaFunction = () => {
    return {
        title: "Remix Starter",
        description: "Welcome to remix!"
    };
};

export let links: LinksFunction = () => {
    return [{rel: "stylesheet", href: stylesUrl}];
};

export async function action() {

    const client = createClient({
        baseUrl: "http://localhost:3000",
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': "csrfToken",
            cookie: "cookieString",
        },
    })

    const response = await addPet({
        client,
        throwOnError: false,
        body: {
            category: {
                id: 0,
                name: "name",
            },
            id: 0,
            name: "name",
            photoUrls: ['string'],
            status: 'available',
            tags: [
                {
                    id: 0,
                    name: 'string',
                },
            ],
        },
    });

    console.log(response);

    return null
}

export default function Index() {
    const {Form} = useFetcher()
    return (
        <div style={{textAlign: "center", padding: 20}}>
            <Form method="post">
                <button type="submit">
                    Submit
                </button>
            </Form>
        </div>
    );
}
