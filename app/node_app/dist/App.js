"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
class App {
    constructor(opts) {
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = require('path');
            const express = require('express');
            let app = express();
            this.app = app;
            const port = process.env.RUSSJ_PORT || process.env.PORT || 9001; //default is 9000
            this.port = port;
            this.basicAppSetup();
            yield this.addControllers();
        });
    }
    static startApp(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            let mainApp = new App(opts);
            yield mainApp.init();
        });
    }
    addControllers() {
        return __awaiter(this, void 0, void 0, function* () {
            let app = this.app;
            yield (function () {
                return __awaiter(this, void 0, void 0, function* () {
                    let route = '/ping';
                    let router = express.Router();
                    app.use(route, router);
                    router.use('/', (req, res) => {
                        res.send(`ok`);
                    });
                });
            })();
        });
    }
    basicAppSetup() {
        let app = this.app;
        app.all('*', (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Headers", "*");
            next();
        });
        app.all('*', function (req, res, next) {
            if (req.method == 'OPTIONS') {
                return res.status(200).send();
            }
            next();
        });
        let bodyParser = require('body-parser');
        app.use(bodyParser.urlencoded());
        app.use(bodyParser.json());
        app.listen(this.port, () => console.log(`Example app listening on port ${this.port}!`));
        app.use('/', (req, res) => {
            res.send(`ok`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vQXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsTUFBcUIsR0FBRztJQUVwQixZQUFZLElBQUs7SUFFakIsQ0FBQztJQU1LLElBQUk7O1lBR04sTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuQyxJQUFJLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNmLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLGlCQUFpQjtZQUNsRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFHckIsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFHaEMsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLFFBQVEsQ0FBQyxJQUFLOztZQUN2QixJQUFJLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU1QixNQUFNLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDO0tBQUE7SUFFSyxjQUFjOztZQUNoQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBR25CLE1BQU0sQ0FBQzs7b0JBQ0gsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDO29CQUNwQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUV2QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUUsRUFBRTt3QkFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQzthQUFBLENBQUMsRUFBRSxDQUFBO1FBQ1IsQ0FBQztLQUFBO0lBR0QsYUFBYTtRQUNULElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQzVCLEdBQUcsQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0MsZ0dBQWdHO1lBQ2hHLEdBQUcsQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDaEQsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1lBQ2pDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7Z0JBQ3pCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNqQztZQUNELElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUNqQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUN4RCxDQUFDLENBQUM7UUFHUCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUUsRUFBRTtZQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBR1AsQ0FBQztDQUdKO0FBbEZELHNCQWtGQyJ9