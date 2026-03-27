import { connect } from '@tidbcloud/serverless';
import { drizzle } from 'drizzle-orm/tidb-serverless';
const client = connect({ url: process.env.TIDB_URL });
export const db = drizzle({ client });