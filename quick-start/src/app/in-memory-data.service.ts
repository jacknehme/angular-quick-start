import { InMemoryDbService } from 'angular-in-memory-web-api';
import { createTestCustomers, createTestStates } from './test-data';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        return {
            states: createTestStates(),
            customers:createTestCustomers()
        };
    }
}