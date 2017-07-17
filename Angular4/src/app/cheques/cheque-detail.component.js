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
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var cheque_service_1 = require("./shared/cheque.service");
require("rxjs/add/operator/switchMap");
var ChequeDetailComponent = (function () {
    function ChequeDetailComponent(chequeService, route, location) {
        this.chequeService = chequeService;
        this.route = route;
        this.location = location;
    }
    ChequeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (p) { return _this.chequeService.getCheque(+p['id']); })
            .subscribe(function (c) {
            _this.cheque = c;
        });
    };
    ChequeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ChequeDetailComponent;
}());
ChequeDetailComponent = __decorate([
    core_1.Component({
        selector: 'cheque-detail',
        templateUrl: './cheque-detail.component.html',
    }),
    __metadata("design:paramtypes", [cheque_service_1.ChequeService,
        router_1.ActivatedRoute,
        common_1.Location])
], ChequeDetailComponent);
exports.ChequeDetailComponent = ChequeDetailComponent;
//# sourceMappingURL=cheque-detail.component.js.map