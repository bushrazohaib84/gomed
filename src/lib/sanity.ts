import {createClient} from 'next-sanity';
import imageUrlBuilder from "@sanity/image-url"
export const client = createClient({
    projectId: '4pznf98v',
    dataset: 'production',
    apiVersion: '2023-07-20',
    useCdn: true,
});
const builder = imageUrlBuilder(client)

export function urlFor(source:any) {
    return builder.image(source)
}