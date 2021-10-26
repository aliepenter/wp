const switch_1 = $('#switch-1');
const switch_2 = $('#switch-2');
const switch_3 = $('#switch-3');
const label1 = $('#label1');
const label2 = $('#label2');
const label3 = $('#label3');
const switch_1_button = $('#sw1-button');
const switch_2_button = $('#sw2-button');
const switch_3_button = $('#sw3-button');
const img = $('.img');
const img1 = $('.img1');
const img2 = $('.img2');
const img3 = $('.img3');
const img4 = $('.img4');
const img5 = $('.img5');
const img6 = $('.img6');
const img7 = $('.img7');
const img8 = $('.img8');
var count = 0;
$.fn.hasAttr = function(name) {
    return this.attr(name) !== undefined;
};

const app = {

    removeActive: function() {
        img.each(function() {
            if (img.hasClass('active')) {
                img.removeClass('active');
            }
        });
    },
    changeButton: function() {
        var sw1 = switch_1.is(':checked');
        var sw2 = switch_2.is(':checked');
        var sw3 = switch_3.is(':checked');
        if (sw2) {
            switch_2_button.removeClass('off');
            label2.css('background', 'white')
            switch_2_button.addClass('on');
        } else {
            switch_2_button.removeClass('on');
            label2.css('background', 'black')
            switch_2_button.addClass('off');
        }
        if (sw1) {
            switch_1_button.removeClass('off');
            switch_1_button.addClass('on');
            label1.css('background', 'white')

        } else {
            switch_1_button.removeClass('on');
            label1.css('background', 'black')
            switch_1_button.addClass('off');
        }
        if (sw3) {
            switch_3_button.removeClass('off');
            label3.css('background', 'white')
            switch_3_button.addClass('on');
        } else {
            switch_3_button.removeClass('on');
            label3.css('background', 'black')
            switch_3_button.addClass('off');
        }
    },
    loadButton: function() {
        label1.css('background', 'black')
        label2.css('background', 'black')
        label3.css('background', 'black')
    },
    loadImageInit: function() {
        const __this = this;
        var sw1 = switch_1.is(':checked');
        var sw2 = switch_2.is(':checked');
        var sw3 = switch_3.is(':checked');
        if (sw1 && !sw2 && !sw3) {
            __this.removeActive();
            img3.addClass('active');
        } else if (sw1 && sw2 && !sw3) {
            __this.removeActive();
            img4.addClass('active');
        } else if (sw1 && !sw2 && sw3) {
            __this.removeActive();
            img5.addClass('active');
        } else if (sw1 && sw2 && sw3) {
            __this.removeActive();
            img2.addClass('active');
        } else if (!sw1 && sw2 && !sw3) {
            __this.removeActive();
            img6.addClass('active');
        } else if (!sw1 && !sw2 && sw3) {
            __this.removeActive();
            img7.addClass('active');
        } else if (!sw1 && sw2 && sw3) {
            __this.removeActive();
            img8.addClass('active');
        } else {
            __this.removeActive();
            img1.addClass('active');
        }
    },
    handlerEvent: function() {
        const _this = this;
        switch_2.on('change', function() {
            _this.loadImageInit();
            _this.changeButton();
        })
        switch_3.on('change', function() {
            _this.loadImageInit();
            _this.changeButton();
        })
        switch_1.on('change', function() {
            _this.loadImageInit();
            _this.changeButton();
        })
    },
    start: function() {
        this.loadButton();
        this.loadImageInit();
        this.handlerEvent();
    }
}
app.start();