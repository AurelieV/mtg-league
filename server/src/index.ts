import { NestFactory } from 'nest.js';

import { ApplicationModule } from './app.module';


const app = NestFactory.create(ApplicationModule);
app.listen(3001, () => console.log('Application is listening on port 3001'));