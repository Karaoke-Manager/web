import process from "node:process";

function exit() {
	process.exit(1);
}

process.on("SIGTERM", exit);
process.on("SIGINT", exit);
