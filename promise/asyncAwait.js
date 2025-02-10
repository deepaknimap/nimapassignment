function fetchData() {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve("data is fatched successfully");
        }, 2000);
    });
}

async function processData() {
    try {
        console.log("Fetching data...");
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

processData();
