import MoonbaseClient from "./"

const mb: MoonbaseClient = new MoonbaseClient("http://localhost:80", {
    public_api_key: "secret",
    private_api_key: "secret" // optional
})

const main = async (): Promise<void> => {
    try {
        const health = await mb.health()
        if (!health || health.status_code !== 200) {
            return console.log("Health check failed");
        }
    } catch (e) {
        console.log(e)
    }
}
main().then(_e => null);