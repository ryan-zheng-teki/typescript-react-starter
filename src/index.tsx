import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/Hello';
import { I18nProvider } from "@lingui/react";
import {lang, loadCatalogs } from './translations/loadMessagesCatalog';



const startApp = async () => {
    const catalogs = (await loadCatalogs(lang)) || {};
    const App = () => (
        <I18nProvider language={lang} catalogs={catalogs}>
            <Hello compiler="TypeScript" framework="react"/>
        </I18nProvider>
    )
    
    ReactDOM.render(<App/>,document.getElementById("example"))
}

startApp();
