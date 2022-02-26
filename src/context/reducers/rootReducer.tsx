import { combineReducers } from "redux";
import { bannerReducer } from "./bannerReducer";
import { cartReducer } from "./cartReducer";
import { homeReducer } from "./homeReducer";
import { menuReducer } from "./menuReducer";
import { blogReducer } from './blogReducer';
import { skillReducer } from './skillReducer';
import { courseReducer } from "./courseReducer";
import { academyReducer } from './academyReducer';
import { portfolioReducer } from './portfolioReducer';
import { aboutReducer } from './aboutReducer';
import { serviceReducer } from './serviceReducer';
import { themeReducer } from './themeReducer';

export const rootReducer = combineReducers({
    Menu: menuReducer,
    Theme: themeReducer,
    Cart: cartReducer,
    Home: homeReducer,
    Banner: bannerReducer,
    Skill: skillReducer,
    Course: courseReducer,
    Academy: academyReducer,
    Portfolio: portfolioReducer,
    About: aboutReducer,
    Blog: blogReducer,
    Service: serviceReducer,
});