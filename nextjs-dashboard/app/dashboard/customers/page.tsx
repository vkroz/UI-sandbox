export default async function Page() {
    console.log('Simulate 3 sec delay...');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return <p>Customers Page</p>;
}
