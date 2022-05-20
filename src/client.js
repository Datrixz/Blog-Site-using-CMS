import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: "6nh6l55g",
    dataset: "production",
    apiVersion: "2022-05-19",
    useCdn: true
})