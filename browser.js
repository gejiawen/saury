/**
 * Created by gejiawen on 2014/12/9.
 */

"use strict";

window.saury = saury();

function saury() {

    return {
        show: _showSaury,
        hide: _hideSaury
    };

    var ticket;

    /*
     * option = {
     *   message: 'I am a message'(default),
     *   timeout: 4000(default),
     *   type: 'success'(default), 'error', 'warning'
     * }
     * */
    function _showSaury() {
        _initSaury();

        var defaultOptions = {
            message: 'Saury Message!',
            timeout: 4000,
            type   : 'success'
        }, op;

        op = _parseOptions(defaultOptions, arguments);

        var tips = $('.saury-tips'),
            content = $('.saury-tips-content');

        setTimeout(function () {
            content.attr('class', 'saury-tips-content ' + op.type + '-saury');
            content.css({
                'background': op.type === 'success' ? '#68AF02' : op.type === 'error' ? '#A94442' : '#EAA000'
            });
            content.text(op.message);


            tips.fadeIn(400, function () {
                ticket = setTimeout(function () {
                    _hideSaury();
                }, op.timeout);
            })
        }, 100);

    }

    /*
     * just hide the message tip
     * */
    function _hideSaury() {
        clearTimeout(ticket);

        var tips = $('.saury-tips'),
            content = $('.saury-tips-content');

        tips.slideUp(400);
    }


    function _initSaury() {
        var tips = $('.saury-tips');

        if (tips.length) {
            clearTimeout(ticket);
            tips.hide('fast');
        } else {
            _initElement();
        }
    }

    function _initElement() {
        $('body').prepend($('<div class="saury-tips" style="display: block;"> <div class="saury-tips-content"></div></div>'));
        $('.saury-tips').css({
            'position'      : 'fixed',
            'line-height'   : '16px',
            'z-index'       : 10000,
            'width'         : 'auto',
            'padding-top'   : '2px',
            'height'        : '24px',
            'top'           : '12%',
            'text-align'    : 'center',
            'left'          : '20%',
            'right'         : '20%',
            'pointer-events': 'none'
        });
        $('.saury-tips-content').css({
            'color'        : 'white',
            'display'      : 'inline-block',
            'z-index'      : 9999,
            'border'       : '1px solid transparent',
            'padding'      : '3px 24px 3px',
            'border-radius': '3px'
        });
    }

    function _parseOptions(defaultOptions, args) {
        if (args.length === 0) {
            return defaultOptions;
        }

        if (args.length === 1 && typeof args[0] === 'object') {
            return $.extend(defaultOptions, args[0]);
        }

        if (args.length === 1 && typeof args[0] === 'string') {
            return $.extend(defaultOptions, {
                message: args[0]
            });
        }

        if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'number') {
            return $.extend(defaultOptions, {
                message: args[0],
                timeout: args[1]
            });
        }

        if (args.length === 3 && typeof args[0] === 'string' && typeof args[1] === 'number' && typeof args[2] === 'string') {
            return $.extend(defaultOptions, {
                message: args[0],
                timeout: args[1],
                type: args[2]
            });
        }
    }


}
