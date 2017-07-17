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
var router_1 = require("@angular/router");
var cheque_service_1 = require("./shared/cheque.service");
require("rxjs/add/operator/toPromise");
var ChequeListComponent = (function () {
    function ChequeListComponent(chequeService, router) {
        this.chequeService = chequeService;
        this.router = router;
    }
    ChequeListComponent.prototype.ngOnInit = function () {
        this.getCheques();
    };
    ChequeListComponent.prototype.getCheques = function () {
        var _this = this;
        this.chequeService
            .getCheques()
            .then(function (arr) { return _this.cheques = arr.sort((function (left, right) {
            if (left.date > right.date)
                return -1;
            if (left.date < right.date)
                return 1;
            return 0;
        })); });
    };
    ChequeListComponent.prototype.onSelect = function (cheque) {
        this.router.navigate(['/cheques', cheque.id]);
    };
    return ChequeListComponent;
}());
ChequeListComponent = __decorate([
    core_1.Component({
        selector: 'my-cheques',
        templateUrl: './cheque-list.component.html',
        styleUrls: ['./cheque-list.component.css'],
    }),
    __metadata("design:paramtypes", [cheque_service_1.ChequeService,
        router_1.Router])
], ChequeListComponent);
exports.ChequeListComponent = ChequeListComponent;
//# sourceMappingURL=cheque-list.component.js.map