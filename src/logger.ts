
const log = (input: string) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp} ${input}]`)
}

export default log