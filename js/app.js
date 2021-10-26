const switch_1 = $('.switch1');
const switch_2 = $('.switch2');
const switch_3 = $('.switch3');
const label1 = $('.label1');
const label2 = $('.label2');
const label3 = $('.label3');
const app = {
    removeActive: function(section) {
        section.find(".img").each(function(index, value) {
            if ($(value).hasClass('active')) {
                $(value).removeClass('active');
            }
        });
    },
    changeButton: function(section) {
        var sw1 = section.find(".switch1").is(':checked');
        var sw2 = section.find(".switch2").is(':checked');
        var sw3 = section.find(".switch3").is(':checked');
        if (sw2) {
            section.find(".button-2").removeClass('off');
            section.find(".label2").css('background', 'white');
            section.find(".button-2").addClass('on');
        } else {
            section.find(".button-2").removeClass('on');
            section.find(".label2").css('background', 'black');
            section.find(".button-2").addClass('off');
        }
        if (sw1) {
            section.find(".button-1").removeClass('off');
            section.find(".button-1").addClass('on');
            section.find(".label1").css('background', 'white')

        } else {
            section.find(".button-1").removeClass('on');
            section.find(".label1").css('background', 'black')
            section.find(".button-1").addClass('off');
        }
        if (sw3) {
            section.find(".button-3").removeClass('off');
            section.find(".label3").css('background', 'white')
            section.find(".button-3").addClass('on');
        } else {
            section.find(".button-3").removeClass('on');
            section.find(".label3").css('background', 'black')
            section.find(".button-3").addClass('off');
        }
    },
    loadImageInit: function(section) {
        const __this = this;
        var sw1 = section.find(".switch1").is(':checked');
        var sw2 = section.find(".switch2").is(':checked');
        var sw3 = section.find(".switch3").is(':checked');
        if (sw1 && !sw2 && !sw3) {
            __this.removeActive(section);
            section.find(".img3").addClass('active');
        } else if (sw1 && sw2 && !sw3) {
            __this.removeActive(section);
            section.find(".img4").addClass('active');
        } else if (sw1 && !sw2 && sw3) {
            __this.removeActive(section);
            section.find(".img5").addClass('active');
        } else if (sw1 && sw2 && sw3) {
            __this.removeActive(section);
            section.find(".img2").addClass('active');
        } else if (!sw1 && sw2 && !sw3) {
            __this.removeActive(section);
            section.find(".img6").addClass('active');
        } else if (!sw1 && !sw2 && sw3) {
            __this.removeActive(section);
            section.find(".img7").addClass('active');
        } else if (!sw1 && sw2 && sw3) {
            __this.removeActive(section);
            section.find(".img8").addClass('active');
        } else {
            __this.removeActive(section);
            section.find(".img1").addClass('active');
        }
    },
    handlerEvent: function() {
        const _this = this;
        switch_1.on('change', function() {
            var section = this.closest("section");
            _this.loadImageInit($(section));
            _this.changeButton($(section));
        })
        switch_2.on('change', function() {
            var section = this.closest("section");
            _this.loadImageInit($(section));
            _this.changeButton($(section));
        })
        switch_3.on('change', function() {
            var section = this.closest("section");
            _this.loadImageInit($(section));
            _this.changeButton($(section));
        })

    },
    start: function() {
        this.handlerEvent();
    }
}
app.start();