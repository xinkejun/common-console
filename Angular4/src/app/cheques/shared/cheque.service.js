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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ChequeService = (function () {
    function ChequeService(http) {
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.chequesUrl = 'api/cheques'; // URL to web api
    }
    ChequeService.prototype.getCheques = function () {
        return this.http.get(this.chequesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; });
    };
    ChequeService.prototype.getCheque = function (id) {
        var url = this.chequesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; });
    };
    ChequeService.prototype.getChequeAmountText = function (amount) {
        if (amount == 0)
            return "ZERO";
        if (amount >= Math.pow(10, 12))
            return "AMOUT TOO MUCH TO DISPLAY";
        var dollarNumber = Math.floor(amount);
        var dollarText = this.convertNumberToWords(dollarNumber);
        var dollarUnit = dollarNumber == 1 ? "DOLLAR" : "DOLLORS";
        var centNumber = Math.round(amount * 100) % 100;
        var centText = this.convertNumberToWords(centNumber);
        var centUnit = centNumber == 1 ? "CENT" : "CENTS";
        if (dollarNumber == 0 && centNumber != 0)
            return centText + centUnit;
        if (dollarNumber != 0 && centNumber == 0)
            return dollarText + dollarUnit;
        return dollarText + dollarUnit + " AND " + centText + centUnit;
    };
    ChequeService.prototype.convertNumberToWords = function (amount) {
        if (amount == 0)
            return "ZERO";
        var words = "";
        if (Math.floor(amount / Math.pow(10, 9)) > 0) {
            words += this.convertNumberToWords(Math.floor(amount / Math.pow(10, 9))) + "BILLION ";
            amount %= Math.pow(10, 9);
        }
        if (Math.floor(amount / Math.pow(10, 6)) > 0) {
            words += this.convertNumberToWords(Math.floor(amount / Math.pow(10, 6))) + "MILLION ";
            amount %= Math.pow(10, 6);
        }
        if (Math.floor(amount / 1000) > 0) {
            words += this.convertNumberToWords(Math.floor(amount / 1000)) + "THOUSAND ";
            amount %= 1000;
        }
        if (Math.floor(amount / 100) > 0) {
            words += this.convertNumberToWords(Math.floor(amount / 100)) + "HUNDRED ";
            amount %= 100;
        }
        if (amount > 0) {
            //if (words != "") words += " ";//"AND ";
            var unitsMap = [
                "ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN"
            ];
            var tensMap = [
                "ZERO", "TEN", "TWENTY", "THIRTY", "FORTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY"
            ];
            if (amount < 20) {
                words += unitsMap[amount] + " ";
            }
            else {
                words += tensMap[Math.floor(amount / 10)];
                if ((amount % 10) > 0)
                    words += "-" + unitsMap[amount % 10] + " ";
            }
        }
        return words;
    };
    return ChequeService;
}());
ChequeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ChequeService);
exports.ChequeService = ChequeService;
//# sourceMappingURL=cheque.service.js.map