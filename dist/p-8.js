"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    function squareAsync(n) {
        return __awaiter(this, void 0, void 0, function* () {
            // if (n < 0) {
            //     console.log('Negative number not allowed')
            // }
            return yield new Promise((res, rej) => {
                if (n < 0) {
                    rej("Negative number not allowed");
                }
                else {
                    setTimeout(() => {
                        res(n * n);
                    }, 2000);
                }
            });
        });
    }
    squareAsync(54)
        .then((res) => {
        console.log(res);
    }) // Output after 1s: 16
        .catch((err) => {
        console.log(err);
    });
}
