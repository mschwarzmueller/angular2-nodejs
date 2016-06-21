"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var message_model_1 = require("./message.model");
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.getMessage = function () {
        return this.http.get('http://localhost:3000/messages')
            .map(function (data) {
            var json = data.json();
            var msgArray = [];
            var message;
            for (var _i = 0, _a = json.data; _i < _a.length; _i++) {
                var element = _a[_i];
                message = new message_model_1.Message(element.content);
                msgArray.push(message);
            }
            return msgArray;
        });
    };
    MessageService.prototype.saveMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/message', body, { headers: headers });
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBR2pCLDhCQUF3QixpQkFBaUIsQ0FBQyxDQUFBO0FBRzFDO0lBQ0ksd0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQyxtQ0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDO2FBQ2pELEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDTCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekIsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQUksT0FBTyxDQUFDO1lBQ1osR0FBRyxDQUFDLENBQWdCLFVBQVMsRUFBVCxLQUFBLElBQUksQ0FBQyxJQUFJLEVBQVQsY0FBUyxFQUFULElBQVMsQ0FBQztnQkFBekIsSUFBSSxPQUFPLFNBQUE7Z0JBQ1osT0FBTyxHQUFHLElBQUksdUJBQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDMUI7WUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxPQUFnQjtRQUN4QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQXRCTDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBdUJiLHFCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSxzQkFBYyxpQkFzQjFCLENBQUEiLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vbWVzc2FnZS5tb2RlbFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cbiAgICBcbiAgICBnZXRNZXNzYWdlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZXMnKVxuICAgICAgICAgICAgLm1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gZGF0YS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbXNnQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGpzb24uZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoZWxlbWVudC5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgbXNnQXJyYXkucHVzaChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1zZ0FycmF5O1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHNhdmVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZScsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
