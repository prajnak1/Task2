//page: addressable route to server
//used params inside of jsx to render the jsx component
//page transfers without a full reload of the browser (client side routing)
export default function Page({params}:{
    params: {id: string}
}) {
    return <h1>ID: {params.id}</h1>;
}
