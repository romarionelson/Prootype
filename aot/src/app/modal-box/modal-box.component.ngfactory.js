/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './modal-box.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '../classification-center/add-classification/add-classification.component.ngfactory';
import * as i4 from '../../../../src/app/classification-center/add-classification/add-classification.component';
import * as i5 from '@angular/forms';
import * as i6 from '../../../../src/app/services/add-classification.service';
import * as i7 from '../../../../src/app/services/search.service';
import * as i8 from '../../../node_modules/@angular/material/typings/index.ngfactory';
import * as i9 from '@angular/material';
import * as i10 from '../../../../src/app/modal-box/modal-box.component';
var styles_ModalBoxComponent = [i0.styles];
export var RenderType_ModalBoxComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_ModalBoxComponent, data: {} });
function View_ModalBoxComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['Delete']))], null, null);
}
function View_ModalBoxComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 29, 'div', [['class',
                'modalContent']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 26, 'div', [['class', 'modalMain']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        '])),
        (_l()(), i1.ɵeld(0, null, null, 3, 'div', [['class', 'modalHeader']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['Add Classification '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ModalBoxComponent_2)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class', 'modalBody'], ['style', 'margin-left: 10px;']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n        \n'])), (_l()(), i1.ɵeld(0, null, null, 1, 'add-classification', [], null, [[null,
                'credentialsChange']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('credentialsChange' === en)) {
                var pd_0 = ((_co.ids = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i3.View_AddClassificationComponent_0, i3.RenderType_AddClassificationComponent)),
        i1.ɵdid(638976, null, 0, i4.AddClassificationComponent, [i5.FormBuilder,
            i6.AddClassificationService, i7.SearchService], { credentials: [0, 'credentials'] }, null), (_l()(), i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 1, 'div', [['class',
                'modalFooter']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n\n\n'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 9, 'div', [['style',
                'width: 100%; height: 25px; position: fixed; background-color:white;']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 6, 'span', [['style', ' float: right;']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n'])), (_l()(),
            i1.ɵeld(0, null, null, 3, 'md-icon', [['class', 'mat-icon'],
                ['role', 'img']], null, [[null, 'click']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    var pd_0 = (_co.update() !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, i8.View_MdIcon_0, i8.RenderType_MdIcon)), i1.ɵdid(16384, null, 0, i9.MdPrefixRejector, [[2, i9.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(638976, null, 0, i9.MdIcon, [i1.Renderer2, i1.ElementRef,
            i9.MdIconRegistry, [8, null]], null, null), (_l()(),
            i1.ɵted(0, ['close'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵted(null, ['\n\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_co.method === 'delete');
        _ck(_v, 7, 0, currVal_0);
        var currVal_1 = _co.ids;
        _ck(_v, 12, 0, currVal_1);
        _ck(_v, 24, 0);
    }, null);
}
export function View_ModalBoxComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_ModalBoxComponent_1)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef,
            i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_co.from && _co.ids);
        _ck(_v, 1, 0, currVal_0);
    }, null);
}
export function View_ModalBoxComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'modal-box', [], null, null, null, View_ModalBoxComponent_0, RenderType_ModalBoxComponent)),
        i1.ɵdid(49152, null, 0, i10.ModalBoxComponent, [], null, null)], null, null);
}
export var ModalBoxComponentNgFactory = i1.ɵccf('modal-box', i10.ModalBoxComponent, View_ModalBoxComponent_Host_0, { from: 'from', method: 'method',
    ids: 'ids', modalType: 'modalType' }, { displayModal: 'displayModal' }, []);
//# sourceMappingURL=modal-box.component.ngfactory.js.map