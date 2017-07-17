import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//import 'rxjs/add/operator/toPromise';

import { Cheque } from './cheque.model';

@Injectable()
export class ChequeService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private chequesUrl = 'api/cheques';  // URL to web api

    constructor(private http: Http) { }

    getCheques(): Promise<Cheque[]> {
        return this.http.get(this.chequesUrl)
            .toPromise()
            .then(response => response.json().data as Cheque[])
    }

    getCheque(id: number): Promise<Cheque> {
        const url = `${this.chequesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Cheque)
    }

    getChequeAmountText(amount: number): string {
        if (amount == 0)
            return "ZERO";
        if (amount >= Math.pow(10,12))
            return "AMOUT TOO MUCH TO DISPLAY";

        let dollarNumber = Math.floor(amount);
        let dollarText = this.convertNumberToWords(dollarNumber);
        let dollarUnit = dollarNumber == 1 ? "DOLLAR" : "DOLLORS";
        
        let centNumber = Math.round(amount * 100) % 100;
        let centText = this.convertNumberToWords(centNumber);
        let centUnit = centNumber == 1 ? "CENT" : "CENTS";

        if (dollarNumber == 0 && centNumber != 0)
            return centText + centUnit;

        if (dollarNumber != 0 && centNumber == 0)
            return dollarText + dollarUnit;

        return dollarText + dollarUnit + " AND " + centText + centUnit;
    }

    convertNumberToWords(amount: number): string {
        if (amount == 0)
            return "ZERO";

        let words: string = "";
        if (Math.floor(amount /  Math.pow(10,9)) > 0) {
            words += this.convertNumberToWords(Math.floor(amount / Math.pow(10,9))) + "BILLION ";
            amount %= Math.pow(10,9);
        }
        if (Math.floor(amount / Math.pow(10,6)) > 0) {
            words += this.convertNumberToWords(Math.floor(amount / Math.pow(10,6))) + "MILLION ";
            amount %= Math.pow(10,6);
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
            let unitsMap =
                [
                    "ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN"
                ];
            let tensMap =
                [
                    "ZERO", "TEN", "TWENTY", "THIRTY", "FORTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY"
                ];
            if (amount < 20) {
                words += unitsMap[amount] + " ";
            }
            else {
                words += tensMap[Math.floor(amount / 10)];
                if ((amount % 10) > 0) words += "-" + unitsMap[amount % 10] + " ";
            }
        }
        return words;

    }
}
