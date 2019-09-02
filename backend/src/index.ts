import { AppServer } from './app';
import { connect } from './config/database';

async function main() {
    await connect();
    const app = new AppServer(3000);
    app.listen();
}

main();