/* eslint-disable max-len */
import React from 'react';
import { node } from 'prop-types';
import { OneFetchyeProvider, OneCache } from 'fetchye-one-app';
import { combineReducers } from 'redux-immutable';
import childRoutes from '../childRoutes';
import NavBar from './Navbar';

export const Caseroot = ({ children }) => (
  <><div><NavBar /></div><div><OneFetchyeProvider>{children}</OneFetchyeProvider></div></>);
// Read about childRoutes:
// https://github.com/americanexpress/one-app/blob/main/docs/api/modules/Routing.md#childroutes
Caseroot.childRoutes = childRoutes;

// Read about appConfig:
// https://github.com/americanexpress/one-app/blob/main/docs/api/modules/App-Configuration.md
/* istanbul ignore next */
if (!global.BROWSER) {
  // eslint-disable-next-line global-require
  Caseroot.appConfig = require('../appConfig').default;
}

Caseroot.propTypes = {
  children: node,
};

// export const mapDispatchToProps = (dispatch) => ({
//   switchLanguage: async ({ target }) => {
//     await dispatch(updateLocale(target.value));
//     await dispatch(loadLanguagePack('caseroot', { fallbackLocale: 'en-US' }));
//   },
// });

// export const mapStateToProps = (state) => {
//   const localeName = state.getIn(['intl', 'activeLocale']);
//   const languagePack = state.getIn(
//     ['intl', 'languagePacks', localeName, 'caseroot'],
//     fromJS({})
//   ).toJS();

//   return {
//     languageData: languagePack && languagePack.data ? languagePack.data : {},
//     localeName,
//   };
// };

// export const loadModuleData = ({ store: { dispatch } }) => dispatch(loadLanguagePack('caseroot', { fallbackLocale: 'en-US' }));

Caseroot.holocron = {
  name: 'caseroot',
  reducer: combineReducers({
    fetchye: OneCache().reducer,
  }),
};

export default Caseroot;
