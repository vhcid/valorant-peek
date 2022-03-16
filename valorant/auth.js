import config from '../misc/config';
import fs from 'fs';

import {fetch, parseSetCookie, stringifyCookies, extractTokensFromUri, tokenExpiry} from "../misc/util";

let users;

export const loadUserData = () => {
    if(!users) try {
        if(!fs.existsSync("data")) fs.mkdirSync('data');
        users = JSON.parse(fs.readFileSync("data/users.json", "utf-8"));
        saveUserData();
    } catch(e) {
        users = {};
    }
}
