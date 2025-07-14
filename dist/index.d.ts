export type MetadataParams = {
    title: string;
    description?: string;
    urlPath?: string;
    image?: string;
};
export declare function buildMetadata({ title, description, urlPath, image, }: MetadataParams): {
    title: string;
    description: string;
    metadataBase: URL;
    openGraph: {
        title: string;
        description: string;
        url: string;
        images: {
            url: string;
            width: number;
            height: number;
            alt: string;
        }[];
    };
    twitter: {
        card: string;
        title: string;
        description: string;
        images: string[];
    };
};
