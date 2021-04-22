import configureMockStore from 'redux-mock-store';	
import thunk from 'redux-thunk';	
import axios from 'axios';	
import MockAdapter from 'axios-mock-adapter';	
//import * as actions from './actions';	

import contactReducer, {
    searchContact,
    fetchContacts,
} from '../redux/contactSlice';

const middleware = [thunk];	
const mockStore = configureMockStore(middleware);	
const mock = new MockAdapter(axios);	
const store = mockStore();

  
  describe('contact reducer', () => {
    const initialState = {
        users: [{name:{first:'John',last:'Smith'}}],
        amount:50,
        filteredUsers: [],
        status: 'idle',
    };
    beforeEach(() => {
        store.clearActions();	    
    });

    it('should handle initial state', () => {
      expect(contactReducer(undefined, { type: 'unknown' })).toEqual({
        users: [],
        amount:50,
        filteredUsers: [],
        status: 'idle',
        error: null,
        query: '',
        firstNameOrder: 'desc',
        lastNameOrder: 'desc',
      });
    });

    it('should handle fetch', () => {
        let amount = initialState.amount;
        mock.onGet(`https://randomuser.me/api/?results=${amount}`)
            .reply(200, {
                    results: {
                        users: [
                            {
                                name: 'John Smith',
                                id: 1
                            }
                        ]
                    }
              });
        store.dispatch(fetchContacts()).then(() => {
            expect(store.getActions().length).toEqual(2)
        })
    });

    it('should handle search', () => {
      const actual = contactReducer(initialState, searchContact('J'));
      expect(actual.filteredUsers.length).toEqual(1);
    });
  });