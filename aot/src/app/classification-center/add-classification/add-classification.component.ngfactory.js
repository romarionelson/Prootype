/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './add-classification.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../../../node_modules/@angular/material/typings/index.ngfactory';
import * as i3 from '@angular/material';
import * as i4 from '@angular/forms';
import * as i5 from '@angular/cdk';
import * as i6 from '@angular/common';
import * as i7 from '../../../../../src/app/classification-center/add-classification/add-classification.component';
import * as i8 from '../../../../../src/app/services/add-classification.service';
import * as i9 from '../../../../../src/app/services/search.service';
var styles_AddClassificationComponent = [i0.styles];
export var RenderType_AddClassificationComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_AddClassificationComponent, data: {} });
function View_AddClassificationComponent_4(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 3, 'md-option', [['class',
                'mat-option'], ['role', 'option']], [[1, 'tabindex', 0], [2, 'mat-selected', null],
            [2, 'mat-option-multiple', null], [2, 'mat-active', null], [8, 'id',
                0], [1, 'aria-selected', 0], [1, 'aria-disabled', 0], [2, 'mat-option-disabled',
                null]], [[null, 'click'], [null, 'keydown']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 2)._selectViaInteraction() !== false);
                ad = (pd_0 && ad);
            }
            if (('keydown' === en)) {
                var pd_1 = (i1.ɵnov(_v, 2)._handleKeydown($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdOption_0, i2.RenderType_MdOption)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(49152, [[1, 4]], 0, i3.MdOption, [i1.ElementRef, [2, i3.MdOptgroup], [2, i3.MATERIAL_COMPATIBILITY_MODE]], { value: [0, 'value'] }, null), (_l()(), i1.ɵted(0, ['', '']))], function (_ck, _v) {
        var currVal_8 = _v.context.$implicit.classificationNumber;
        _ck(_v, 2, 0, currVal_8);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 2)._getTabIndex();
        var currVal_1 = i1.ɵnov(_v, 2).selected;
        var currVal_2 = i1.ɵnov(_v, 2).multiple;
        var currVal_3 = i1.ɵnov(_v, 2).active;
        var currVal_4 = i1.ɵnov(_v, 2).id;
        var currVal_5 = i1.ɵnov(_v, 2).selected.toString();
        var currVal_6 = i1.ɵnov(_v, 2).disabled.toString();
        var currVal_7 = i1.ɵnov(_v, 2).disabled;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
        var currVal_9 = _v.context.$implicit.classificationNumber;
        _ck(_v, 3, 0, currVal_9);
    });
}
function View_AddClassificationComponent_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 14, 'div', [['class',
                'flex row']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n\n\n\n            '])), (_l()(), i1.ɵeld(0, null, null, 11, 'md-select', [['class', 'mat-select'], ['formControlName',
                'classificationNumber'], ['placeholder', 'Classification Number'], ['role',
                'listbox']], [[2, 'ng-untouched', null], [2, 'ng-touched', null],
            [2, 'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null],
            [1, 'tabindex', 0], [1, 'aria-label', 0], [1, 'aria-labelledby', 0], [1, 'aria-required',
                0], [1, 'aria-disabled', 0], [1, 'aria-invalid', 0], [1, 'aria-owns', 0],
            [2, 'mat-select-disabled', null]], [[null, 'keydown'],
            [null, 'blur']], function (_v, en, $event) {
            var ad = true;
            if (('keydown' === en)) {
                var pd_0 = (i1.ɵnov(_v, 7)._handleClosedKeydown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 7)._onBlur() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdSelect_0, i2.RenderType_MdSelect)), i1.ɵdid(671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null],
            [8, null]], { name: [0, 'name'] }, null), i1.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i1.ɵdid(16384, null, 0, i4.NgControlStatus, [i4.NgControl], null, null), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE],
            i1.ElementRef], null, null), i1.ɵdid(1294336, null, 2, i3.MdSelect, [i3.ViewportRuler, i1.ChangeDetectorRef, i1.Renderer2, i1.ElementRef,
            [2, i5.Directionality], [2, i4.NgControl], [8, null], [2, i3.MD_PLACEHOLDER_GLOBAL_OPTIONS]], { placeholder: [0, 'placeholder'] }, null), i1.ɵqud(603979776, 1, { options: 1 }),
        i1.ɵqud(603979776, 2, { optionGroups: 1 }), (_l()(), i1.ɵted(0, ['\n                '])),
        (_l()(), i1.ɵand(16777216, null, 0, 1, null, View_AddClassificationComponent_4)),
        i1.ɵdid(802816, null, 0, i6.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(0, ['\n\n            '])), (_l()(), i1.ɵted(null, ['\n\n        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_15 = 'classificationNumber';
        _ck(_v, 3, 0, currVal_15);
        var currVal_16 = 'Classification Number';
        _ck(_v, 7, 0, currVal_16);
        var currVal_17 = _co.listOfClass.cl;
        _ck(_v, 12, 0, currVal_17);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 5).ngClassUntouched;
        var currVal_1 = i1.ɵnov(_v, 5).ngClassTouched;
        var currVal_2 = i1.ɵnov(_v, 5).ngClassPristine;
        var currVal_3 = i1.ɵnov(_v, 5).ngClassDirty;
        var currVal_4 = i1.ɵnov(_v, 5).ngClassValid;
        var currVal_5 = i1.ɵnov(_v, 5).ngClassInvalid;
        var currVal_6 = i1.ɵnov(_v, 5).ngClassPending;
        var currVal_7 = i1.ɵnov(_v, 7).tabIndex;
        var currVal_8 = i1.ɵnov(_v, 7)._ariaLabel;
        var currVal_9 = i1.ɵnov(_v, 7).ariaLabelledby;
        var currVal_10 = i1.ɵnov(_v, 7).required.toString();
        var currVal_11 = i1.ɵnov(_v, 7).disabled.toString();
        var currVal_12 = (((i1.ɵnov(_v, 7)._control == null) ? null : i1.ɵnov(_v, 7)._control.invalid) || 'false');
        var currVal_13 = i1.ɵnov(_v, 7)._optionIds;
        var currVal_14 = i1.ɵnov(_v, 7).disabled;
        _ck(_v, 2, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6,
            currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13,
            currVal_14]);
    });
}
function View_AddClassificationComponent_6(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 3, 'md-option', [['class',
                'mat-option'], ['role', 'option']], [[1, 'tabindex', 0], [2, 'mat-selected', null],
            [2, 'mat-option-multiple', null], [2, 'mat-active', null], [8, 'id',
                0], [1, 'aria-selected', 0], [1, 'aria-disabled', 0], [2, 'mat-option-disabled',
                null]], [[null, 'click'], [null, 'keydown']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 2)._selectViaInteraction() !== false);
                ad = (pd_0 && ad);
            }
            if (('keydown' === en)) {
                var pd_1 = (i1.ɵnov(_v, 2)._handleKeydown($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdOption_0, i2.RenderType_MdOption)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(49152, [[3, 4]], 0, i3.MdOption, [i1.ElementRef, [2, i3.MdOptgroup], [2, i3.MATERIAL_COMPATIBILITY_MODE]], { value: [0, 'value'] }, null), (_l()(), i1.ɵted(0, ['', '']))], function (_ck, _v) {
        var currVal_8 = _v.context.$implicit.classificationName;
        _ck(_v, 2, 0, currVal_8);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 2)._getTabIndex();
        var currVal_1 = i1.ɵnov(_v, 2).selected;
        var currVal_2 = i1.ɵnov(_v, 2).multiple;
        var currVal_3 = i1.ɵnov(_v, 2).active;
        var currVal_4 = i1.ɵnov(_v, 2).id;
        var currVal_5 = i1.ɵnov(_v, 2).selected.toString();
        var currVal_6 = i1.ɵnov(_v, 2).disabled.toString();
        var currVal_7 = i1.ɵnov(_v, 2).disabled;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
        var currVal_9 = _v.context.$implicit.classificationName;
        _ck(_v, 3, 0, currVal_9);
    });
}
function View_AddClassificationComponent_5(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 14, 'div', [['class',
                'flex row']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n      \n\n\n            '])), (_l()(), i1.ɵeld(0, null, null, 11, 'md-select', [['class', 'mat-select'], ['formControlName',
                'classificationName'], ['placeholder', 'Classification Name'], ['role',
                'listbox']], [[2, 'ng-untouched', null], [2, 'ng-touched', null],
            [2, 'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null],
            [1, 'tabindex', 0], [1, 'aria-label', 0], [1, 'aria-labelledby', 0], [1, 'aria-required',
                0], [1, 'aria-disabled', 0], [1, 'aria-invalid', 0], [1, 'aria-owns', 0],
            [2, 'mat-select-disabled', null]], [[null, 'keydown'],
            [null, 'blur']], function (_v, en, $event) {
            var ad = true;
            if (('keydown' === en)) {
                var pd_0 = (i1.ɵnov(_v, 7)._handleClosedKeydown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 7)._onBlur() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdSelect_0, i2.RenderType_MdSelect)), i1.ɵdid(671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null],
            [8, null]], { name: [0, 'name'] }, null), i1.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i1.ɵdid(16384, null, 0, i4.NgControlStatus, [i4.NgControl], null, null), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE],
            i1.ElementRef], null, null), i1.ɵdid(1294336, null, 2, i3.MdSelect, [i3.ViewportRuler, i1.ChangeDetectorRef, i1.Renderer2, i1.ElementRef,
            [2, i5.Directionality], [2, i4.NgControl], [8, null], [2, i3.MD_PLACEHOLDER_GLOBAL_OPTIONS]], { placeholder: [0, 'placeholder'] }, null), i1.ɵqud(603979776, 3, { options: 1 }),
        i1.ɵqud(603979776, 4, { optionGroups: 1 }), (_l()(), i1.ɵted(0, ['\n                '])),
        (_l()(), i1.ɵand(16777216, null, 0, 1, null, View_AddClassificationComponent_6)),
        i1.ɵdid(802816, null, 0, i6.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(0, ['\n\n            '])), (_l()(), i1.ɵted(null, ['\n    \n\n        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_15 = 'classificationName';
        _ck(_v, 3, 0, currVal_15);
        var currVal_16 = 'Classification Name';
        _ck(_v, 7, 0, currVal_16);
        var currVal_17 = _co.listOfClass.cl;
        _ck(_v, 12, 0, currVal_17);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 5).ngClassUntouched;
        var currVal_1 = i1.ɵnov(_v, 5).ngClassTouched;
        var currVal_2 = i1.ɵnov(_v, 5).ngClassPristine;
        var currVal_3 = i1.ɵnov(_v, 5).ngClassDirty;
        var currVal_4 = i1.ɵnov(_v, 5).ngClassValid;
        var currVal_5 = i1.ɵnov(_v, 5).ngClassInvalid;
        var currVal_6 = i1.ɵnov(_v, 5).ngClassPending;
        var currVal_7 = i1.ɵnov(_v, 7).tabIndex;
        var currVal_8 = i1.ɵnov(_v, 7)._ariaLabel;
        var currVal_9 = i1.ɵnov(_v, 7).ariaLabelledby;
        var currVal_10 = i1.ɵnov(_v, 7).required.toString();
        var currVal_11 = i1.ɵnov(_v, 7).disabled.toString();
        var currVal_12 = (((i1.ɵnov(_v, 7)._control == null) ? null : i1.ɵnov(_v, 7)._control.invalid) || 'false');
        var currVal_13 = i1.ɵnov(_v, 7)._optionIds;
        var currVal_14 = i1.ɵnov(_v, 7).disabled;
        _ck(_v, 2, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6,
            currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13,
            currVal_14]);
    });
}
function View_AddClassificationComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 41, 'form', [['novalidate',
                '']], [[2, 'ng-untouched', null], [2, 'ng-touched', null], [2, 'ng-pristine',
                null], [2, 'ng-dirty', null], [2, 'ng-valid', null], [2,
                'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                'ngSubmit'], [null, 'submit'], [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('submit' === en)) {
                var pd_0 = (i1.ɵnov(_v, 2).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i1.ɵnov(_v, 2).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (_co.onSubmit() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i4.ɵbf, [], null, null), i1.ɵdid(540672, null, 0, i4.FormGroupDirective, [[8, null], [8, null]], { form: [0, 'form'] }, { ngSubmit: 'ngSubmit' }),
        i1.ɵprd(2048, null, i4.ControlContainer, null, [i4.FormGroupDirective]),
        i1.ɵdid(16384, null, 0, i4.NgControlStatusGroup, [i4.ControlContainer], null, null), (_l()(), i1.ɵted(null, ['\n        '])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AddClassificationComponent_3)),
        i1.ɵdid(16384, null, 0, i6.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(),
            i1.ɵand(16777216, null, null, 1, null, View_AddClassificationComponent_5)),
        i1.ɵdid(16384, null, 0, i6.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(),
            i1.ɵeld(0, null, null, 19, 'div', [['class', 'flex row']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n\n            '])), (_l()(), i1.ɵeld(0, null, null, 16, 'md-input-container', [['class', 'mat-input-container']], [[1, 'align', 0], [2,
                'mat-input-invalid', null], [2, 'mat-focused', null], [2,
                'ng-untouched', null], [2, 'ng-touched', null], [2, 'ng-pristine',
                null], [2, 'ng-dirty', null], [2, 'ng-valid', null],
            [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 15)._focusInput() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i2.View_MdInputContainer_0, i2.RenderType_MdInputContainer)), i1.ɵdid(7389184, null, 6, i3.MdInputContainer, [i1.ElementRef, i1.ChangeDetectorRef,
            [2, i3.MD_PLACEHOLDER_GLOBAL_OPTIONS]], null, null), i1.ɵqud(335544320, 5, { _mdInputChild: 0 }), i1.ɵqud(335544320, 6, { _placeholderChild: 0 }), i1.ɵqud(603979776, 7, { _errorChildren: 1 }), i1.ɵqud(603979776, 8, { _hintChildren: 1 }), i1.ɵqud(603979776, 9, { _prefixChildren: 1 }), i1.ɵqud(603979776, 10, { _suffixChildren: 1 }), (_l()(),
            i1.ɵted(1, ['\n                '])), (_l()(), i1.ɵeld(0, null, 1, 6, 'input', [['class', 'mat-input-element'], ['formControlName', 'classificationType'],
            ['mdInput', ''], ['placeholder', 'Classification Type']], [[2, 'ng-untouched',
                null], [2, 'ng-touched', null], [2, 'ng-pristine', null],
            [2, 'ng-dirty', null], [2, 'ng-valid', null], [2, 'ng-invalid',
                null], [2, 'ng-pending', null], [8, 'id', 0], [8, 'placeholder',
                0], [8, 'disabled', 0], [8, 'required', 0], [1, 'aria-describedby', 0], [1,
                'aria-invalid', 0]], [[null, 'input'], [null, 'blur'],
            [null, 'compositionstart'], [null, 'compositionend'],
            [null, 'focus']], function (_v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 24)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 24).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 24)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 24)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('blur' === en)) {
                var pd_4 = (i1.ɵnov(_v, 29)._onBlur() !== false);
                ad = (pd_4 && ad);
            }
            if (('focus' === en)) {
                var pd_5 = (i1.ɵnov(_v, 29)._onFocus() !== false);
                ad = (pd_5 && ad);
            }
            if (('input' === en)) {
                var pd_6 = (i1.ɵnov(_v, 29)._onInput() !== false);
                ad = (pd_6 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i4.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i4.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [8, null], [8, null], [2, i4.NG_VALUE_ACCESSOR]], { name: [0, 'name'] }, null), i1.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i1.ɵdid(16384, null, 0, i4.NgControlStatus, [i4.NgControl], null, null), i1.ɵdid(16384, [[5, 4]], 0, i3.MdInputDirective, [i1.ElementRef, i1.Renderer2, i5.Platform, [2, i4.NgControl], [2, i4.NgForm], [2,
                i4.FormGroupDirective], [2, i3.MD_ERROR_GLOBAL_OPTIONS]], { placeholder: [0,
                'placeholder'] }, null), (_l()(), i1.ɵted(1, ['\n            '])),
        (_l()(), i1.ɵted(null, ['\n\n\n        '])), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 7, 'div', [['style',
                'float: right']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['type', 'submit']], [[8, 'disabled',
                0]], null, null, null, null)), (_l()(),
            i1.ɵted(null, ['SUBMIT'])), (_l()(), i1.ɵted(null, ['\n'])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'button', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.resetValues() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['RESET'])),
        (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.classificationtForm;
        _ck(_v, 2, 0, currVal_7);
        var currVal_8 = (_co.listOfClass != null);
        _ck(_v, 7, 0, currVal_8);
        var currVal_9 = (_co.listOfClass != null);
        _ck(_v, 10, 0, currVal_9);
        var currVal_33 = 'classificationType';
        _ck(_v, 26, 0, currVal_33);
        var currVal_34 = 'Classification Type';
        _ck(_v, 29, 0, currVal_34);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i1.ɵnov(_v, 4).ngClassUntouched;
        var currVal_1 = i1.ɵnov(_v, 4).ngClassTouched;
        var currVal_2 = i1.ɵnov(_v, 4).ngClassPristine;
        var currVal_3 = i1.ɵnov(_v, 4).ngClassDirty;
        var currVal_4 = i1.ɵnov(_v, 4).ngClassValid;
        var currVal_5 = i1.ɵnov(_v, 4).ngClassInvalid;
        var currVal_6 = i1.ɵnov(_v, 4).ngClassPending;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_10 = null;
        var currVal_11 = i1.ɵnov(_v, 15)._mdInputChild._isErrorState();
        var currVal_12 = i1.ɵnov(_v, 15)._mdInputChild.focused;
        var currVal_13 = i1.ɵnov(_v, 15)._shouldForward('untouched');
        var currVal_14 = i1.ɵnov(_v, 15)._shouldForward('touched');
        var currVal_15 = i1.ɵnov(_v, 15)._shouldForward('pristine');
        var currVal_16 = i1.ɵnov(_v, 15)._shouldForward('dirty');
        var currVal_17 = i1.ɵnov(_v, 15)._shouldForward('valid');
        var currVal_18 = i1.ɵnov(_v, 15)._shouldForward('invalid');
        var currVal_19 = i1.ɵnov(_v, 15)._shouldForward('pending');
        _ck(_v, 14, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19);
        var currVal_20 = i1.ɵnov(_v, 28).ngClassUntouched;
        var currVal_21 = i1.ɵnov(_v, 28).ngClassTouched;
        var currVal_22 = i1.ɵnov(_v, 28).ngClassPristine;
        var currVal_23 = i1.ɵnov(_v, 28).ngClassDirty;
        var currVal_24 = i1.ɵnov(_v, 28).ngClassValid;
        var currVal_25 = i1.ɵnov(_v, 28).ngClassInvalid;
        var currVal_26 = i1.ɵnov(_v, 28).ngClassPending;
        var currVal_27 = i1.ɵnov(_v, 29).id;
        var currVal_28 = i1.ɵnov(_v, 29).placeholder;
        var currVal_29 = i1.ɵnov(_v, 29).disabled;
        var currVal_30 = i1.ɵnov(_v, 29).required;
        var currVal_31 = (i1.ɵnov(_v, 29).ariaDescribedby || null);
        var currVal_32 = i1.ɵnov(_v, 29)._isErrorState();
        _ck(_v, 23, 1, [currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25,
            currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32]);
        var currVal_35 = !_co.classificationtForm.valid;
        _ck(_v, 35, 0, currVal_35);
    });
}
function View_AddClassificationComponent_7(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n    Data successfuly saved, exit now!\n']))], null, null);
}
function View_AddClassificationComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 8, 'div', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n    '])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AddClassificationComponent_2)),
        i1.ɵdid(16384, null, 0, i6.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AddClassificationComponent_7)),
        i1.ɵdid(16384, null, 0, i6.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.dataSaved;
        _ck(_v, 4, 0, currVal_0);
        var currVal_1 = !_co.dataSaved;
        _ck(_v, 7, 0, currVal_1);
    }, null);
}
export function View_AddClassificationComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_AddClassificationComponent_1)), i1.ɵdid(16384, null, 0, i6.NgIf, [i1.ViewContainerRef,
            i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null)], function (_ck, _v) {
        var currVal_0 = 1;
        _ck(_v, 1, 0, currVal_0);
    }, null);
}
export function View_AddClassificationComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'add-classification', [], null, null, null, View_AddClassificationComponent_0, RenderType_AddClassificationComponent)), i1.ɵdid(638976, null, 0, i7.AddClassificationComponent, [i4.FormBuilder, i8.AddClassificationService, i9.SearchService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
export var AddClassificationComponentNgFactory = i1.ɵccf('add-classification', i7.AddClassificationComponent, View_AddClassificationComponent_Host_0, { credentials: 'credentials' }, {}, []);
//# sourceMappingURL=add-classification.component.ngfactory.js.map